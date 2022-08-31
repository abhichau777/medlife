<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 


include('databaseconnection.php');
$similiar = $_GET['similiar'];  
$sql = "mysql:host=$server;dbname=$database;";
$dsn_options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];

// $similiar = "Ayurvedic";
$query = "SELECT * FROM `medlife_products_data_base` where Product_categories='$similiar' order by Product_Discount DESC LIMIT 5";
                
try{
    $conn = new PDO($sql,$username,$password,$dsn_options);
    echo " DataBase Connected successfully";
    

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $data = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {          
        $data[] = $row;  
   } 

  $response         = [];
  $response['data'] =  $data;
  echo json_encode($response, JSON_PRETTY_PRINT);
}
catch(PDOException $error)
{
    echo 'connection error: ',$error->getMessage();
}



?>