<?php 
header("Access-Control-Allow-Origin: *");
require_once'bdd.php';
class Calcul extends Bdd {
    
public $operation;
public $resultat;


function __construct(){
    $this->operation;
    $this->resultat;
    parent::__construct($this->db);
}


public function insertCalcul($operation,$resultat){
    $insert = $this->db->prepare('INSERT INTO `calcul`(`resultat`, `operation`) VALUES(:operation,:resultat)');
    $insert->execute(array(
        ':operation'=>$operation,
        ':resultat'=>$resultat
    ));
}
public function afficheCalcul(){
    $select = $this->db->prepare('SELECT * FROM calcul');
    $select ->execute();
    $affiche= $select ->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($affiche);

}


}
$calcul = new Calcul;
if (isset($_GET['envoi'])) {
    if ($_GET['envoi']=1) {
        if (isset($_POST['calcul'])||isset($_POST['result'])) {
            $test=$calcul->insertCalcul($_POST['calcul'],$_POST['result']);

        }
        
    }
    
}

$affichage = $calcul->afficheCalcul();
echo $affichage;