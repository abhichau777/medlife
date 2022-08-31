<!-- 
<?php
$username = "u812410177_medcliffeDb";
$password ="^s8fuG*=N*Y";
$server = "sql678.main-hosting.eu" ;
$db = "u812410177_medcliffeDb";

$conn = mysqli_connect($server,$username,$password,$db);
if($conn){
    echo "connection sucess";
}
else{
    echo "connection not sucesss";
    die("no connection".mysqli_connect_error());
}


?> -->


<?php
//$servername = "mysql.hostinger.com";
//$servername = "in-mum-web678.main-hosting.eu";
//$servername = "localhost";
$username = "u812410177_medcliffeDb";
$server = "sql678.main-hosting.eu";
$password = "^s8fuG*=N*Y";
$database = "u812410177_medcliffeDb";
$sql = "mysql:host=$server;dbname=$database;";
$dsn_options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];

try{
    $mb_Db_connection = new PDO($sql,$username,$password,$dsn_options);
    echo "Connected succefully";
}
catch(PDOException $error)
{
    echo 'connection error: ',$error->getMessage();
}

?>