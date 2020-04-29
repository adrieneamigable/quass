<?php
   

    class LoginController extends CI_Controller{

        //Page name   
        private $page_name = 'Quass - Login ';

        function __construct(){
            parent::__construct();
        }
        //default controller
        //this will load the login page
        public function index(){
            $data['title'] = $this->page_name;
            $this->load->view('login',$data);
        }
    }
?>