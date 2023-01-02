

for(i =1 ; i<1000 ; i++ )
{
   var  asalMi = true; //Asal'lığı kontrol etmek için  boolean değişken tanımlarız. 
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
  
}