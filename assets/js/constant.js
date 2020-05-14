/* 
    * File Name     : twofactor.js
    * Path:         : assets/js/twofactor.js
    * constant variables
*/
var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
//session data 
var sessionData= JSON.parse(atob(sessionStorage.getItem('session')));


// project name
var projectName     = 'Quass';
//set access token if session is assign
var accessToken     = (typeof sessionData != null && sessionData.hasOwnProperty('accessToken')) ? sessionData.accessToken : '' ;
// set name if session is assign
var fullName        = (typeof sessionData != null && sessionData.hasOwnProperty('fullname')) ? sessionData.fullname : '' ;
// set email if session is assign
var email           = (typeof sessionData != null && sessionData.hasOwnProperty('email')) ? sessionData.email : '' ;
// set accountType if session is assign
var accountType     = (typeof sessionData != null && sessionData.hasOwnProperty('accountType')) ? sessionData.accountType : '' ;
// set country if session is assign
var country         = (typeof sessionData != null && sessionData.hasOwnProperty('country')) ? sessionData.country : '' ;
// set city if session is assign
var city            = (typeof sessionData != null && sessionData.hasOwnProperty('city')) ? sessionData.city : '' ;
// set homePhone if session is assign
var homePhone       = (typeof sessionData != null && sessionData.hasOwnProperty('homePhone')) ? sessionData.homePhone : '' ;
// set workPhone if session is assign
var workPhone       = (typeof sessionData != null && sessionData.hasOwnProperty('workPhone')) ? sessionData.workPhone : '' ;
// set mobilePhone if session is assign
var mobilePhone     = (typeof sessionData != null && sessionData.hasOwnProperty('mobilePhone')) ? sessionData.mobilePhone : '' ;
// set fbId if session is assign
var fbId            = (typeof sessionData != null && sessionData.hasOwnProperty('fbId')) ? sessionData.fbId : '' ;
// set city if googleId is assign
var googleId        = (typeof sessionData != null && sessionData.hasOwnProperty('googleId')) ? sessionData.googleId : '' ;
// set msId if googleId is assign
var msId            = (typeof sessionData != 'undefined' && sessionData.hasOwnProperty('msId')) ? sessionData.msId : '' ;
// set msId if firstName is assign
var firstname       = (typeof sessionData != 'undefined' && sessionData.hasOwnProperty('firstName')) ? sessionData.firstName : '' ;
// set lastname if googleId is assign
var lastname        = (typeof sessionData != 'undefined' && sessionData.hasOwnProperty('lastName')) ? sessionData.lastName : '' ;
//set 2FAstatus
var twoFactorStatus = (typeof sessionData != 'undefined' && sessionData.hasOwnProperty('2FAstatus')) ? sessionData['2FAstatus'] : '' ;
