/*var dizi = [];


for(i = 0 ; i <1000 ; i++)
{
    if(i % 7 == 0 )
    {
        dizi.push(i);
    }
    
}

console.log(dizi);*/




//const dizi = kelime.split(""); // "" eklersek harf harf ayırır.
//const dizi = kelime.split(" "); boşluk eklersek boşluktan böle.
//console.log(dizi);


/*
var r = 1453;

for(i =10 ; i <=10000; i = i * 10)
{
    console.log(r%i);
    r = r-r % i;
}





*/
/*
var i; //   
var k; // Asal olan sayıyı kontrol etmek için üzerinde deneme yapacağımız sayılar
var asalMi; //Asal'lığı kontrol etmek için bir değişken oluştururuz.
for(i =1000 ; i>1 ; i-- )
{
    asalMi = true; //Asal'lığı kontrol etmek için  boolean değişken tanımlarız. 
    for( k=2; k<i ; k++)
    {
        if(i % k  == 0) //Eğer i sayısı k sayısına tam bölünüyorsa  o asal değildir.
        {
            asalMi =false;  // Asallık false yapıp aşağıda true olanları yazdırırız.
            
        }
    }

    if(asalMi == true) //Asal olan sayılar burada 
    {
        
        console.log(i); //Asalları ekrana basıyoruz.
      
    }
  
}*/


/*
var dizi = [];


for(i = 0 ; i <1000 ; i++)
{
    if(i % 7 == 0 )
    {
        dizi.push(i);
    }
    
}

console.log(dizi);*/
/*

function fib(bitis)
{


var ilk,ikincisayi,toplam,bitis;

ilk=0;
ikincisayi=1; 

while(ilk+ikincisayi <bitis)   
{

    toplam = ilk+ikincisayi;
    console.log(toplam);
    ilk= ikincisayi;
    ikincisayi=toplam;
}
}


fib(10);*/

// hİPOTENÜS BULDURAN FONSKİYNOU YPAIN 2 PARAMTERLİ 

//

/*
function  Hipotenus(a,b)
{
       //9                  // 16
  
   c = Math.pow(a,2) + Math.pow(b,2); //KARESİNİ ALDIRMA 



  return Math.sqrt(c); //KÖKÜNÜ ALIR
  

      
}

console.log(Hipotenus(6,8));*/
function  nSayiTopla(sayi)
{


var sayi;

  var toplam = 0;

  for(i = 0; i <= sayi ; i++)
  {
        
       toplam = toplam + i;
       console.log(toplam);
  }
  }



  nSayiTopla(10);