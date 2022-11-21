$(document).ready(function()
{
    $("#cart-empty").css('display','none');
    var cart = JSON.parse(localStorage.getItem('cart'));
    if(Object.keys(cart).length === 0 && cart.constructor === Object)
    {
        $("#cart-empty").css('display','block');
        console.log(cart);
    }
    function calcPrice()
    {
        var p=0;
        for(let i in cart)
        {
            p+=cart[i][2];
        }
        $(".cart-checkout span").html("$"+p);
    }
    calcPrice();
    var items=[];
    $.each(cart,function( key , val )
    {
        items.push("<div class='cart-item'><img src='"+val[0]+"'><div class='cart-name'><p id='cName'>"+key+"</p><p id='Quantity'>Quantity: "+val[1]+"</p></div><div class='cart-price'>$"+val[2]+"</div><button class='cart-remove btn btn-danger'>Remove</button></div>");
    });
    for(var i=0;i<items.length;i++)
    {
        $('.cart-content').append(items[i]);
    }
    $('.cart-remove').click(function()
    {
        $(this).parent().css("display","none");
        var remKey=$(this).siblings('.cart-name').children('#cName').text();
        delete cart[remKey];
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        calcPrice();
        if(Object.keys(cart).length === 0 && cart.constructor === Object)
        {
            $("#cart-empty").css('display','block');
        }
    });
});