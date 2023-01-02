//Fibanocci

var ilk,ikincisayi,toplam;

ilk=0;
ikincisayi=1;

while(ilk+ikincisayi <1000)   
{

    toplam = ilk+ikincisayi;
    console.log(toplam);
    ilk= ikincisayi;
    ikincisayi=toplam;
}

// toplam =1 , ilksayi =1 ,  ikinci sayi =1 

//toplam = 2 , ilk sayi = 1 , ikinci sayi =2 
// toplam = 3 , ilk sayi  = 2 , ikinci sayi = 3

// toplam = 5, ilk sayi = 3, ikinci sayi = 5

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