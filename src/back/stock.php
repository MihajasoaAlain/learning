<?php
header("content-type: application/json");
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:*");
$servername = "localhost";
$username = "root";
$password = "mihajasoa";
$dbname = "GestionDeMateriel";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true); // Récupérer les données JSON
    $designation = $data['designation'];
    $etat = $data['etat'];
    $quantite = $data['quantite'];
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $stmt = $conn->prepare("INSERT INTO materiel(designation, etat, quantite) VALUES (:designation,:etat,:quantite)");
        $stmt->bindParam(':designation', $designation);
        $stmt->bindParam(':etat', $etat);
        $stmt->bindParam(':quantite', $quantite);
        $stmt->execute();

        echo "Insertion successful";
    } catch(PDOException $e) {
        if ($e->getCode() == 23000) {
            echo '
                <p>Vérifiez votre saisie</p>
            </div>';
        } else {
            echo "Une erreur s'est produite : " . $e->getMessage();
        }
    }
}
elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $numMateriel = $_GET['numMateriel'];

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $stmt = $conn->prepare("DELETE FROM materiel WHERE numMateriel = :numMateriel");
        $stmt->bindParam(':numMateriel', $numMateriel);
        $stmt->execute();

        echo "Suppression réussie";
    } catch(PDOException $e) {
        if ($e->getCode() == 23000) {
            echo "Impossible de supprimer cet étudiant car il est parmi les étudiants qui font leur soutenance. Veuillez les effacer.";
        } else {
            echo "Une erreur s'est produite : " . $e->getMessage();
        }
    }
}
elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents("php://input"), $_PUT);
    $numMateriel = $_POST['numMateriel'];
    $designation = $_POST['designation'];
    $etat = $_POST['etat'];
    $quantite = $_POST['quantite'];

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $stmt = $conn->prepare("UPDATE materiel SET designation = :designation, etat = :etat, quantite = :quantite WHERE numMateriel = :numMateriel");
        $stmt->bindParam(':designation', $designation);
        $stmt->bindParam(':etat', $etat);
        $stmt->bindParam(':quantite', $quantite);
        $stmt->bindParam(':numMateriel', $numMateriel);
        $stmt->execute();
        
        echo "Modification réussie";
    } catch(PDOException $e) {
        echo "Une erreur s'est produite : " . $e->getMessage();
    }
}
elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $stmt = $conn->prepare("SELECT * FROM materiel");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
$conn = null;
?>
