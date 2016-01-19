<?php
function getConnection() {
	//variables in php file are local to this function.
	require_once 'secret/db-credentials.php';
	
	try {
		//PDO is a library that allows us to connect to a database
		$conn = new PDO("mysql:host=$dbHost;dbname=$dbDatabase", 
			$dbUser, $dbPassword);
			
		return $conn;
		
	} catch(PDOException $e) {
		die('Could not connect to database ' . $e);
	}
}

?>