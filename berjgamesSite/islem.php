<?php
ob_start();
session_start();
require 'baglan.php';


if(isset($_POST['kayit']))
{
   $user_email =$_POST['email'];
   $user_password =$_POST['password'];


   if(!$user_email)
   {
    echo "Lütfen Bilgileri giriniz";

   }else if (!$user_password)
   {
    echo "Şifre giriniz";
   }else
   {

    //veritabanı kayıt işlemi

    $queryy= $db -> prepare('INSERT INTO login SET user_email = ?, user_password =?');
    $add= $queryy -> execute ([
      $user_email, $user_password //yukarıda biz atadık.

    ]);

    if($add)
    {
        echo "Kayıt Başarılı, yönlendirme devam ediyor...";
        header("Refresh:2; Login.php");
    }else
    {
        echo "Bir Hata oluştı,tekrar kontrol edin.";
    }
   }
}


if(isset($_POST['giris']))
{
    $user_email =$_POST['email'];
   $user_password =$_POST['password'];
   
    if(!$user_email)
    {
        echo "Kullanıcı adını giriniz" ;

    }else if(!$user_password)
    {
        echo "şifrenizi girin";
    }else 
    {
        $users_data = $db -> prepare ('SELECT * FROM login WHERE user_email= ? && user_password= ?');
        $users_data -> execute ([
            $user_email, $user_password

        ]);

         $say= $users_data -> rowCount();
        if($say==1)
        {
            $_SESSION['user_email'] =$user_email;
            $_SESSION['user_password'] =$user_password;
           header("Refresh:2; index.php");
           
         

        }else
        {
            echo "hata";
        }

    }

}



?>