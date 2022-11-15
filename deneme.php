<?php
/*$checkprime = true;
for($i = 0; $i <= 1000; $i++)
{



for($k = 2; $k< $i ; $k++)
{

	if($i % $k == 0)
    {
    	$checkprime=false;
        break;
    
    }if($checkprime=true)
    {
    
    var_dump($i."Asal sayıdır.");
    
    }
    

} }*/
//Dizi Cift BOYUTLU
/*
$isimler=["Ahmet","Ufuk","Hayri","Hüseyin","Recep"]; //5 elemanlı dizi tanımlama
$ogrencitel =["123","444","555","554","444"];

$okul=[$isimler,$ogrencitel];

/*
var_dump($okul[1][1]); //cift boytlu dizilerde 1 dizinin 1 elemeanı 
var_dump(is_array($okul)); // dizi mi değil mi kontrol eder.
var_dump(array_sum($ogrencitel)); // dizi toplamını bulma
var_dump(asort($isimler));
*/
//print_r($okul); // okunabilir şekilde verir

//var_dump(count($okul));
// var_dump(array_rand($ogrencitel, 2)); ratgale değer secer
/*var_dump(in_array('erbilen', $ogrencitel) ) ;  // değerin dizide olup olmadığını kontrol eder.

$sirala = asort($isimler);

var_dump($sirala);
*/
/*
$sayi = 0;
$toplam = 0;
 
while($sayi < 10) {
   $toplam = $toplam + $sayi;    //0 , 1 , 2 , 4 
   $sayi++;
 //  echo "<br>"; // her adımı tek tek gösteriri.
   echo $sayi;
   
}
 


echo "<br>";

echo $toplam;
*/
/*
$toplam = 0;
$sayac=0;
for($sayi = 0; $sayi <= 10; $sayi++) {
    
    $toplam = $toplam + $sayac;
    $sayac++;
 }
 echo $toplam;
 echo "<br>";

 echo $sayac;*/

/*
 $meyveler = array('Elma', 'Armut', 'Portakal', 'Muz');

 foreach($meyveler as $meyve) {
    echo "<br>";
    echo $meyve . ' Yiyin! ';
 }
*//*
$bilgi['ad'] = 'Musa';
$bilgi['yas'] = 18;
$bilgi['yer'] = 'İstanbul';
 
foreach($bilgi as $isim => $deger) {
   echo $isim . ' : ' . $deger . ' <br/>';
}*/

/*
function rakamlar() {

    $meyveler = array('Elma', 'Armut', 'Portakal', 'Muz');

 foreach($meyveler as $meyve) {
    echo "<br>";
    echo $meyve . ' Yiyin! ';
 }
 
 }
 
  
 
 rakamlar();*/
/*
 $toplam = 0;
 $adet = 0;

 for($i= 2;$i <1000;$i++)
 {
    $asalMi = true;

    for($k=2 ; $k< $i ; $k++)
    {
        if($i % $k == 0)
        {
            $asalMi = false;
          // var_dump($i."asal değil");
        //  var_dump($i."asal değil");
            break;

        }
    }if($asalMi == true)
    {
        $adet++;
        $toplam+=$i;
        
        var_dump($i."asal d");
        break;
    }
    if($toplam > 50000)
    {
      //var_dump($adet ."Asal sayı ve Toplam" );
    }


 }

*/


for($i = 1 ; $i<200; $i++)
{
    if($i%3 ==0 && $i % 5 ==0 && $i % 7== 0)
    {
            echo "Sayı".$i;
    }
}





?>