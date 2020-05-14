<?php namespace App\Controllers;

    class Auth extends BaseController
    {
        //default controller
        //this will load the login page
        public function index(){
            //Page name   
            $data['extra_scripts'] = array(
                base_url().'/assets/js/auth.js',
            );
            $data['title'] = 'Quass - Login ';
            echo view('header/auth_header',$data);
            echo view('login');
            echo view('footer/auth_footer');
        }
        //this will load the login page
        public function registration(){
            $data['extra_scripts'] = array(
                base_url().'/assets/js/auth.js',
            );
            //Page name   
            $data['title'] ='Quass - Registration ';
            echo view('header/auth_header',$data);
            echo view('registration');
            echo view('footer/auth_footer');
        }
        //this will load the login page
        public function activate(){
            $data['extra_scripts'] = array(
                base_url().'/assets/js/activate.js',
            );
            //Page name   
            $data['title'] ='Quass - Activation ';
            echo view('header/auth_header',$data);
            echo view('activate_account');
            echo view('footer/auth_footer');
        }
        public function twofactor_verification(){
            $data['extra_scripts'] = array(
                base_url().'/assets/js/constant.js',
                base_url().'/assets/js/twofactor.js',
            );
            $data['title'] = 'Two Factor Verification';
            echo view('header/auth_header',$data);
            echo view('two_factor_verification');
            echo view('footer/auth_footer');
        }
    }
?>