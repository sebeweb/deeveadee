<?php

class Dvd extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Dvd_model');
        $this->load->helper('url_helper');
    }

    public function index() {
        $data['title'] = 'News archive';
        $this->load->view('templates/header', $data);
        $this->load->view('site/dvd');
        $this->load->view('templates/footer');
    }

    public function getDvd() {
        $dvd = $this->Dvd_model->get_Dvd();
        $this->output->set_content_type('application/json');
        $this->output->set_output(json_encode($dvd));
    }

}
