/* 
    * File Name     : twofactor.js
    * Path:         : assets/js/twofactor.js
*/
$(()=>{
    /* 
        * Two factor object
    */
    twoFactor = {
        /* Two factor initialization */
        init:()=>{

            var isTwoFactorVerified = twoFactor.getLocalStorage('isTwoFactorVerified') == null ? true : false;
        
            if(isTwoFactorVerified){
                twoFactor.deleteStorage('isTwoFactorVerified');
                window.location.href = `${baseUrl}/dashboard`;
            }
        },
        /* ajax object */
        ajax:{
            /* This will send OTP via email */
            sendOTPViaEmail:()=>{

                var payload = JSON.stringify({
                    email:email,
                });
                
                $.post(sendOtpViaEmailApi,payload,function(response){
                    if(response._isError == false){
                        twoFactor.display.swalToast('success',`Successfuly send OTP to ${email}`);
                    }else{
                        twoFactor.display.swalToast('error',`Error Sending OTP to ${email} please contact IT for assistance`);
                    }
                },'json');

            },
            /* This will verify the otp token */
            verifyOtp:(payload)=>{

                $.post(verifyOTPApi,payload,function(response){
                    if(response.verified){
                        twoFactor.deleteStorage('isTwoFactorVerified');
                        window.location.href = `${baseUrl}/dashboard`;
                    }else{
                        twoFactor.display.swalToast('error',response.reason);
                    }
                },'json');

            },
            /* Send otp via sms */
            sendOTPViaSMS:()=>{

                var payload = JSON.stringify({
                    email:email,
                });

                $.ajax({
                    type:'post',
                    url:sendOtpViaSmSApi,
                    dataType:'json',
                    data:payload,
                    success:function(res){
                        console.log(res);
                        // if(res._isError == false){
                        //     settings.display.swalToast('success',`Successfuly send OTP to ${email}`);
                        // }else{
                        //     settings.display.swalToast('error',`Error Sending OTP to ${email} please contact IT for assistance`);
                        // }
                    }
                })
            }
        },
        //display
        display:{
            /* message */
            swalToast:(icon = "success",message = "successfully")=>{
                $.notify(message, icon);
            },
        },
        // set local storage
        setLocalStorage:(storageName,data)=>{
            sessionStorage.setItem(storageName,data);
        },
        // get local storage
        getLocalStorage:(storageName)=>{
            return sessionStorage.getItem(storageName);
        },
        // delete local storage
        deleteStorage:(item)=>{
            sessionStorage.removeItem(item);
        }
    }

    /* trigger two factor initialization */
    twoFactor.init();

    //Trigger sending otp via email
    $("#sendOTP").click(function(){
        twoFactor.ajax.sendOTPViaEmail();
    });
    //Trigger sending otp via sms
    $("#sendOTPsms").click(function(){
        twoFactor.ajax.sendOTPViaSMS();
    });
    //Trigger OTP validation
    $("#verify_otp").validate({
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
    		otp:{
    			required:true, // add required
            },
    	},
        submitHandler:function(form){ // submit function if the all rules is true
            formData = $(form);
           
            var data = JSON.stringify({
                accessToken:accessToken,
                otp: formData.find('input[name=otp]').val(),
            })

            twoFactor.ajax.verifyOtp(data);
    	}
    });
})

$(document).ready(function(){
    ajaxAddOn.removeFullPageLoading();
})