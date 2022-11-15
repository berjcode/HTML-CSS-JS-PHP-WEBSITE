<?php
/*
$toplam = 0;
$adet = 0;

for($i= 1000;$i >1;$i--)
{
   $asalMi = true;

   for($k=2 ; $k< $i ; $k++)
   {
       if($i % $k == 0)
       {
           $asalMi = false;
         // var_dump($i."asal değil");
    //   var_dump($i."asal değil");
   // echo "<br>";
 //   var_dump($i."asal  değil ");
    break;

       }
   }if($asalMi == true)
   {
       $adet++;
       $toplam+=$i;
      echo "<br>";
     var_dump($i."asal sayıdır.");
       
   }
   if($toplam > 50000)
   {

   // echo "<br>";
   //  echo $adet ."Asal sayı ve Toplam". $toplam ;
     break;
   }
}
*/
/*
echo "<br>";
echo "<br>";

$adet= 0;
for($i=1 ;$i< 100; $i++)
{
    if($i % 5 == 0)
    {
       
        $adet ++;
        echo "<br>";
        echo $i;
        echo "<br>";
        
        
    }
}echo "döngü adeti" . $adet;*/


for($i = 1 ; $i = 200; $i++)
{
    if($i%3 ==0 && $i % 5 ==0 && $i % 7== 0)
    {
            echo  "Sayı".$i;
    }
}



?>

