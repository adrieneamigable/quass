$(()=>{
    settings = {
        profileSetting:{
            init:()=>{
                $('#user-settings-form').find('input[name=firstName]').val(firstname)
                $('#user-settings-form').find('input[name=lastName]').val(lastname)
                $('#user-settings-form').find('input[name=country]').val(country)
                $('#user-settings-form').find('input[name=city]').val(city)
                $('#user-settings-form').find('input[name=homePhone]').val(homePhone)
                $('#user-settings-form').find('input[name=workPhone]').val(workPhone)
                $('#user-settings-form').find('input[name=mobilePhone]').val(mobilePhone)
            },
            ajax:{
                updateProfile:(data)=>{
                    return new Promise((resolve,reject)=>{
                        $.ajax({
                            type:'POST',
                            url:updateBasicInfoAPI,
                            dataType:'json',
                            data:data,
                            success:function(res){
                                resolve(res);
                            }
                        })
                    })
                }
            }

        },
        emailSetting:{
            init:()=>{

            }
        },
        socialMediaLinkSetting:{
            init:()=>{
                var sessionData= JSON.parse(sessionStorage.getItem('session'));
                $("input[name=facebookLink]").attr("checked",sessionData.fbId != null ? true : false);
                $("input[name=googleLibk]").attr("checked",sessionData.googleId != null ? true : false);
                $("input[name=msLink]").attr("checked",sessionData.msId != null ? true : false);
            },
            ajax:{
                
            },
            display:{
                facebookLoadPage:()=>{
                    
                    FB.getLoginStatus(function(response) {
                        statusChangeCallback(response);
                    });
                }
            }
        },
        passwordSetting:{
            init:()=>{
                
            }
        },
        //display
        display:{
            /* message */
            swalToast:(icon = "success",message = "successfully")=>{
                $.notify(message, icon);
            },
        },
        setLocalStorage:(storageName,data)=>{
            sessionStorage.setItem(storageName,data);
        },
        getLocalStorage:(storageName)=>{
            sessionStorage.getItem(storageName);
        },
        deleteStorage:()=>{
            sessionStorage.removeItem('session');
        }
    }





    $("#user-settings-form").validate({
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
    		username:{
    			required:true, // add required
            },
            password:{
    			required:true, // add required
            },
            homePhone:{
    			required:true, // add required
            },
            workPhone:{
    			required:true, // add required
            },
            mobilePhone:{
    			required:true, // add required
            },
            country:{
    			required:true, // add required
            },
            city:{
    			required:true, // add required
            },
    	},
        submitHandler:function(form){ // submit function if the all rules is true
            formData = $(form);
            var data = JSON.stringify({
                firstName: formData.find('input[name=firstName]').val(),
                lastName: formData.find('input[name=lastName]').val(),
                homePhone: formData.find('input[name=homePhone]').val(),
                workPhone: formData.find('input[name=workPhone]').val(),
                mobilePhone: formData.find('input[name=mobilePhone]').val(),
                country: formData.find('input[name=country]').val(),
                city: formData.find('input[name=city]').val(),
                accessToken:accessToken,
            })
            settings.profileSetting.ajax.updateProfile(data)
            .then(r=>{
            
                if(r._isError == false){
                    var sessionData= JSON.parse(sessionStorage.getItem('session'));
            
                    if(typeof sessionData != 'undefined' || sessionData != null){
                        console.log(r.data);
                        $.each(r.data,function(key,value){
                            if(sessionData.hasOwnProperty(key)){
                                sessionData[key] = value;
                                console.log(`${key}:${value}`);
                            }else{
                                console.log(`${key} is not a property`);
                            }
                        }) 

                        sessionData['fullname'] = `${r.data.lastName}, ${r.data.firstName}`;
                        $('span.user-fullname').text(`${r.data.lastName}, ${r.data.firstName}`)
                        
                        console.log('newsessionData',sessionData);
                        settings.deleteStorage('session');
                        settings.setLocalStorage('session',JSON.stringify(sessionData));
                        settings.display.swalToast('success',r.reason);
                    }
                    
                }else{
                    settings.display.swalToast('error',r.reason);
                }
            })
    	}
    })

    settings.profileSetting.init();

    // Email Settings
    $("#v-pills-socialmedia-tab").click(function(){
        settings.socialMediaLinkSetting.init();
    })
    $("input[name=facebookLink]").on('change',function(){
       if($(this).val() == "on"){
        settings.socialMediaLinkSetting.display.facebookLoadPage();
       }else{

       }
    });
})