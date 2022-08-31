<?php
include('databaseconnection.php');

$productname = $_POST['pname'];  
$query = "SELECT Review FROM products NATURAL JOIN product_reviews WHERE products.Product_Name='$productname'";
                
try{
    $result = mysqli_query($conn,$query);

    $data = [];
    $check_num_rows=mysqli_num_rows($result);
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
       
    $data[] = $row;
    
  $response = [];
  $response['data'] =  $data; 
  echo json_encode($data, JSON_PRETTY_PRINT);
}
catch(Exception $error)
{
    echo 'connection error: '.$error->getMessage();
}

?>