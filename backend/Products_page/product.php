<?php include './dbconnect.php'; ?>

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
error_reporting(E_ERROR);


$conn = $pdo->open();
// $product_id = $_GET['product'];
$product_id = "maybelineproduct";

try{
    $stmt = $conn->prepare("SELECT *, products.product_name AS product_name , products.product_img AS product_img, products.product_price AS product_price,products.product_desc AS product_desc FROM products where product_id = :product_id");
    $stmt->execute(['product_id' => $product_id]);
    $product = $stmt->fetch();
}
catch(PDOException $e){
    echo "there is some problem in connection" . $e->getMessage();
}
echo json_encode($product,JSON_PRETTY_PRINT);


?>

