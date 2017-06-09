<?php

class Dvd_model extends CI_Model {

    public function __construct() {
        $this->load->database();
    }

    public function get_Dvd() {
        $query = $this->db->get('dvd');
        return $query->result_array();
    }

}
