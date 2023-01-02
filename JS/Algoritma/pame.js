var kelime = "kek";
var dizi = kelime.split("");
var kelime2 ="";

//console.log(dizi.length);
for(i = dizi.length -1  ; i >= 0 ; i--)
{
    
    
    kelime2 = kelime2 + dizi[i];
    
  
}


if(kelime == kelime2){
    console.log("Ayni");
}else
{
    console.log("farkli");
}
