<?php

class Dvd_model extends CI_Model {

    public function __construct() {
        $this->load->database();
    }

    public function get_Dvd() {
        $query = $this->db->get('dvd');
        return $query->result_array();
    }

    public function getDvdsOfMonth() {
        $sql = "select dvd.titre, dvd.img, count(dvd.titre) as nbr_dvd_emprunter
from emprunt
inner join exemplaire on emprunt.fk_num_unique = exemplaire.num_unique
inner join dvd on  exemplaire.fk_dvd= dvd.id_dvd
where emprunt.date_emprunt BETWEEN NOW() - INTERVAL 30 DAY AND NOW()
group by dvd.titre, dvd.img
order by nbr_dvd_emprunter desc
limit 2";
        $query = $this->db->query($sql);
        return $query->result_array();
    }

}
