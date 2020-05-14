 
    
        </div>
        <!-- End of Main Content -->
        <!-- Footer -->
        <footer class="sticky-footer bg-white">
        <div class="container my-auto">
            <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2019</span>
            </div>
        </div>
    </footer>
    <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
 </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
  <!-- constant js -->
  <script src="<?php echo base_url().'/assets/js/constant.js'?>"></script>
  <script src="<?php echo base_url().'/assets/js/ajax-addon.js'?>"></script>
  <!-- Custom scripts for login -->
  <script src="<?php echo base_url().'/assets/js/api-constant.js'?>"></script>
  
  <!-- Bootstrap core JavaScript-->
 
  <script src="<?php echo base_url().'/vendor/bootstrap/js/bootstrap.bundle.min.js'?>"></script>

  <!-- Core plugin JavaScript-->
  <script src="<?php echo base_url().'/vendor/jquery-easing/jquery.easing.min.js'?>"></script>

  <!-- Custom scripts for all pages-->
  <script src="<?php echo base_url().'/assets/js/sb-admin-2.min.js'?>"></script>

  <!-- Page level plugins -->
  <script src="<?php echo base_url().'/vendor/chart.js/Chart.min.js'?>"></script>
  <script src="<?php echo base_url().'/vendor/owl-carousel/js/owl.carousel.min.js' ?>"></script>
  <!-- Page level custom scripts -->
  <script src="<?php echo base_url().'/assets/js/demo/chart-area-demo.js'?>"></script>
  <script src="<?php echo base_url().'/assets/js/demo/chart-pie-demo.js'?>"></script>
  <script src="<?php echo base_url().'/assets/js/demo/chart-bar-demo.js'?>"></script>
  
  <script src="<?php echo base_url().'/assets/js/dashboard.js'?>"></script>
   
   <!-- cdn js -->
   <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.1/dist/jquery.validate.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.js"></script>
    <script src="<?php echo base_url().'/vendor/datatables/jquery.dataTables.min.js'?>"></script>
    <script src="<?php echo base_url().'/vendor/datatables/dataTables.bootstrap4.min.js'?>"></script>

  <!-- Page level custom scripts -->
  <script src="<?php echo base_url().'/assets/js/demo/datatables-demo.js'?>"></script>
  <?php   
        if(!empty($extra_scripts)){
            foreach ($extra_scripts as $key => $value) {
                echo "<script type='text/javascript' src='".$value."'></script>";
            }
        }
    ?>
      
</body>

</html>
