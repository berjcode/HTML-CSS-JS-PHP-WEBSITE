var r = 1453;

for(i =10 ; i <=10000; i = i * 10)
{
    console.log(r%i);
    r = r-r % i;
}

