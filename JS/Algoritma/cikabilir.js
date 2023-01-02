function  Hipotenus(a,b)
{
            //9                  // 16
    
   c = Math.pow(a,2) + Math.pow(b,2); //KARESİNİ ALDIRMA 



  return Math.sqrt(c); //KÖKÜNÜ ALIR
  
}


Console.log(Hipotenus(3,4));


//

function  topla(a,b)
{
            //9                  // 16
    
   



  return  a+b;
  
}


Console.log(topla(2,5));

//

var dizi = [];

for(i = 1000 ; i>1; i--)
{
    if(i % 7 == 0 )
    {
        dizi.push(i);
    }
    
}

console.log(dizi);
//

var dizi = [];

for(i = 1; i<1000; i++)
{
    if(i % 7 == 0 )
    {
        dizi.push(i);
    }
    
}

console.log(dizi);
//
// 250 KADAR OLAN SAYILARIN TOPLAMI 

var sayi= 250;

  var toplam = 0;

  for(i = 0; i  < sayi ; i ++)
  {
        
       toplam = toplam + i ;
       
  }
  console.log(toplam);

  // 10a kadar olan sayıların 
  var sayi= 10;

  var toplam = 1;

  for(i = 1; i  <= sayi ; i ++)
  {
        
       toplam = toplam * i ;
       
  }
  console.log(toplam);

  //faktoriyel  bulma

  var sayi= 5;

  var toplam = 1;
                //5
  for(x = 1; x <= sayi ; x++)
  {
        toplam = toplam * x;
        console.log(toplam);
  }
//fonskyon sayi 
function factorial(sayi)
{
 
    var toplam = 1;
                  //5
    for(x = 1; x <= sayi ; x++)
    {
          toplam = toplam * x;
          console.log(toplam);
    }
  
   
}


factorial(5);