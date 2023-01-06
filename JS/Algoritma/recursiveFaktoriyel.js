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

