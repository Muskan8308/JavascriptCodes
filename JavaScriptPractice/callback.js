// Callback function ek aisa function hota h jo ek dusre function ke andar pass hota hai...

function product(a,b,c)
{
    return a*b*c;
}

// CallBack Function

function fun(x,y)
{
    let a = x(5,6,8);
    console.log(a - y);
}

fun(product, 5);    // first argument is a function which is passed to fun()
