<?php
 class Dashboard extends CI_Controller{
    //Page name   
    private $page_name = 'Quass - Dashboard ';

    function __construct(){
        parent::__construct();
    }
    //default controller
    //this will load the login page
    public function index(){
        $data['title'] = $this->page_name;
        $this->load->view('header/dashboard_header',$data);
        $this->load->view('sidenav/dashboard_sidenav');
        $this->load->view('appbar/dashboard_appbar');
        $this->load->view('dashboard/main');
        $this->load->view('footer/dashboard_footer');
    }
    public function settings(){

        $data['extra_scripts'] = array(
            base_url().'assets/js/settings.js',
        );

        $data['title'] = $this->page_name;
        $this->load->view('header/dashboard_header',$data);
        $this->load->view('sidenav/dashboard_sidenav');
        $this->load->view('appbar/dashboard_appbar');
        $this->load->view('dashboard/settings');
        $this->load->view('footer/dashboard_footer');
    }
 }
?>