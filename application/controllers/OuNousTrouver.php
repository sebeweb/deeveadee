<?php

class OuNousTrouver {

    public function __construct() {
        parent::__construct();
        $this->load->model('Dvd_model');
        $this->load->helper('url_helper');
    }

    public function index() {
        $data['title'] = 'Ou nous trouver';
        $this->load->view('templates/header', $data);
        $this->load->view('site/map');
        $this->load->view('templates/footer');
    }

}
