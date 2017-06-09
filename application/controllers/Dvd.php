<?php

class Dvd extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Dvd_model');
        $this->load->helper('url_helper');
    }

    public function index() {
        $data['title'] = 'News archive';
        $data['dvd'] = $this->Dvd_model->get_Dvd();
        $this->load->view('templates/header', $data);
        $this->load->view('site/dvd', $data);
        $this->load->view('templates/footer');
    }

}
