<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" href="<?php echo base_url().'/assets/logo/quass_logo.png'?>"/>
  <title><?php echo $title; ?></title>

  <!-- Custom fonts for this template-->
  <link href="<?php echo base_url().'/vendor/fontawesome-free/css/all.min.css' ?>" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <link href="<?php echo base_url().'/vendor/bootstrap/css/bootstrap.min.css' ?>" rel="stylesheet">
  <!-- Custom styles for this template-->
  <link href="<?php echo base_url().'/assets/css/sb-admin-2.min.css' ?>" rel="stylesheet">
  <link href="<?php echo base_url().'/assets/css/loader.css' ?>" rel="stylesheet">
  <link href="<?php echo base_url().'/assets/css/dashboard.css' ?>" rel="stylesheet">
  <link href="<?php echo base_url().'/vendor/owl-carousel/css/owl.carousel.css'?>" rel="stylesheet">
  <script src="<?php echo base_url().'/vendor/jquery/jquery.min.js'?>"></script>
  
</head>

<body id="page-top">
<div class="loading">Loading&#8230;</div>

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '297722407886667',
      cookie     : true,
      xfbml      : true,
      version    : 'v6.0'
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

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=297722407886667&autoLogAppEvents=1"></script>
  <!-- Page Wrapper -->
  <div id="wrapper">


    <!-- End of Sidebar -->