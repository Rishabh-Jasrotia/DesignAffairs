$(document).ready(function()
{
    $(".cart-add").click(function()
    {
        var cart = JSON.parse(localStorage.getItem('cart'));
        var q=$(this).siblings("select").val();
        q=parseInt(q);
        var name=$(this).siblings("h2").text();
        var url=$(this).siblings(".img-url").text();
        var p=$(this).siblings("h4").text();
        var price="";
        var i=1;
        while(p[i]!=".")
        {
            price+=p[i];
            i++;
        }
        price=parseInt(price);
        console.log(price);
        cart[name]=[url,q,price*q];
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});