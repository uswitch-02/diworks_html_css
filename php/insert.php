<? php
mb_internal_encoding("utf-8");
PDO("mysql:dbname = lesson1; host = localhost;","root","");
$pdo -> exec("insert into contactform(name,mail,age,comments)
values('".$_POST['name']."','".$_POST['mail']."','".$_POST['age']."','".$_POST['comments']."');");
