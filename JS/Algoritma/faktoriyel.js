  var sayi= 5;

  var toplam = 1;

  for(x = 1; x <= sayi ; x++)
  {
        toplam = toplam * x;

  }
console.log(toplam);

//Function


//function 



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


fib(10);