

<body>
<!-- <body class="bg-gradient-primary"> -->



<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=297722407886667&autoLogAppEvents=1"></script>
 
  <div class="container-fluid">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <!-- Nested Row within Card Body -->
        <div class="row">
                <div class="col-lg-7 d-none d-lg-block">
                  <div class="circle text-center">
                     <div class="center">
                        <h2>Our Only Best Will Do</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus nulla veniam iste? Dolorum minus quidem voluptas iusto itaque nostrum beatae maxime non esse alias, ut ex cupiditate eum voluptatem facilis!</p>
                     </div>
                  </div>
                </div>
              <div class="col-lg-5">
                <div class="p-5 mt-5">
                  <div class="text-center">
                    <img class="img-fluid mx-auto d-block" src="<?php echo base_url().'/assets/logo/quass_logo.png'?>" alt="QA LOGO" width="100">
                    <span class="h5 text-gray-900 mb-4">Quality</span>
                    <span class="h5 text-gray-900 mb-4 assurance">Assurance</span>
                    <p class="system-msg"></p>
                  </div>
                  <form class="user" id="frm_login">
                    <div class="form-group">
                      <input type="text" value="adriene123" class="form-control form-control-user" id="username" name="username" aria-describedby="emailHelp" placeholder="Enter Email Address...">
                    </div>
                    <div class="form-group">
                      <input type="password" value="Password1" class="form-control form-control-user" id="password" name="password" placeholder="Password">
                    </div>
                    <div class="form-group">
                      <input type="text" value="5d1d8b66ab06cad3d443b4efe9c7b32530059667" class="form-control form-control-user" id="appToken" name="appToken" placeholder="Application Token">
                    </div>
                    <!-- <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div> -->
                    <button type="submit" class="btn btn-login btn-user btn-block">
                      Login
                    </button>
                  </form>
                   <!-- <hr> -->
                  <p class="text-dark text-center mt-5">or connect wih social media</p>
                  <div class="row no-gutters text-center">
                      <div class="col social_media_icon ml-5" id="fb-login" title="Facebook Login">
                          <img src="<?php echo base_url().'/assets/logo/facebook.png'?>" alt="Facebook" width="30">
                      </div>
                      <div class="col social_media_icon" id="google-login" title="Google Login">
                          <img src="<?php echo base_url().'/assets/logo/google.png'?>" alt="Google" width="30">
                      </div>
                      <div class="col social_media_icon mr-5" id="ms-login" title="Microsoft Login">
                          <img src="<?php echo base_url().'/assets/logo/microsoft.png'?>" alt="Microsoft" width="30">
                      </div>
                  </div>
                  <!-- <hr> -->
                  <!-- <div class="text-center">
                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                  </div> -->
                  <div class="text-center text-muted mt-3">
                    <p>Don`t have an account? <a class="m-0 font-weight-bold text-dark" href="<?php echo base_url().'/auth/registration'?>">Sign up</a></p>
                  </div>
                </div>
              </div>
            </div>

      </div>

    </div>

  </div>

