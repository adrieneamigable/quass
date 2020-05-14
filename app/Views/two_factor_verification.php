

<body class="bg-gradient-primary">

  <div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-2">Quality Assurance System</h1>
                    <p class="mb-4">
                    Manage people with fine-grained access controls that keep your data secure. Perform data reviews and enhance collaboration with other.
                    </p>
                  </div>
                  <form class="user" id="verify_otp">
                    <div class="form-group">
                        <input type="text" class="form-control form-control-user" id="otp" name="otp" aria-describedby="otpHelp" placeholder="Two Factor authentication code">
                        <small id="otpHelp" class="form-text text-muted">
                            Enter the code from the two-factor app on your mobile device. If you've lost your device
                        </small>
                        <small id="otpHelp" class="form-text text-muted">
                            <a href="#" id="sendOTP"> Send OTP via Email</a>
                        </small>
                        <small id="otpHelp" class="form-text text-muted">
                            <a href="#" id="sendOTPsms"> Send OTP via SMS</a>
                        </small>
                    </div>
                    <button type="submit" class="btn btn-primary btn-user btn-block">
                      Verify Code
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>

 
