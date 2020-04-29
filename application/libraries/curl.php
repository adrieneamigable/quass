<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    class curl{
        public function proccess($data = array()){
            $result = "";
            switch (strtoupper($data['method'])) {
                case 'GET':

                    $url = $data['url'];

                    $payload = $data['payload'];
        
                    $ch = curl_init();    
        
                    curl_setopt($ch, CURLOPT_URL,$url.http_build_query($payload));                                                                  
                    curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"GET");                                                                   
                    curl_setopt($ch, CURLOPT_TIMEOUT, 30); //timeout after 30 seconds
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
                    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
                    
                    if(isset($data['access_token']) && $data['access_token'] != ""){
                        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                            'Authorization: Bearer '.$data['access_token'],
                        ));
                    }
                    
                    $result = curl_exec($ch);

                    curl_close ($ch);
        
                    break;
                case 'POST':
                
                    $url = $data['url'];

                    $payload = $data['payload'];
        
                    $ch = curl_init();    
        
                    curl_setopt($ch, CURLOPT_URL,$url);                                                                  
                    curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"POST");   
                    curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($payload));                                                                    
                    curl_setopt($ch, CURLOPT_TIMEOUT, 30); //timeout after 30 seconds
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
                    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
                    
                    if(isset($data['access_token']) && $data['access_token'] != ""){
                        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                            'Authorization: Bearer '.$data['access_token'],
                        ));
                    }

                    $result = curl_exec($ch);

                    curl_close ($ch);
        
                    break;
                case 'PUT':

                    $url = $data['url'];

                    $payload = $data['payload'];
        
                    $ch = curl_init();    
                    curl_setopt($ch, CURLOPT_URL,$url);                                                                  
                    curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"PUT");  
                    curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($payload));                                                                     
                    curl_setopt($ch, CURLOPT_TIMEOUT, 30); //timeout after 30 seconds
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
                    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
                    
                    if(isset($data['access_token']) && $data['access_token'] != ""){
                        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                            'Authorization: Bearer '.$data['access_token'],
                        ));
                    }

                    $result = curl_exec($ch);
                    
                    curl_close ($ch);
                    
                    break;
                case 'DELETE':

                    $url = $data['url'];

                    $payload = $data['payload'];
   
                    $ch = curl_init();    
        
                    curl_setopt($ch, CURLOPT_URL,$url.http_build_query($payload));                                                                  
                    curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"DELETE");                                                                   
                    curl_setopt($ch, CURLOPT_TIMEOUT, 30); //timeout after 30 seconds
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
                    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
                    
                    if(!empty($data['access_token'])){
                        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                            'Authorization: Bearer '.$data['access_token'],
                        ));
                    }

                    
                    $result = curl_exec($ch);

                    curl_close ($ch);
                    # code...
                    break;
                default:
                    # code...
                    break;
            
            }

            return $result;
        }
    }
?>