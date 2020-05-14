<style>
  .owl-stage-outer{
    overflow:visible !important;
  }
</style>
<!-- Begin Page Content -->
<div class="container-fluid">

  <!-- Page Heading -->
  <h1 class="h3 mb-4 text-gray-800">
    <?php echo $title; ?>
    <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#addCompany">
        <i class="fa fa-plus"></i> Company
    </button>
  </h1>
  <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <a class="nav-item nav-link active" id="nav-company-tab" data-toggle="tab" href="#nav-company" role="tab" aria-controls="nav-company" aria-selected="true">Company</a>
      <a class="nav-item nav-link" id="nav-incoming-tab" data-toggle="tab" href="#nav-incoming" role="tab" aria-controls="nav-incoming" aria-selected="false">Incoming invitation</a>
      <!-- <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a> -->
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-company" role="tabpanel" aria-labelledby="nav-company-tab">
      <div class="own-container">
        <h3 class="m-0 font-weight-bold text-primary">Own</h3>
        <div class="owl-carousel owl-theme col-xs-12" id="own-company-container"></div>
      </div>
      <hr class="sidebar-divider">
      <div class="other-container">
        <h3 class="m-0 font-weight-bold text-primary">Other</h3>
        <div class="owl-carousel owl-theme col-xs-12" id="other-company-container"></div>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-incoming" role="tabpanel" aria-labelledby="nav-incoming-tab">
      <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                    Incoming Company List
                </h6>
            </div>
            <div class="card-body">
              <div class="own-container">
                <h3 class=>Incoming</h3>
                <div class="owl-carousel owl-theme col-xs-12" id="incoming-company-container"></div>
              </div>
            </div>
        </div>
    </div>
    <!-- <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div> -->
  </div>

  
</div>

<!-- Add Company Modal-->
<div class="modal fade" id="addCompany" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Company</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close" id="2faClose">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
            <form class="user" id="create-company-form">
                <div class="form-group">
                  <input type="file" class="form-control form-control-user" id="logo" name="logo">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-user" id="name" name="name" placeholder="Company name">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-user" id="industry" name="industry" placeholder="Industry">
                </div>
                <div class="form-group">
                  <textarea type="text" rows="5" class="form-control" id="description" name="description" placeholder="Description"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-user btn-block">
                  Submit
                </button>
                <hr>
            </form>
        </div>
      </div>
    </div>
</div>
<!-- Update Company Modal-->
<div class="modal fade" id="updateCompany" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update Company</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close" id="2faClose">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
            <form class="user" id="update-company-form">
                <div class="form-group">
                  <input type="file" class="form-control form-control-user" id="logo" name="logo">
                </div>
                <!-- <div class="form-group">
                  <input type="text" class="form-control form-control-user" id="name" name="name" placeholder="Company name">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-user" id="industry" name="industry" placeholder="Industry">
                </div>
                <div class="form-group">
                  <textarea type="text" rows="5" class="form-control" id="description" name="description" placeholder="Description"></textarea>
                </div> -->
                <button type="submit" class="btn btn-primary btn-user btn-block">
                  Submit
                </button>
                <hr>
            </form>
        </div>
      </div>
    </div>
</div>
<!-- Invite user to Company Modal-->
<div class="modal fade" id="inviteCompany" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Company Invitation</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close" id="2faClose">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
            <form class="user" id="invite-company-form">
                <div class="form-group">
                  <input type="email" class="form-control form-control-user" id="email" name="email" placeholder="Email">
                </div>
                <button type="submit" class="btn btn-primary btn-user btn-block">
                  Submit
                </button>
                <hr>
            </form>
        </div>
      </div>
    </div>
</div>