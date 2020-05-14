<?php namespace App\Controllers;
 class Dashboard extends BaseController{
    //default controller
    //this will load the login page
    public function index(){
        $data['title'] = 'Dashboard';
        echo view('header/dashboard_header',$data);
        echo view('sidenav/dashboard_sidenav');
        echo view('appbar/dashboard_appbar');
        echo view('dashboard/main');
        echo view('footer/dashboard_footer');
    }
    public function settings(){

        $data['extra_scripts'] = array(
            base_url().'/assets/js/settings.js',
        );

        $data['title'] = 'Settings';
        echo view('header/dashboard_header',$data);
        echo view('sidenav/dashboard_sidenav');
        echo view('appbar/dashboard_appbar');
        echo view('dashboard/settings');
        echo view('footer/dashboard_footer');
    }
    public function company(){

        $data['extra_scripts'] = array(
            base_url().'/assets/js/company.js',
        );

        $data['title'] = 'Company';
        echo view('header/dashboard_header',$data);
        echo view('sidenav/dashboard_sidenav');
        echo view('appbar/dashboard_appbar');
        echo view('dashboard/company');
        echo view('footer/dashboard_footer');
    }
 }
?>