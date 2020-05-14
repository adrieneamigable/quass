
<!-- Begin Page Content -->
<div class="container-fluid">

<!-- Page Heading -->
<h1 class="h3 mb-4 text-gray-800">Settings</h1>
<div class="row">
    <div class="col-3">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile Settings</a>
        <a class="nav-link" id="v-pills-username-tab" data-toggle="pill" href="#v-pills-username" role="tab" aria-controls="v-pills-username" aria-selected="true">Change Username</a>
        <a class="nav-link" id="v-pills-email-tab" data-toggle="pill" href="#v-pills-email" role="tab" aria-controls="v-pills-email" aria-selected="true">Change Email</a>
        <a class="nav-link" id="v-pills-authentication-tab" data-toggle="pill" href="#v-pills-authentication" role="tab" aria-controls="v-pills-authentication" aria-selected="false">Authentication Setting</a>
        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Change Password</a>
        </div>
    </div>
    <div class="col-9">
        <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <!-- Basic Card Example -->
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">
                            Profile Settings
                        </h6>
                    </div>
                    <div class="card-body">
                        <form class="user" id="user-settings-form">
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <label for="firstName">Firstname</label>
                                    <input type="text" class="form-control form-control-user" id="firstName" name="firstName" placeholder="First Name">
                                </div>
                                <div class="col-sm-6">
                                    <label for="lastName">Lastname</label>
                                    <input type="text" class="form-control form-control-user" id="lastName" name="lastName" placeholder="Last Name">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-4 mb-3 mb-sm-0">
                                    <label for="country">Country</label>
                                    <input type="text" class="form-control form-control-user" id="country" name="country" placeholder="Country">
                                </div>
                                <div class="col-sm-4">
                                    <label for="city">City</label>
                                    <input type="text" class="form-control form-control-user" id="city" name="city" placeholder="City">
                                </div>
                                <div class="col-sm-4">
                                    <label for="homePhone">Home Phone</label>
                                    <input type="text" class="form-control form-control-user" id="homePhone" name="homePhone" placeholder="Home Phone">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <label for="workPhone">Work Phone</label>
                                    <input type="text" class="form-control form-control-user" id="workPhone" name="workPhone" placeholder="Work Phone">
                                </div>
                                <div class="col-sm-6">
                                <label for="mobilePhone">Mobile Phone</label>
                                    <input type="text" class="form-control form-control-user" id="mobilePhone" name="mobilePhone" placeholder="Mobile Phone">
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-user btn-block">
                                Update
                            </button>
                            <hr>
                        </form>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade " id="v-pills-username" role="tabpanel" aria-labelledby="v-pills-email-tab">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Username Settings</h6>
                    </div>
                    <div class="card-body">
                        <form class="user" id="username-settings-form">
                            <div class="form-group">
                                <input type="text" class="form-control form-control-user" id="userName" name="userName" placeholder="New username" autocomplete="off">
                            </div>
                            <button type="submit" class="btn btn-primary btn-user btn-block">
                                Update
                            </button>
                            <hr>
                        </form>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade " id="v-pills-email" role="tabpanel" aria-labelledby="v-pills-email-tab">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Email Settings</h6>
                    </div>
                    <div class="card-body">
                        <form class="user" id="email-settings-form">
                            <div class="form-group">
                                <input type="email" class="form-control form-control-user" id="cur_email" name="cur_email" placeholder="Current Email" autocomplete="off">
                            </div>
                            <div class="form-group ">
                                <input type="email" class="form-control form-control-user" id="email" name="email" placeholder="New Email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control form-control-user" id="password" name="password" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-primary btn-user btn-block">
                                Update
                            </button>
                            <hr>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="tab-pane fade" id="v-pills-authentication" role="tabpanel" aria-labelledby="v-pills-authentication-tab">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Social Media Settings</h6>
                    </div>
                    <div class="card-body">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="facebookLink" name="facebookLink">
                            <label class="custom-control-label" for="facebookLink">Link Facebook Account</label>
                        </div>
                        <div id="gSignInWrapper">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="googleLink" name="googleLink">
                                <label class="custom-control-label" for="googleLink">Link Google Account</label>
                            </div>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="msLink" name="msLink">
                            <label class="custom-control-label" for="msLink">Link MS Account</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="twoFactor" name="twoFactor">
                            <label class="custom-control-label" for="twoFactor">Two Factor Authentication</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Password Settings</h6>
                    </div>
                    <div class="card-body">
                        <form class="user" id="password-settings-form">
                            <div class="form-group">
                                <input type="password" class="form-control form-control-user" id="passwordo" name="passwordo" placeholder="Old password">
                            </div>
                            <div class="form-group ">
                                <input type="password" class="form-control form-control-user" id="passwordn" name="passwordn" placeholder="New Pasword">
                            </div>
                            <button type="submit" class="btn btn-primary btn-user btn-block">
                                Change password
                            </button>
                            <hr>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 2Factor Activate Modal-->
<div class="modal fade" id="2FaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Activate your 2FA</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close" id="2faClose">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body text-center">
            <img src="#" alt="2fa Image" id="2fa-img" style="width:250px;height:250px;">
            <small id="emailHelp" class="form-text text-muted">Scan this QR using Google Authenticator for the OTP</small>
            <form id="2factor_form">
                <div class="form-group">
                    <input type="text" class="form-control form-control-user" id="otp" name="otp" aria-describedby="otpHelp" placeholder="Enter OTP">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" id="btn-done-2fa">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>
</div>

<!-- 2Factor Deactivate Modal-->
<div class="modal fade" id="2FaModalDeativate" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Deactivate your 2FA</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close" id="2faDeactivate">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
            <form id="deactivate2factor_form">
                <div class="form-group">
                    <input type="text" class="form-control form-control-user" id="otp" name="otp" aria-describedby="otpHelp" placeholder="Enter OTP">
                    <small id="otpHelp" class="form-text text-muted">This code is response from the Google Authenticato</small>
                    <small id="otpHelp" class="form-text text-muted"><a href="#" id="sendOtp">Send OTP via email</a></small>
                    <small id="otpHelp" class="form-text text-muted"><a href="#" id="sendOtpsms">Send OTP via SMS</a></small>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" id="btn-done-2fa">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>
</div>

</div>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script type="text/javascript" src="https://alcdn.msftauth.net/lib/1.2.1/js/msal.js" integrity="sha384-9TV1245fz+BaI+VvCjMYL0YDMElLBwNS84v3mY57pXNOt6xcUYch2QLImaTahcOP" crossorigin="anonymous"></script>
<!-- /.container-fluid -->
<!-- <div class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div> -->