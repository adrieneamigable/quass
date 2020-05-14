/* 
    * File Name     : settings.js
    * Path:         : assets/js/settings.js
*/
$(()=>{
    /* Global variables */
    var auth2; // The Sign-In object.
    var googleUser; // The current user.
    var twoFactorData = {}; // The two factr dat aresponse by the api

    settings = {
        /* 
        * Object for profile
        * this object contain the updateProfile service
        */
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
                updateProfile:(payload)=>{
                    return new Promise((resolve,reject)=>{
                        $.ajax({
                            type:'post',
                            url:updateBasicInfoAPI,
                            dataType:'json',
                            data:payload,
                            beforeSend:function(){
                                ajaxAddOn.addLoading('user-settings-form');
                            },
                            success:function(response){
                                if(!response._isError){
                                    if(sessionData != null){
                                        console.log(response.data);
                                        $.each(response.data,function(key,value){
                                            if(sessionData.hasOwnProperty(key)){
                                                sessionData[key] = value;
                                                console.log(`${key}:${value}`);
                                            }else{
                                                console.log(`${key} is not a property`);
                                            }
                                        }) 
                
                                        fullName = `${response.data.lastName}, ${response.data.firstName}`;
                                        $('span.user-fullname').text(fullName)
                                        
                                        console.log('newsessionData',sessionData);
                                        settings.deleteStorage('session');
                                        settings.setLocalStorage('session',btoa(JSON.stringify(sessionData)));
                                    }
                                }

                                ajaxAddOn.swalMessage(response._isError,response.reason);
                                ajaxAddOn.removeLoading('user-settings-form');
                            }
                        })
                    })
                }
            }

        },
        /* 
        * Object for email
        * this object contain the changeEmail service
        */
        emailSetting:{
            init:()=>{

            },
            ajax:{
                changeEmail:(payload)=>{
                    $.ajax({
                        type:'post',
                        url:changEmailApi,
                        dataType:'json',
                        data:payload,
                        beforeSend:function(){
                            ajaxAddOn.addLoading('email-settings-form');
                        },
                        success:function(response){
                            if(!response._isError){
                                if(sessionData != null){
                                    if(sessionData.hasOwnProperty('email')){
                                        sessionData['email'] = response.email;
                                    }else{
                                        console.log(`email is not a property`);
                                    }
                                    console.log('newsessionData',sessionData);
                                    settings.deleteStorage('session');
                                    settings.setLocalStorage('session',btoa(JSON.stringify(sessionData)));
                                } 
                                $("#email-settings-form")[0].reset();
                            }

                            ajaxAddOn.swalMessage(response._isError,response.reason);
                            ajaxAddOn.removeLoading('email-settings-form');
                           
                        }
                    })
                },
            }
        },
        /* 
        * Object for socialMedia
        * this object contain the changeEmail service
        */
        authenticationSettings:{
            init:()=>{
                
                $("input[name=facebookLink]").prop("checked",sessionData.fbId != null ? 'checked' : '');
                $("input[name=googleLink]").prop("checked",sessionData.googleId != null ? 'checked' : '');
                $("input[name=msLink]").prop("checked",sessionData.msId != null ? 'checked' : '');
                $("input[name=twoFactor]").prop("checked",sessionData['2FAstatus'] != 0 ? 'checked' : '');
               
                (function() {
                    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                    po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                })();

            },
            ajax:{
                socialSingleSignOn:(payload,socialDBField,socialDBId)=>{
                    return new Promise((resolve,reject)=>{
                        var uri  = `${singleSignOnApi}?accessToken=${sessionData.accessToken}`;
                        $.ajax({
                            type:'post',
                            url:uri,
                            dataType:'json',
                            data:payload,
                            beforeSend:function(){
                                ajaxAddOn.addFullPageLoading()
                            },
                            success:function(response){
                                if(response._isError == false){

                                    if(typeof sessionData != 'undefined' || sessionData != null){
                                        if(sessionData.hasOwnProperty(socialDBField)){
                                            sessionData[socialDBField] = socialDBId;
                                        }else{
                                            console.log(`${socialDBField} is not a property`);
                                        }
                                        console.log('newsessionData',sessionData);
                                        settings.deleteStorage('session');
                                        settings.setLocalStorage('session',btoa(JSON.stringify(sessionData)));
                                    }

                                    ajaxAddOn.swalMessage(response._isError,response.reason)
                                    ajaxAddOn.removeFullPageLoading();
    
                                }
                            }
                        })
                    })
                },
                deleteSocialSingleSignOn:(payload,socialDBId)=>{

                    $.ajax({
                        type:'post',
                        url:deregisterSSOApi,
                        dataType:'json',
                        data:payload,
                        beforeSend:function(){
                            ajaxAddOn.addFullPageLoading()
                        },
                        success:function(response){
                            if(response._isError == false){
                                if(typeof sessionData != 'undefined' || sessionData != null){
            
                                    if(sessionData.hasOwnProperty(socialDBId)){
                                        sessionData[socialDBId] = null;
                                    }else{
                                        console.log(`${socialDBId} is not a property`);
                                    }
                                    
            
                                    settings.deleteStorage('session');
                                    settings.setLocalStorage('session',btoa(JSON.stringify(sessionData)));
                                    
                                }
                            }
                            ajaxAddOn.swalMessage(response._isError,response.reason)
                            ajaxAddOn.removeFullPageLoading();
                        }
                    })
                },
                get2FactorQR:()=>{
                    return new Promise((resolve,reject)=>{
                        var uri = `${get2FactorQRCodeApi}?accessToken=${accessToken}`;
                        $.ajax({
                            type:'get',
                            url:uri,
                            dataType:'json',
                            beforeSend:function(){
                                ajaxAddOn.addFullPageLoading()
                            },
                            success:function(response){
                                if(response.hasOwnProperty('_isError') && response._isError == true){
                                    ajaxAddOn.swalMessage(response._isError,response.reason)
                                }else{
                                    console.log(response)
                                    twoFactorData = response;
                                    $("#2FaModal").modal({
                                        backdrop: 'static',
                                        keyboard: false
                                    });
                                    $("#2fa-img").prop('src',response.base64Img);
                                }
                                ajaxAddOn.removeFullPageLoading();
                            }
                        })
                    });
                },
                actvateTwoFactor:(payload)=>{
                    $.ajax({
                        type:'post',
                        url:activate2FactorApi,
                        dataType:'json',
                        data:payload,
                        beforeSend:function(){
                            ajaxAddOn.addFullPageLoading()
                        },
                        success:function(response){
                            if(response._isError == false){

                                if(sessionData.hasOwnProperty('2FAstatus')){
                                    sessionData['2FAstatus'] = 1;
                                }else{
                                    console.log(`2FAstatus is not a property`);
                                }
                                
        
                                settings.deleteStorage('session');
                                settings.setLocalStorage('session',btoa(JSON.stringify(sessionData)));
    
                                $("#2FaModal").modal('hide');
                            }
                            ajaxAddOn.swalMessage(response._isError,response.reason)
                            ajaxAddOn.removeFullPageLoading();
                        },
                    })
                },
                deactivateTwoFActor:(payload)=>{
                    $.ajax({
                        type:'post',
                        url:deactivate2FactorApi,
                        dataType:'json',
                        data:payload,
                        beforeSend:function(){
                            ajaxAddOn.addFullPageLoading()
                        },
                        success:function(response){
                            if(response._isError == false){
                                   
                                if(sessionData.hasOwnProperty('2FAstatus')){
                                    sessionData['2FAstatus'] = 0;
                                }else{
                                    console.log(`2FAstatus is not a property`);
                                }
                                settings.deleteStorage('session');
                                settings.setLocalStorage('session',btoa(JSON.stringify(sessionData)));
                                $("#2FaModalDeativate").modal('hide');
                            } 
                            ajaxAddOn.swalMessage(response._isError,response.reason)
                            ajaxAddOn.removeFullPageLoading();
                        }
                    })
                },
                sendOTPViaEmail:()=>{

                    var payload = JSON.stringify({
                        email:email,
                    });

                    $.ajax({
                        type:'post',
                        url:sendOtpViaEmailApi,
                        dataType:'json',
                        data:payload,
                        beforeSend:function(){
                            ajaxAddOn.addFullPageLoading()
                        },
                        success:function(response){
                            if(!response._isError){
                                ajaxAddOn.swalMessage(response._isError,`Successfuly send OTP to ${response.email}`)
                            }else{
                                ajaxAddOn.swalMessage(response._isError,response.reason)
                            }
                            
                            ajaxAddOn.removeFullPageLoading()
                        },
                    })
                },
                sendOTPViaSMS:()=>{

                    var payload = JSON.stringify({
                        email:email,
                    });

                    $.ajax({
                        type:'post',
                        url:sendOtpViaSmSApi,
                        dataType:'json',
                        data:payload,
                        beforeSend:function(){
                            ajaxAddOn.addFullPageLoading()
                        },
                        success:function(response){
                            ajaxAddOn.swalMessage(response._isError,response.reason)
                            ajaxAddOn.removeFullPageLoading()
                        },
                    })
                }
            },
            display:{
                facebookLoadPage:()=>{
                    
                    FB.getLoginStatus(function(response) {
                        if(response.status == "connected"){
                            var payload = JSON.stringify({
                                entity:'fb',
                                payload:response,
                            })
                            settings.authenticationSettings.ajax.socialSingleSignOn(payload,'fbId',response.authResponse.userID)
                        }else{
                             FB.login(function(response){
                                var payload = JSON.stringify({
                                    entity:'fb',
                                    payload:response,
                                })
                                if(response.status == "connected"){
                                    settings.authenticationSettings.ajax.socialSingleSignOn(payload,'fbId',response.authResponse.userID)
                                }else{
                                    console.log('response',response);
                                     $("input[name=facebookLink]").prop("checked",'');
                                }
                            });
                        }
                    });

                },
                googleLoadPage:()=>{

                    // var myParams = {
                    //     'clientid' : '237700823653-p2mvapsa7lt19atlb6qr62olvsat2eul.apps.googleusercontent.com', //You need to set client id
                    //     'secret': '4jSY1Bn_CZZOz9oL6TJsv8Co',
                    //     'cookiepolicy' : 'single_host_origin',
                    //     // 'callback' : settings.authenticationSettings.display.googleOnSuccess, //callback function
                    //     'approvalprompt':'force',
                    //     'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
                    // };

                    // gapi.auth.signIn(myParams);

                    auth2 = gapi.auth2.init({
                        client_id: '237700823653-p2mvapsa7lt19atlb6qr62olvsat2eul.apps.googleusercontent.com',
                        scope: 'profile',
                    });
                  
                  
                    // Sign in the user if they are currently signed in.
                    if (auth2.isSignedIn.get() == false) {
                        auth2.signIn()
                        .then(function(response){
                            //If Google OAuth 2 works fine
                            if (auth2) {
                                googleUser = auth2.currentUser.get();
                                authResponse = googleUser.getAuthResponse();
                                console.log("authResponse",authResponse)
                                googleId = googleUser.getId();

                                var payload = JSON.stringify({
                                    entity:'google',
                                    payload:authResponse,
                                })
                                settings.authenticationSettings.ajax.socialSingleSignOn(payload,'googleId',googleId)
                                
                            }
                        }, function(error){
                            //If Google OAuth 2 occured error
                            console.log(error);
                            if(error.error === 'popup_closed_by_user'){
                                $("input[name=googleLink]").prop("checked",'');
                            }
                        });


                        
                    }else{
                        console.log('alrady sigin response',  googleUser.getAuthResponse());
                        authResponse = googleUser.getAuthResponse();

                        var payload = JSON.stringify({
                            entity:'google',
                            payload:authResponse,
                        })
                        settings.authenticationSettings.ajax.socialSingleSignOn(payload,'googleId',googleId)
                    }

                  

                },
                msLoadPage:()=>{
                    
                    const msalConfig = {
                        auth: {
                          clientId: "025ef88a-34a8-4c44-a397-bca76c6f67ed", // this is a fake id
                          authority: "https://login.microsoftonline.com/common",
                          redirectUri: "http://localhost/quass",
                        },
                        cache: {
                          cacheLocation: "sessionStorage", // This configures where your cache will be stored
                          storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
                        }
                    };  
                    
                    const myMSALObj = new Msal.UserAgentApplication(msalConfig);

          

                    const loginRequest = {
                        scopes: ["openid", "profile","email", "User.Read"],
                    };

                    myMSALObj.loginPopup(loginRequest)
                        .then((loginResponse) => {
                        if(loginRequest){
                            myMSALObj.acquireTokenSilent(loginRequest)
                                .then((loginResponse) => {
                                    console.log(loginResponse);
                                    var payload= {
                                        'access_token':loginResponse.accessToken
                                    }

                                    var payload = JSON.stringify({
                                        entity:'ms',
                                        payload:payload,
                                    })
                                    settings.authenticationSettings.ajax.socialSingleSignOn(payload,'msId',googleId)

                                //Login Success callback code here
                            }).catch(function (error) {
                                console.log(error);
                            });
                        }
                    }).catch(function (error) {
                        $("input[name=msLink]").prop("checked",'');
                    });

                    // myMSALObj.acquireTokenPopup(loginRequest)
                    //     .then((loginResponse) => {
                    //         console.log(loginResponse.accessToken);
                    //     //Login Success callback code here
                    // }).catch(function (error) {
                    //     console.log(error);
                    // });
                    
                    
                },
            }
        },
        /* 
        * Object for socialMedia
        * this object contain the password chabnge service
        */
        passwordSetting:{
            init:()=>{
                
            },
            ajax:{
                changePassword:(payload)=>{
                    $.ajax({
                        type:'post',
                        url:changePasswordApi,
                        dataType:'json',
                        data:payload,
                        beforeSend:function(){
                            ajaxAddOn.addLoading('password-settings-form');
                        },
                        success:function(response){
                            if(!response._isError){
                                $("#password-settings-form")[0].reset();
                            }
                            ajaxAddOn.swalMessage(response._isError,response.reason);
                            ajaxAddOn.removeLoading('password-settings-form');
                           
                        }
                    })
                }
            }
        },
        usernameSetting:{
            init:()=>{
                
            },
            ajax:{
                changeUsername:(payload)=>{
                    $.ajax({
                        type:'post',
                        url:changeUserNameApi,
                        dataType:'json',
                        data:payload,
                        beforeSend:function(){
                            ajaxAddOn.addLoading('username-settings-form');
                        },
                        success:function(response){
                            if(!response._isError){
                                if(sessionData != null){
                                    if(sessionData.hasOwnProperty('userName')){
                                        sessionData['userName'] = response.email;
                                    }else{
                                        console.log(`userName is not a property`);
                                    }
                                    console.log('newsessionData',sessionData);
                                    settings.deleteStorage('session');
                                    settings.setLocalStorage('session',btoa(JSON.stringify(sessionData)));
                                }

                                $("#username-settings-form")[0].reset();
                                
                            }

                            ajaxAddOn.swalMessage(response._isError,response.reason);
                            ajaxAddOn.removeLoading('username-settings-form');
                        }
                    })
                }
            }
        },
        /* 
        * Object for display
        */
        display:{
            /* message */
            swalToast:(icon = "success",message = "successfully")=>{
                $.notify(message, icon);
            },
        },
        // this will change the local storage
        setLocalStorage:(storageName,data)=>{
            sessionStorage.setItem(storageName,data);
        },
        // this will return the storage item
        getLocalStorage:(storageName)=>{
            return sessionStorage.getItem(storageName);
        },
        // this will delete the storage
        deleteStorage:()=>{
            sessionStorage.removeItem('session');
        }
    }


    //initialize the profile settings by default
    settings.profileSetting.init();

    /* validate user settings form */
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
    	}
    })

   

    /* Trigger the authentication settings tab */
    $("#v-pills-authentication-tab").click(function(){
        settings.authenticationSettings.init();
    })
    /* Trigger the switch for facebook linking */
    $("input[name=facebookLink]").on('change',function(){
        /* Check if the switch is true or false */
        if ($(this).is(':checked')) {
            /* Call the facebook page login if not login */
            settings.authenticationSettings.display.facebookLoadPage()
            
        }else{
            /* payload */
            var payload = JSON.stringify({
                entity:'fb',
                accessToken:sessionData.accessToken,
            })
             /* Remove the facebook ajax call */
            settings.authenticationSettings.ajax.deleteSocialSingleSignOn(payload,'fbId')
        }
    });
    /* Trigger the switch for google linking */
    $("input[name=googleLink]").on('change',function(){
        /* Check if the switch is true or false */
        if ($(this).is(':checked')) {
            /* Call the google page login if not login */
            settings.authenticationSettings.display.googleLoadPage()
        }else{
            /* payload */
            var payload = JSON.stringify({
                entity:'google',
                accessToken:sessionData.accessToken,
            })
            /* Remove the google ajax call */
            settings.authenticationSettings.ajax.deleteSocialSingleSignOn(payload,'googleId')
        }
    })
    /* Trigger the switch for microsoft linking */
    $("input[name=msLink]").on('change',function(){
        /* Check if the switch is true or false */
        if ($(this).is(':checked')) {
            /* Call the microsoft page login if not login */
            settings.authenticationSettings.display.msLoadPage()
        }else{
             /* payload */
            var payload = JSON.stringify({
                entity:'ms',
                accessToken:sessionData.accessToken,
            })
            /* Remove the microsoft ajax call */
            settings.authenticationSettings.ajax.deleteSocialSingleSignOn(payload,'msId')
        }
    })
    /* Trigger the switch for two factor linking */
    $("input[name=twoFactor]").on('change',function(){
        /* Check if the switch is true or false */
        if ($(this).is(':checked')) {
            /* call the get two factor qr code */
            settings.authenticationSettings.ajax.get2FactorQR();
        }else{
            /* 
                * Show the modal for the two factor deactivteion
                * this will be call the modal with no backdrop click 
            */
            $("#2FaModalDeativate").modal({
                backdrop: 'static',
                keyboard: false
            });
        }
    })

    /* Call the two factor form validation */
    $("#2factor_form").validate({
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
            // payload
            var data = JSON.stringify({
                accessToken:sessionData.accessToken,
                otp: formData.find('input[name=otp]').val(),
                key:twoFactorData.key
            })
            // call the activate two factor service
            settings.authenticationSettings.ajax.actvateTwoFactor(data);
    	}
    })
    /* Call the two factor form deactivation validation */
    $("#deactivate2factor_form").validate({
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
            //  payload
            var data = JSON.stringify({
                accessToken:sessionData.accessToken,
                otp: formData.find('input[name=otp]').val(),
            })
            // call the deactivation for two factor service
            settings.authenticationSettings.ajax.deactivateTwoFActor(data);
    	}
    })
    /* Call the email form update validation */
    $("#email-settings-form").validate({
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
    		cur_email:{
    			required:true, // add required
            },
    		email:{
    			required:true, // add required
            },
    		password:{
    			required:true, // add required
            },
    	},
        submitHandler:function(form){ // submit function if the all rules is true
            formData = $(form);
            // payload
            var payload = JSON.stringify({
                accessToken:sessionData.accessToken,
                prevemail: formData.find('input[name=cur_email]').val(),
                email: formData.find('input[name=email]').val(),
                password: formData.find('input[name=password]').val(),
            })
            // call the email update service
            settings.emailSetting.ajax.changeEmail(payload);
    	}
    })
    /* Call the password form update validation */
    $("#password-settings-form").validate({
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
    		passwordo:{
    			required:true, // add required
            },
    		passwordn:{
    			required:true, // add required
            },
    	},
        submitHandler:function(form){ // submit function if the all rules is true
            formData = $(form);
            //payload
            var payload = JSON.stringify({
                accessToken:sessionData.accessToken,
                passwordo: formData.find('input[name=passwordo]').val(),
                passwordn: formData.find('input[name=passwordn]').val(),
            })
            //call the change password service
            settings.passwordSetting.ajax.changePassword(payload);
    	}
    })
    /* Call the username form update validation */
    $("#username-settings-form").validate({
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
    		userName:{
    			required:true, // add required
            },
    	},
        submitHandler:function(form){ // submit function if the all rules is true
            formData = $(form);
            //payload
            var payload = JSON.stringify({
                accessToken:sessionData.accessToken,
                userName: formData.find('input[name=userName]').val(),
            })
            //CAll the change username service
            settings.usernameSetting.ajax.changeUsername(payload);
    	}
    })
    /*
        * Trigger two modal factor close
        * this will update the switch when the modal close box is click 
    */
    $("#2faClose").click(function(){
        //update switch to false
        $("input[name=twoFactor]").prop("checked",'');
    })
    /*
        * Trigger two modal factor deactivate close
        * this will update the switch when the modal close box is click 
    */
    $("#2faDeactivate").click(function(){
            //update the switch to true
        $("input[name=twoFactor]").prop("checked",true);
    })
    // Trigger send otp via email
    $("#sendOtp").click(function(){
        // Call the send otp via email service
        settings.authenticationSettings.ajax.sendOTPViaEmail();
    })
     // Trigger send otp via sms
    $("#sendOtpsms").click(function(){
        // Call the send otp via sms service
        settings.authenticationSettings.ajax.sendOTPViaSMS();
    })

})