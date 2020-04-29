<script>
    window.fbAsyncInit = function() {
    FB.init({
        appId      : '297722407886667',
        cookie     : true,
        xfbml      : true,
        version    : 'v5.0'
    });
        
    FB.AppEvents.logPageView();   
        
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    
</script>
<!-- Begin Page Content -->
<div class="container-fluid">

<!-- Page Heading -->
<h1 class="h3 mb-4 text-gray-800">Settings</h1>
<div class="row">
    <div class="col-3">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
        <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Email Settings</a>
        <a class="nav-link" id="v-pills-socialmedia-tab" data-toggle="pill" href="#v-pills-socialmedia" role="tab" aria-controls="v-pills-socialmedia" aria-selected="false">Social Media Link</a>
        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Password</a>
        </div>
    </div>
    <div class="col-9">
        <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <!-- Basic Card Example -->
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Profile Settings</h6>
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
            <div class="tab-pane fade " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
            
            <div class="tab-pane fade" id="v-pills-socialmedia" role="tabpanel" aria-labelledby="v-pills-socialmedia-tab">
            <div class="card shadow mb-4">
                    <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Social Media Settings</h6>
                    </div>
                    <div class="card-body">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="facebookLink" name="facebookLink">
                            <label class="custom-control-label" for="facebookLink">Link Facebook Account</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="googleLibk" name="googleLibk">
                            <label class="custom-control-label" for="customSwgoogleLibkitch1">Link Google Account</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="msLink" name="msLink">
                            <label class="custom-control-label" for="msLink">Link MS Account</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
        </div>
    </div>
</div>

</div>
<!-- /.container-fluid -->
