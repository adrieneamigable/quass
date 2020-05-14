
/* 
    * File Name     : dashboard.js
    * Path:         : assets/js/dashboard.js
*/
$(()=>{
    dashboard = {
        init:()=>{
            $('span.user-fullname').text(fullName);
            $('div.page-name').text(projectName);

            var isTwoFactorVerified = dashboard.getLocalStorage('isTwoFactorVerified') == null ? true : false;

            var accessToken = dashboard.getLocalStorage('accessToken');

            if(accessToken == null){
                window.location.href = baseUrl;
            }

            if(!isTwoFactorVerified){
                window.location.href = `${baseUrl}/auth/twofactor_verification`;
            }else{
                dashboard.deleteStorage('isTwoFactorVerified');
            }
        },
        ajax:{
            deAuth:()=>{
                $.get(deAuthApi,function(response){
                    if(!response._isError){
                        dashboard.deleteStorage('session');
                        window.location.href = baseUrl;
                     }else{
                         Swal.fire({
                             title: 'Message',
                             text: response.reason,
                             icon: 'warning',
                             showCancelButton: true,
                             confirmButtonColor: '#3085d6',
                             cancelButtonColor: '#d33',
                             confirmButtonText: 'Ok'
                           }).then((result) => {
                             
                           })
                     }
                },'json');
            }
        },
        setLocalStorage:(storageName,data)=>{
            sessionStorage.setItem(storageName,data);
        },
        getLocalStorage:(storageName)=>{
            return sessionStorage.getItem(storageName);
        },
        deleteStorage:(item)=>{
            sessionStorage.removeItem(item);
        }
    }

    dashboard.init();
    $("#logout").on('click',function(){
        dashboard.ajax.deAuth();
    })
})

$(document).ready(function(){
    $(".loading").hide()
})