<?php

class Bdd {

    protected $db;
function __construct(){
    try {
        $this->db = new PDO ('mysql:host=localhost:3306;dbname=calculator9000;charset=utf8','root','root');
        $this->db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo 'Echec de la connexion : ' . $e->getMessage();
        exit;
    }
}


}









?>