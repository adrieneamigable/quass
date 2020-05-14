/* 
    * File Name     : active.js
    * Path:         : assets/js/active.js
*/
$(()=>{
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    verify = {
        /* init activateion */
        init:()=>{
            //get key
            var key = verify.display.getUrlVars()['k'];
            //check if key exist
            if(typeof key != "undefined"){  
                //call account verification
                verify.ajax.accountActivate();
            }else{
                //redirect to login
                window.location.href = baseUrl;
            }
           
        },
        ajax:{
            /* account activateion call */
            accountActivate:()=>{
                var key = verify.display.getUrlVars()['k'];
                // var payload = JSON.stringify({
                //     activationKey:key
                // })
                var uri = `${accountActivateApi}/${key}`;
                $.ajax({
                    type:'get',
                    url:uri,
                    datType:'json',
                    beforeSend:function(){
                        ajaxAddOn.addFullPageLoading();
                    },
                    success:function(response){
                        if(!response._isError){
                            $("#msg")
                            .addClass('text-success')
                            .after(
                                $("<a>")
                                .text("Continue to Login")
                                .attr("href",baseUrl),
                            )
                            .text(response.reason);
                        }else{
                            $("#msg")
                            .addClass('text-danger')
                            .after(
                                $("<a>")
                                .text("Continue to Login")
                                .attr("href",baseUrl),
                            )
                            .text(response.reason);
                        }
                        ajaxAddOn.removeFullPageLoading();
                    }
                })
            }
        },
        display:{
            getUrlParameter:()=>{
                var sPageURL = window.location.search.substring(1),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                    }
                }
            },
            getUrlVars:()=>{
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++)
                {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
                }
                return vars;
            },
            /* message */
            swalToast:(icon = "success",message = "successfully")=>{
                $.notify(message, icon);
            },
        }
    }
    /* Call verify account initalization function */
    verify.init();
})