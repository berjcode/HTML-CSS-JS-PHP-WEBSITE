//Asal Sayi


for(i =2; i< 1000; i++)
{
    var asalMi =true;

    for(k=2 ; k<i ; k++)
    {

        if(i%k == 0)
        {
            asalMi = false;
        }


    }

    if(asalMi == true)
    {
        console.log(i);
    }
}

// tersi 



for(i =1000 ; i> 1; i--)
{
    var asalMi =true;

    for(k=2 ; k<i ; k++)
    {

        if(i%k == 0)
        {
            asalMi = false;
        }


    }

    if(asalMi == true)
    {
        console.log(i);
    }
}

// Diziye değer ekleme 




var dizi = [];

for(i = 1 ; i < 100 ; i++)
{
    if(i % 7 == 0 )
    {
        dizi.push(i);
    }
    
}

console.log(dizi);

//Cift sayılar




var dizi = [];

for(i = 1 ; i <= 10 ; i++)
{
    if(i % 2 == 0 )
    {
        dizi.push(i);
    }
    
}

console.log(dizi);
// tEK sAYILAR 




var dizi = [];

for(i = 1 ; i <= 10 ; i++)
{
    if(i % 2 != 0 )
    {
        dizi.push(i);
    }
    
}

console.log(dizi);
// 5 ile bölünebilen tek sayılar

var dizi = [];

for(i = 1 ; i <= 10 ; i++)
{
    if(i % 5 == 0 )
    {
        if( i % 2 != 0)
        {
            dizi.push(i);
        }
    }
    
}

console.log(dizi);

// 5 ile bölünebilen cift sayılar


var dizi = [];

for(i = 1 ; i <= 100 ; i++)
{
    if(i % 5 == 0 )
    {
        if( i % 2 == 0)
        {
            dizi.push(i);
        }
    }
    
}

console.log(dizi);

// Faktoriyel


var sayi= 5;

  var toplam = 1;

  for(x = 1; x <= sayi ; x++)
  {
        toplam = toplam * x;

  }
console.log(toplam);
//Faktoriyel fonskiyon



function factorial(sayi)
{

var sayi;

  var toplam = 1;

  for(x = 1; x <= sayi ; x++)
  {     
     
        toplam = toplam * x;
      //  console.log(toplam);
  }
//console.log(toplam);

}


factorial(5);

// fibanacoi

var ilk,ikincisayi,toplam;

ilk=0;
ikincisayi=1;

while(ilk+ikincisayi <10)   
{

    toplam = ilk+ikincisayi;
    console.log(toplam);
    ilk= ikincisayi;
    ikincisayi=toplam;
}

//15 indextde fibanaco değerni ibul

var ilk,ikincisayi,toplam;

ilk=0;
ikincisayi=1;
var dizi= [];

while(ilk+ikincisayi <1000)   
{
    

    toplam = ilk+ikincisayi;
   // console.log(toplam);
    ilk= ikincisayi;
    ikincisayi=toplam;
    dizi.push(toplam);

   
}

console.log(dizi[10]);

//Hipotenüs

function  Hipotenus(a,b)
{
  
   
   c = Math.pow(a,2) + Math.pow(b,2);
  return Math.sqrt(c);   
}
console.log(Hipotenus(2,5));
// kek kek 


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

//recursive fonskiyon
function recursiveFaktoriyel(a)
{
    if(a > 1 )
    {
        return  a*recursiveFaktoriyel(a-1);
    }else
    {
        return a;
    }
}

console.log(recursiveFaktoriyel());


Adım ==> sayi = 5 için ==> return 5 * Faktoriyel(4);
2.Adım ==> sayi = 4 için ==> return 4 * Faktoriyel(3);
3.Adım ==> sayi = 3 için ==> return 3 * Faktoriyel(2);
4.Adım ==> sayi = 2 için ==> return 2 * Faktoriyel(1);
5.Adım ==> return 1;

// 10 kadar olan sayıları toplayan progrma


function  nSayiTopla(sayi)
{


var sayi;

  var toplam = 0;

  for(index = 0; index < sayi ; index++)
  {
        
       toplam = toplam + index;
       
  }
  console.log(toplam);}



  nSayiTopla(2);

  //sayıları ayırma

  var r = 1453;

for(i =10 ; i <=10000; i = i * 10)
{
    console.log(r%i);
    r = r-r % i;
}


//switxhcase

var x = 3;
switch (x) {
    case 0:
      day = "Sunday";
      console.log(day)
      break;
    case 1:
      day = "Monday";
      console.log(day)
      break;
    case 2:
       day = "Tuesday";
       console.log(day)
      break;
    case 3:
      day = "Wednesday";
      console.log(day)
      break;
    case 4:
      day = "Thursday";
      console.log(day)
      break;
    case 5:
      day = "Friday";
      console.log(day)
      break;
    case 6:
      day = "Saturday";
  }

  //function

  function switchcase2(x)
{



switch (x) {
    case 0:
      day = "Sunday";
      console.log(day)
      break;
    case 1:
      day = "Monday";
      console.log(day)
      break;
    case 2:
       day = "Tuesday";
       console.log(day)
      break;
    case 3:
      day = "Wednesday";
      console.log(day)
      break;
    case 4:
      day = "Thursday";
      console.log(day)
      break;
    case 5:
      day = "Friday";
      console.log(day)
      break;
    case 6:
      day = "Saturday";
  }}

  switchcase2(2);
  // büyük sayi bulduran fonskiyno

  function bul(x,y)
{

   var enBuyukSayi;

   if(x >y )
   {
    enBuyukSayi=x;
    console.log(enBuyukSayi); 
   }else
   {
    enBuyukSayi=y;
    console.log(enBuyukSayi); 
   }
}

bul(2,5);


//3lü büuük sayi

function bul(x,y,z)
{

   var enBuyukSayi;

   if(x >y >z )
   {
    enBuyukSayi=x;
    console.log(enBuyukSayi); 
   }

   else if(y>z)

   {
    enBuyukSayi=y;
    console.log(enBuyukSayi); 
   }
   else
   {
        enBuyukSayi= z;
        console.log(enBuyukSayi); 
   }
}

bul(2,5,2);
