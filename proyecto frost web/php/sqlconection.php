<?php
$serverName = "serverName\\sqlexpress"; // Servidor e instancia
$connectionInfo = array(
   "Database" => "dbName",
   "UID" => "userName",
   "PWD" => "password"
);
$conn = sqlsrv_connect($serverName, $connectionInfo);
if ($conn) {
   echo "Conexión establecida.";
} else {
   echo "La conexión no pudo ser establecida.";
   die(print_r(sqlsrv_errors(), true));
}
?>  