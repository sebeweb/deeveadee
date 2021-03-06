<?php

class Accueil extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('Dvd_model');
        $this->load->helper('url_helper');
    }

    public function index() {
        $data['title'] = 'Accueil';
        $this->load->view('templates/header', $data);
        $this->load->view('site/accueil');
        $this->load->view('templates/footer');
    }

    public function getDvdOfTheMonth() {
        $dvd = $this->Dvd_model->getDvdsOfMonth();
        $this->output->set_content_type('application/json');
        $this->output->set_output(json_encode($dvd));
    }

}
