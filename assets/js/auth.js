/* 
    * File Name     : ath.js
    * Path:         : assets/js/auth.js
*/
$(()=>{
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var accessToken = sessionStorage.getItem('accessToken');
    var quassAuath ={
        //init
        init:()=>{

            if(accessToken != null){
                quassAuath.ajax.checkToken();
            }else{
                ajaxAddOn.removeFullPageLoading();
            }

            (function() {
                var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
            })();

            
        },
        // ajax call
        ajax:{
            /* User Registration */
            userRegistration:(payload)=>{
                return new Promise((resolve,reject)=>{
                    $.ajax({
                        type:'post',
                        url:userRegApi,
                        dataType:'json',
                        data:payload,
                        beforeSend:function(){
                            ajaxAddOn.addLoading('reg-form');
                        },
                        success:function(response){
                            if(!response._isError){
                                $("#reg-form")[0].reset();
                            }
                            ajaxAddOn.systemMessage(response._isError,response.reason);
                            ajaxAddOn.removeLoading('reg-form');
                        }
                    })
                })
            },
            /* login ajax */
            login:(payload)=>{

                return new Promise((resolve,reject)=>{
                    $.ajax({
                        type:'post',
                        url:loginApi,
                        dataType:'json',
                        data:payload,
                        beforeSend:function(){
                            ajaxAddOn.addLoading('frm_login');
                        },
                        success:function(response){
                            if(!response._isError){
                                sessionStorage.setItem('accessToken',response.token);
                                quassAuath.ajax.checkToken();
                            }else{
                                ajaxAddOn.systemMessage(response._isError,response.reason);
                            }
                        }
                    })
                })
            },
            socialMediaLogin:(payload)=>{
                $.ajax({
                    type:'post',
                    url:sauthApi,
                    dataType:'json',
                    data:payload,
                    beforeSend:function(){
                        ajaxAddOn.addFullPageLoading();
                    },
                    success:function(response){
                        if(response.hasOwnProperty("_isError") && response._isError){
                            ajaxAddOn.swalMessage(response._isError,response.reason)
                        }else{
                            quassAuath.setLocalStorage('session',JSON.stringify(response.personalInfo));
                            window.location.href = 'dashboard';
                        }
                        ajaxAddOn.removeFullPageLoading();
                        
                    }
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
            checkToken:()=>{
                let accessToken = sessionStorage.getItem('accessToken');
                $.ajax({
                    type:'GET',
                    url:`${checkTokenApi}/${accessToken}`,
                    dataType:'json',
                    beforeSend:function(){
                        ajaxAddOn.addFullPageLoading();
                    },
                    success:function(response){
                        if(response.valid){
                            sessionStorage.setItem('data',JSON.stringify(response.data));
                            window.location.href = `${baseUrl}/dashboard`;
                        }
                        ajaxAddOn.removeLoading('frm_login');
                    } 
                })
            },
        },
        //display
        display:{
            /* message */
            swalToast:(icon = "success",message = "successfully")=>{
                $.notify(message, icon);
            },
            facebookLoadPage:()=>{
                    
                FB.getLoginStatus(function(response) {
                    console.log(response)
                    if(response.status == "connected"){

                        var payload = {
                            entity:'fb',
                            payload:response,
                        }

                        quassAuath.ajax.socialMediaLogin(JSON.stringify(payload));

                    }else{
                         FB.login(function(response){
                            
                            if(response.status == "connected"){

                                var payload = {
                                    entity:'fb',
                                    payload:response,
                                }
                                
                                quassAuath.ajax.socialMediaLogin(JSON.stringify(payload));
                                console.log('response',response);

                            }else{
                                console.log('response',response);
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
                //     // 'callback' : settings.socialMediaLinkSetting.display.googleOnSuccess, //callback function
                //     'approvalprompt':'force',
                //     'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
                // };

                // gapi.auth.signIn(myParams);

                auth2 = gapi.auth2.init({
                    client_id: '237700823653-p2mvapsa7lt19atlb6qr62olvsat2eul.apps.googleusercontent.com',
                    scope: 'profile',
                });
              
              
                // Sign in the user if they are currently signed in.
                
                // Sign in the user if they are currently signed in.
                if (auth2.isSignedIn.get() == false) {
                    auth2.signIn()
                    .then(function(response){
                        //If Google OAuth 2 works fine
                        if (auth2) {
                            googleUser = auth2.currentUser.get();
                            authResponse = googleUser.getAuthResponse();
                            googleId = googleUser.getId();

                            var payload = {
                                entity:'google',
                                payload:authResponse,
                            }


                            quassAuath.ajax.socialMediaLogin(JSON.stringify(payload));

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

                    var payload = {
                        entity:'google',
                        payload:authResponse,
                    }

                    quassAuath.ajax.socialMediaLogin(JSON.stringify(payload));
                    
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
                                        entity:'ms',
                                        'access_token':loginResponse.accessToken
                                    }
                                    
                                    quassAuath.ajax.socialMediaLogin(JSON.stringify(payload));
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
            
        },
        setLocalStorage:(storageName,data)=>{

            sessionStorage.setItem(storageName,btoa(data));

            if(storageName == "session"){
                var twoFaData = JSON.parse(data);
                if(twoFaData['2FAstatus'] == 1){
                    sessionStorage.setItem('isTwoFactorVerified',false);
                    window.location.href = `${baseUrl}/auth/twofactor_verification`;
                }else{
                    window.location.href = `${baseUrl}/dashboard`;
                }
            }
           
        },
        getLocalStorage:(storageName)=>{
            sessionStorage.getItem(storageName);
        },
        deleteStorage:()=>{
            sessionStorage.removeItem('session');
            sessionStorage.removeItem('isTwoFactorVerified');
        }
    }

    quassAuath.init();

    //Login Form
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
            appToken:{
    			required:true, // add required
            },
    	},
        submitHandler:function(form){ // submit function if the all rules is true
            formData = $(form);
            var data = JSON.stringify({
                username: formData.find('input[name=username]').val(),
                password: formData.find('input[name=password]').val(),
                appToken: formData.find('input[name=appToken]').val(),
                // key:quassAuath.ajax.generateKey(13),
                // server:server
            })
            quassAuath.ajax.login(data)
    	}
    })
    //Registration Form
    $("#reg-form").validate({
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
    		lastName:{
    			required:true, // add required
            },
    		firstName:{
    			required:true, // add required
            },
    		userName:{
    			required:true, // add required
            },
    		email:{
    			required:true, // add required
            },
            password:{
                required:true, // add required
            },
            repassword:{
                required:true, // add required
                equalTo: "#password"

            },
            appToken:{
                required:true
            }
    	},
        submitHandler:function(form){ // submit function if the all rules is true
            formData = $(form);
            var data = JSON.stringify({
                lastName: formData.find('input[name=lastName]').val(),
                firstName: formData.find('input[name=firstName]').val(),
                userName: formData.find('input[name=userName]').val(),
                email: formData.find('input[name=email]').val(),
                password: formData.find('input[name=password]').val(),
                appToken: formData.find('input[name=appToken]').val(),
                activationPath:`${baseUrl}/activate?k=`,
            })
            quassAuath.ajax.userRegistration(data)
    	}
    })
    /* Trigger login for facebok */
    $('#fb-login').click(function(){
        quassAuath.display.facebookLoadPage();
    })
     /* Trigger login for google */
    $('#google-login').click(function(){
        quassAuath.display.googleLoadPage();
    })
     /* Trigger login for microsoft */
    $('#ms-login').click(function(){
        quassAuath.display.msLoadPage();
    })

})

