$(()=>{
    var quassAuath ={
        //init
        init:()=>{
            quassAuath.deleteStorage();
        },
        // ajax call
        ajax:{
            /* login ajax */
            login:(data)=>{

                return new Promise((resolve,reject)=>{
                    $.ajax({
                        type:'POST',
                        url:loginApi,
                        data:data,
                        success:function(res){
                            resolve(res);
                        }
                    })
                })
            },
            generateKey:(length) =>{

                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;

                for ( var i = 0; i < length; i++ ) {
                   result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }

                return result;
            }, 
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

    quassAuath.init();

    $("#frm_login").validate({
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
    	},
        submitHandler:function(form){ // submit function if the all rules is true
            formData = $(form);
            var data = JSON.stringify({
                username: formData.find('input[name=username]').val(),
                password: formData.find('input[name=password]').val(),
                server:server,
                key:quassAuath.ajax.generateKey(13)
            })
            quassAuath.ajax.login(data)
            .then(r=>{
                if(r._isError == false){
                    quassAuath.setLocalStorage('session',JSON.stringify(r.personalInfo));
                    window.location.href = 'dashboard';
                }else{
                    quassAuath.display.swalToast('error',r.reason);
                }
            })
    	}
    })

})