    <!-- Bootstrap core JavaScript-->
    <script src="<?php echo base_url().'/vendor/jquery/jquery.min.js' ?>"></script>
    <script src="<?php echo base_url().'/vendor/bootstrap/js/bootstrap.bundle.min.js' ?>"></script>

    <!-- Core plugin JavaScript-->
    <script src="<?php echo base_url().'/vendor/jquery-easing/jquery.easing.min.js' ?>"></script>


    <!-- Custom scripts for login -->
    <script src="<?php echo base_url().'/assets/js/api-constant.js'?>"></script>

    <!-- cdn js -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.1/dist/jquery.validate.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="<?php echo base_url().'/assets/js/sb-admin-2.min.js' ?>"></script>
  <script src="<?php echo base_url().'/assets/js/ajax-addon.js' ?>"></script>
  <script src="https://apis.google.com/js/platform.js" async defer></script>
  <script type="text/javascript" src="https://alcdn.msftauth.net/lib/1.2.1/js/msal.js" integrity="sha384-9TV1245fz+BaI+VvCjMYL0YDMElLBwNS84v3mY57pXNOt6xcUYch2QLImaTahcOP" crossorigin="anonymous"></script>
  <?php   
        if(!empty($extra_scripts)){
            foreach ($extra_scripts as $key => $value) {
                echo "<script type='text/javascript' src='".$value."'></script>";
            }
        }
    ?>
</body>

</html>