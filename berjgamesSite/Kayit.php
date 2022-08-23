<?php

require 'baglan.php';
?>


<!DOCTYPE html>
<html lang="tr">
<!-- Abdullah Balıkçı   -->

<head>
    <meta charset="UTF-8">
    <title> Register </title>
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>

    <section>
        <div class="row">
            <div class="col-6 mx-auto">
               <div class="card-header">
                    <h4>Kayıt Ol</h4>

               </div> 
               <div class="card-body"> 
                    
                    <form action="islem.php" method="post" >

                    <div class="form-group">
                        <label for="Email"> Email: </label>
                        <Input type="email" required class="form-control" name="email">
                    </div>
                    <div class="form-group">
                        <label for="Password"> Şifre: </label>
                        <Input type="password" required class="form-control" name="password">
                    </div>

                    
                    <button  href="Kayit.php" name="kayit"type="submit" class="btn">Kayıt Ol </button>
                    </form>

               </div>


            </div>


        </div>
    
        <div class="circle"></div>
        <header>
            <a href="index.php"><img src="Images/logo.png" class="logo"></a>
            <ul>
                <li><a href="index.php">Home</a></li>

            </ul>
        </header>
        <ul class="sci">
            <li> <a href="#"><img src="Images/facebok.png" width="60" height="60"> </a></li>
            <li> <a href="#"><img src="Images/instagram.png" width="60" height="60"> </a></li>

        </ul>

    </section>

</body>

</html>