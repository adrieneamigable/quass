/* 
    * File Name     : company.js
    * Path:         : assets/js/company.js
*/
$(()=>{
    var companyId       = null;
    var docId           = null;
    var swalWithBootstrapButtons;
    var companyService = {
        init:()=>{
            companyService.ajax.getCompany(); 
            companyService.ajax.getInvitation(); 
            swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success mr-2',
                  cancelButton: 'btn btn-danger mr-2'
                },
                buttonsStyling: false
              })
        },
        ajax:{
            /* 
                * Add company
                * this will add new company to this login account
            */
            getCompany:()=>{

                var payoad = JSON.stringify({
                    accessToken:accessToken
                })
                $.ajax({
                    type:'post',
                    url:getCompanyApi,
                    dataType:'json',
                    data:payoad,
                    beforeSend:function(){
                        ajaxAddOn.addFullPageLoading();
                    },
                    success:function(response){
                        if(!response.hasOwnProperty('_isError') && !response._isError){
                            $.each(response.entities.owner,function(k,v){   
                                companyService.display.companyCard("#own-company-container",v)
                            })
                            $.each(response.entities.user,function(k,v){
                                companyService.display.userCompanyCard("#other-company-container",v)
                            })
                        }else{
                            companyService.display.swalToast("error",response.reason)
                        }

                        // companyService.display.destroyOwl('#own-company-container');
                        // companyService.display.destroyOwl('#other-company-container')
                        companyService.display.triggerOwl('#own-company-container');
                        companyService.display.triggerOwl('#other-company-container');

                        ajaxAddOn.removeFullPageLoading();
                    }
                })
            },
            /* 
                * Add company
                * this will add new company to this login account
            */
            getInvitation:()=>{

                var payoad = JSON.stringify({
                    accessToken:accessToken
                })

                $.ajax({
                    type:'post',
                    url:getCompanyInvitation,
                    dataType:'json',
                    data:payoad,
                    beforeSend:function(){
                        ajaxAddOn.addFullPageLoading();
                    },
                    success:function(response){
                        if(!response.hasOwnProperty('_isError') && !response._isError){
                            $.each(response.invites,function(k,v){
                                companyService.display.incomingCompanyCard("#incoming-company-container",v)
                            })
                        }else{
                            companyService.display.swalToast("error",response.reason)
                        }
                        
                        // companyService.display.destroyOwl('#incoming-company-container')
                        companyService.display.triggerOwl('#incoming-company-container');

                       

                        

                        ajaxAddOn.removeFullPageLoading();
                    }
                })
            },
            /* 
                * Add company
                * this will add new company to this login account
            */
            addCompany:(companyPayload)=>{

                return new Promise((resolve,reject)=>{
                    $.ajax({
                        type:'post',
                        url:registerCompanyApi,
                        dataType:'json',
                        data:companyPayload,
                        beforeSend:function(){
                            ajaxAddOn.addLoading('create-company-form');
                        },
                        success:function(response){
                            resolve(response)
                        }
                    })
                })

            },
            /* 
                * Update company
                * this will add new company to this login account
            */
            deleteCompany:(payoad)=>{
                $.ajax({
                    type:'post',
                    url:`${deleteCompanyApi}`,
                    dataType:'json',
                    data:payoad,
                    beforeSend:function(){
                        ajaxAddOn.addFullPageLoading()
                    },
                    success:function(response){
                        console.log(response)
                        ajaxAddOn.swalMessage(response._isError,response.reason);
                        ajaxAddOn.removeFullPageLoading();
                    }
                })
            },
            /* 
                * Update company
                * this will add new company to this login account
            */
            updateCompany:(payoad)=>{
                $.ajax({
                    type:'post',
                    url:`${updateCompanyApi}`,
                    dataType:'json',
                    data:payoad,
                    beforeSend:function(){
                        ajaxAddOn.addLoading('update-company-form');
                    },
                    success:function(response){
                        if(!response._isError){
                            
                            // ajaxAddOn.swalMessage(false,`Company ${response.name} has been added`);
                        }
                        console.log(response)
                        ajaxAddOn.swalMessage(response._isError,response.reason);

                        
                        ajaxAddOn.removeLoading('update-company-form');
                    }
                })
            },
            /* 
                * Invite user to comany
            */
            linkInvite:(payload)=>{
                $.ajax({
                    type:'post',
                    url:linkInviteApi,
                    dataType:'json',
                    data:payload,
                    beforeSend:function(){
                        ajaxAddOn.addLoading('invite-company-form');
                    },
                    success:function(response){
                        console.log(response)
                        ajaxAddOn.swalMessage(response._isError,response.reason);
                        ajaxAddOn.removeLoading('invite-company-form');
                    }
                })
            },
            /* 
                * Invite user to comany
            */
            acceptInvite:(elem)=>{
                return new Promise((resolve,reject)=>{
                    swalWithBootstrapButtons.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, accept it!',
                        cancelButtonText: 'No, cancel!',
                        reverseButtons: true
                    }).then((result) => {
                        if (result.value) {

                            let payload = JSON.stringify({
                                accessToken:accessToken,
                                linkToken:elem.linkToken,
                            })
            
                            $.ajax({
                                type:'post',
                                url:acceptCompanyInvitation,
                                dataType:'json',
                                data:payload,
                                beforeSend:function(){
                                    ajaxAddOn.addFullPageLoading();
                                },
                                success:function(response){
                                    if(!response._isError){
                                        let data = {
                                            name:elem.name,
                                            linkToken:response.linkToken
                                        }
                                        
                                        companyService.display.userCompanyCard("#other-company-container",data)

                                        companyService.display.destroyOwl('#incoming-company-container');
                                        companyService.display.destroyOwl('#other-company-container');

                                        companyService.display.triggerOwl('#incoming-company-container');
                                        companyService.display.triggerOwl('#other-company-container');

                                        resolve(true);
                                    }
                                    ajaxAddOn.swalMessage(response._isError,response.reason);
                                    ajaxAddOn.removeFullPageLoading();
                                }
                            })
                    
                        } 
                    }) 
                })
            },
            /* 
             * Set company data
             * this will set company data like company logo
            */
            setCompanyEntity:(payload,category)=>{
                return new Promise((resolve,reject)=>{
                    $.ajax({
                        type:'post',
                        url:`${setEntityDataApi}/${category}`,
                        dataType:'json',
                        data:payload,
                        success:function(response){
                            console.log(response)
                        }
                    })
                },'json')
            },
            /* 
             * Update image to docs db
             * this will be send a file 
            */
            docsAddData:(entityId,payload)=>{
                return new Promise((resolve,reject)=>{
                    $.ajax({
                        type:'post',
                        url:`${saveDocDataApi}/${entityId}/?accessToken=${accessToken}`,
                        dataType:'json',
                        contentType: false,
                        processData: false,
                        data:payload,
                        success:function(response){
                            resolve(response);
                        }
                    })
                })
            },
            removeDocData:()=>{
                return new Promise((resolve,reject)=>{
                    if(docId != null || docId != ''){
                        $.ajax({
                            type:'get',
                            url:`${removeItemDocDataApi}/${docId}/?accessToken=${accessToken}`,
                            dataType:'json',
                            success:function(response){
                                docId = null;
                                resolve(true);
                            }
                        })
                    }else{
                        resolve(true);
                    }
                })
            },
            setCompanLogo:(payload)=>{
                return new Promise((resolve,reject)=>{
                    $.ajax({
                        type:'post',
                        url:setCompanLogo,
                        dataType:'json',
                        data:payload,
                        success:function(response){
                            resolve(response);
                        }
                    })
                })
            }
        },
        //display
        display:{
            /* message */
            swalToast:(icon = "success",message = "successfully")=>{
                $.notify(message, icon);
            },
            destroyOwl:(elem)=>{
                $(`${elem}`).trigger('destroy.owl.carousel'); //destroy own carousel
            },
            triggerOwl:(elem) => {

                let owl = $(elem); //asign element to owl;
            
            
                owl.owlCarousel({
                    margin:10,
                    responsiveClass: true,
                    autoHeight: true,
                    dots: false,
                    lazyLoad:true,
                    // nav:true,
                    responsive:{
                        0:{
                            items:1,
                            animateOut: 'fadeOut',
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:5
                        }
                    }
                });
            
            
                owl.on('mousewheel', '.owl-stage', function (e) {
                    if (e.deltaY > 0) {
                        owl.trigger('next.owl');
                    } else {
                        owl.trigger('prev.owl');
                    }
                    e.preventDefault();
                });
            },
            companyCard:(container,elem)=>{
                $(container).prepend(
                    $("<div>")
                        .addClass("item")
                        .append(
                            $("<div>")
                                .addClass("card border-left-primary shadow h-100 py-2")
                                .append(
                                    $("<div>")
                                        .addClass("card-body")
                                        .append(
                                            $("<div>")
                                                .addClass("row no-gutters")
                                                .append(
                                                    $("<div>")
                                                        .addClass("col-12 mr-2")
                                                        .append(
                                                            $("<img>")
                                                                .attr({
                                                                    src: elem.CompanyLogo != null ? `https://api.hivegroupinc.com/doc/main/download/${elem.CompanyLogo}/${elem.entityId}/0?accessToken=${accessToken}` : `${baseUrl}/assets/logo/empty-logo.png`,
                                                                })
                                                                .addClass("img-responsive rounded-circle")
                                                                .css({
                                                                    width:'50px',
                                                                    height:'50px',
                                                                }),
                                                        ),
                                                    $("<div>")
                                                        .addClass("col-12 mr-2")
                                                        .append(
                                                            $("<div>")
                                                                .addClass("text-primary ext-xs font-weight-bold text-uppercase mb-1")
                                                                // .addClass("ext-xs font-weight-bold text-primary text-uppercase mb-1")
                                                                .text(elem.name)
                                                                .css({
                                                                    'font-size':'14px',
                                                                }),
                                                            $("<div>")
                                                                .addClass("h5 mb-0 font-weight-bold text-gray-800")
                                                        ),
                                                    $("<div>")
                                                        .addClass("col-4")
                                                        .append(
                                                            $("<button>")
                                                                .addClass("btn btn-primary btn-sm")
                                                                .text("Invite")
                                                                .click(function(){
                                                                    companyId = elem.entityId;
                                                                    $("#inviteCompany").modal("show");
                                                                })
                                                        ),
                                                    $("<div>")
                                                        .addClass("col-4")
                                                        .append(
                                                            $("<button>")
                                                                .addClass("btn btn-success btn-sm")
                                                                .text("Update")
                                                                .click(function(){
                                                                    companyId = elem.entityId;
                                                                    docId     = elem.CompanyLogo;
                                                                    $("#updateCompany").modal("show");
                                                                })
                                                        ),
                                                   
                                                )
                                        )
                                )
                        )
                )
            },
            userCompanyCard:(container,elem)=>{
                $(container).prepend(
                    $("<div>")
                        .addClass("item")
                        .append(
                            $("<div>")
                                .addClass("card border-left-primary shadow h-100 py-2")
                                .append(
                                    $("<div>")
                                        .addClass("card-body")
                                        .append(
                                            $("<div>")
                                                .addClass("row no-gutters")
                                                .append(
                                                    $("<div>")
                                                        .addClass("col-12 mr-2")
                                                        .append(
                                                            $("<img>")
                                                                .attr({
                                                                    src: elem.CompanyLogo != null ? `https://api.hivegroupinc.com/doc/main/download/${elem.CompanyLogo}/${elem.entityId}/0?accessToken=${accessToken}` : `${baseUrl}/assets/logo/empty-logo.png`,
                                                                })
                                                                .addClass("img-responsive rounded-circle")
                                                                .css({
                                                                    width:'50px',
                                                                    height:'50px',
                                                                }),
                                                        ),
                                                    $("<div>")
                                                        .addClass("col-12 mr-2")
                                                        .append(
                                                            $("<div>")
                                                                .addClass("text-primary ext-xs font-weight-bold text-uppercase mb-1")
                                                                // .addClass("ext-xs font-weight-bold text-primary text-uppercase mb-1")
                                                                .text(elem.name)
                                                                .css({
                                                                    'font-size':'14px',
                                                                }),
                                                            $("<div>")
                                                                .addClass("h5 mb-0 font-weight-bold text-gray-800")
                                                        ),
                                                    $("<div>")
                                                        .addClass("col-4")
                                                        .append(
                                                            $("<button>")
                                                                .addClass("btn btn-primary btn-sm")
                                                                .text("View")
                                                                .click(function(){
                                                                })
                                                        ),
                                                   
                                                )
                                        )
                                )
                        )
                )
            },
            incomingCompanyCard:(container,elem)=>{
                $(container).prepend(
                    $("<div>")
                        .addClass("item")
                        .append(
                            $("<div>")
                                .addClass("card border-left-primary shadow h-100 py-2")
                                .append(
                                    $("<div>")
                                        .addClass("card-body")
                                        .append(
                                            $("<div>")
                                                .addClass("row no-gutters")
                                                .append(
                                                    // $("<div>")
                                                    //     .addClass("col-12 mr-2")
                                                    //     .append(
                                                    //         $("<img>")
                                                    //             .attr({
                                                    //                 src: elem.CompanyLogo != null ? `https://api.hivegroupinc.com/doc/main/download/${elem.CompanyLogo}/${elem.entityId}/0?accessToken=${accessToken}` : `${baseUrl}/assets/logo/empty-logo.png`,
                                                    //             })
                                                    //             .addClass("img-responsive rounded-circle")
                                                    //             .css({
                                                    //                 width:'50px',
                                                    //                 height:'50px',
                                                    //             }),
                                                    //     ),
                                                    $("<div>")
                                                        .addClass("col-12 mr-2")
                                                        .append(
                                                            $("<div>")
                                                                .addClass("text-primary ext-xs font-weight-bold text-uppercase mb-1")
                                                                // .addClass("ext-xs font-weight-bold text-primary text-uppercase mb-1")
                                                                .text(elem.company)
                                                                .css({
                                                                    'font-size':'14px',
                                                                }),
                                                            $("<div>")
                                                                .addClass("h5 mb-0 font-weight-bold text-gray-800")
                                                        ),
                                                    $("<div>")
                                                        .addClass("col-4")
                                                        .append(
                                                            $("<button>")
                                                                .addClass("btn btn-primary btn-sm")
                                                                .text("Accept")
                                                                .click(function(e){
                                                                    var indexToRemove = $(this).parents(".owl-item").index();
                                                                    let data = {
                                                                        name:elem.company,
                                                                        linkToken:elem.linkToken
                                                                    }
                                                                    companyService.ajax.acceptInvite(data)
                                                                    .then(response=>{
                                                                        if(response){
                                                                            $(this).parents('.item').hide('slow', function(){ 
                                                                                $(this).parents('.owl-carousel').trigger('remove.owl.carousel', [indexToRemove]).trigger('refresh.owl.carousel'); 
                                                                            });
                                                                        }
                                                                    })
                                                                })
                                                        ),
                                                   
                                                )
                                        )
                                )
                        )
                )
            },
        }
    }

    companyService.init();

    //Add Company Form
    $("#create-company-form").validate({
    	errorElement: 'span', //change error placement to span
        errorClass: 'text-danger', // add error class to text danger on bootstrap
        highlight: function (element, errorClass, validClass) {  //init hightligh function
            $(element).closest('.form-group').removeClass("has-success"); // removed class success if the data is error
            $(element).closest('.form-group').addClass("has-error"); // add error class
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass("has-error"); // removed class error if the data is error
            $(element).closest('.form-group').addClass("has-success"); // add success class
        },
    	rules:{ // initialize rules
    		name:{
    			required:true, // add required
            },
            industry:{
    			required:true, // add required
            },
            description:{
    			required:true, // add required
            },
    	},
        submitHandler:function(form){ // submit function if the all rules is true
            newForm = $(form);

        
            var payload = JSON.stringify({
                name: newForm.find('input[name=name]').val(),
                industry: newForm.find('input[name=industry]').val(),
                description: newForm.find('textarea[name=description]').val(),
                accessToken: accessToken,
            })

            companyService.ajax.addCompany(payload)
            .then(addCompanyResponse=>{
                if(!addCompanyResponse._isError){
                    
                    var formData = new FormData();
                    var files = newForm.find('input[name=logo]')[0].files[0];
             
                    if(typeof files != 'undefined'){
                        formData.append('logo',files );
                        formData.append('storage', 'public');
                        formData.append('folder', 'quass_company/logo/');
                        companyService.ajax.docsAddData(addCompanyResponse.id,formData)
                        .then(docData=>{
                            if(!docData._isError){
                                let setCompanyPayload = JSON.stringify({
                                    CompanyLogo:docData.files.logo.docId,
                                    companyId:addCompanyResponse.id,
                                    accessToken:accessToken
                                })
                                companyService.ajax.setCompanLogo(setCompanyPayload)
                            }else{
                                ajaxAddOn.swalMessage(docData._isError,docData.reason);
                            }
                        })       
                    }

                    let companyData = {
                        entityId:addCompanyResponse.id,
                        name:addCompanyResponse.name,
                        industry:addCompanyResponse.industry,
                        description:addCompanyResponse.description,
                    }
                    
                    companyService.display.companyCard("#own-company-container",companyData);
                    // companyService.display.destroyOwl('#other-company-container')
                    companyService.display.destroyOwl('#own-company-container');
                    companyService.display.triggerOwl('#own-company-container');
                    ajaxAddOn.swalMessage(false,`Company ${addCompanyResponse.name} has been added`);
                    $("#addCompany").modal('hide');
                    
    
                    
                }else{
                    ajaxAddOn.swalMessage(addCompanyResponse._isError,addCompanyResponse.reason);
                }
                
                ajaxAddOn.removeLoading('create-company-form');
            })

            
    	}
    })
    //Update Company Form
    $("#update-company-form").validate({
    	errorElement: 'span', //change error placement to span
        errorClass: 'text-danger', // add error class to text danger on bootstrap
        highlight: function (element, errorClass, validClass) {  //init hightligh function
            $(element).closest('.form-group').removeClass("has-success"); // removed class success if the data is error
            $(element).closest('.form-group').addClass("has-error"); // add error class
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass("has-error"); // removed class error if the data is error
            $(element).closest('.form-group').addClass("has-success"); // add success class
        },
    	rules:{ // initialize rules
    		// name:{
    		// 	required:true, // add required
            // },
            // industry:{
    		// 	required:true, // add required
            // },
            // description:{
    		// 	required:true, // add required
            // },
    	},
        submitHandler:function(form){ // submit function if the all rules is true
            newForm = $(form);
            var formData = new FormData();
            var files = newForm.find('input[name=logo]')[0].files[0];
            // var payload = JSON.stringify({
            //     name: newForm.find('input[name=name]').val(),
            //     industry: newForm.find('input[name=industry]').val(),
            //     description: newForm.find('textarea[name=description]').val(),
            //     accessToken: accessToken,
            //     companyId:companyId
            // })
            // companyService.ajax.updateCompany(payload)
            // removeDocData

            if(typeof files != 'undefined'){
                formData.append('logo',files );
                formData.append('storage', 'public');
                formData.append('folder', 'quass_company/logo/');

                companyService.ajax.removeDocData()
                .then(removeDocData=>{
                    if(removeDocData){
                        companyService.ajax.docsAddData(companyId,formData)
                        .then(docData=>{
                            if(!docData._isError){
                                let setCompanyPayload = JSON.stringify({
                                    CompanyLogo:docData.files.logo.docId,
                                    companyId:companyId,
                                    accessToken:accessToken
                                })
                                companyService.ajax.setCompanLogo(setCompanyPayload)
                            }else{
                                ajaxAddOn.swalMessage(docData._isError,docData.reason);
                            }
                        })   
                    }
                })

                
            }
    	}
    })
    //Invite Company Form
    $("#invite-company-form").validate({
    	errorElement: 'span', //change error placement to span
        errorClass: 'text-danger', // add error class to text danger on bootstrap
        highlight: function (element, errorClass, validClass) {  //init hightligh function
            $(element).closest('.form-group').removeClass("has-success"); // removed class success if the data is error
            $(element).closest('.form-group').addClass("has-error"); // add error class
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass("has-error"); // removed class error if the data is error
            $(element).closest('.form-group').addClass("has-success"); // add success class
        },
    	rules:{ // initialize rules
    		name:{
    			required:true, // add required
            },
            email:{
    			required:true, // add required
            },
    	},
        submitHandler:function(form){ // submit function if the all rules is true
            formData = $(form);
            var payload = JSON.stringify({
                // name: formData.find('input[name=name]').val(),
                email: formData.find('input[name=email]').val(),
                companyId: companyId,
                accessToken: accessToken,
            })
            companyService.ajax.linkInvite(payload)
    	}
    })


   
    
})