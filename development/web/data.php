<?php
$localhost = '';
$user = '';
$password = '';
$database  = '';


// Connect to MySQL
$link = mysql_connect( 'localhost', 'root', 'Beehive123' );
if ( !$link ) {
  die( 'Could not connect: ' . mysql_error() );
}

// Select the data base
$db = mysql_select_db( 'beehive', $link );
if ( !$db ) {
  die ( 'Error selecting database \'test\' : ' . mysql_error() );
}

// Fetch the data
$query = "
SELECT *
FROM temperatureTest
ORDER BY timeStamp ASC";
$result = mysql_query( $query );

// All good?
if ( !$result ) {
  // Nope
  $message  = 'Invalid query: ' . mysql_error() . "\n";
  $message .= 'Whole query: ' . $query;
  die( $message );
}

// Print out rows
$prefix = '';
echo "[\n";
while ( $row = mysql_fetch_assoc( $result ) ) {
  echo $prefix . " {\n";
    echo '  "timeStamp": "' . $row['timeStamp'] . '",' . "\n";
    echo '  "measure": ' . $row['measure'] . '' . "\n";
    //echo '  "value2": ' . $row['value2'] . '' . "\n";
    echo " }";
    $prefix = ",\n";
  }
  echo "\n]";

  // Close the connection
  mysql_close($link);
  ?>
