$(document).ready(function()
{
    var c=
    {
    }
    if(!localStorage.getItem('cart'))
    {
        localStorage.setItem('cart', JSON.stringify(c));
    }

    var classReg=["reg-fname","reg-lname","email","reg-pass","reg-cpass"];
    var classLog=["log-name","log-pass"];
    $('#reg-cpass').on('input', function()
    {
        n = $('#reg-pass').val();
        c = $('#reg-cpass').val();
        result="Passwords do not Match";
        if(n==c)
            result="";
        $(this).next().html(result);
    });
    $("#reg-submit").click(function()
    {
        var i;
        var flag=true;
        for(i=0;i<classReg.length;i++)
        {
            if($("#"+classReg[i]).val()==="")
            {
                $("#"+classReg[i]).next().css("display","block");
                flag=false;
            }
        }
        if(flag)
        {
            $(".register input").val("");
            for(var i=0;i<classReg.length;i++)
            {
                $(".register input").val("");
                $("#"+classReg[i]).next().css("display","none");
            }
            alert("Account Created");
        }
    });
    $("#log-submit").click(function()
    {
        var i;
        var flag=true;
        for(i=0;i<classLog.length;i++)
        {
            if($("#"+classLog[i]).val()==="")
            {
                $("#"+classLog[i]).next().css("display","block");
                flag=false;
            }
        }
        if(flag)
        {
            $(".register input").val("");
            for(var i=0;i<classReg.length;i++)
            {
                $(".register input").val("");
                $("#"+classLog[i]).next().css("display","none");
            }
            alert("Logged In");
        }
    });
	(function($)
	{
        $.fn.clickToggle = function(func1, func2)
        {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function()
            {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    }(jQuery));
    $("#login").click(function()
    {
        $(".acc").css("z-index","1");
        $("#content").animate({opacity:"0.5"});
        $(".acc").animate({opacity:"1"});
    });
    $("#login2").click(function()
    {
        $(".acc").css("z-index","1");
        $("#content").animate({opacity:"0.5"});
        $(".acc").animate({opacity:"1"});
    });
    $("#close").click(function()
    {
        $(".acc").animate({opacity:"0"});
        $("#content").animate({opacity:"1"});
        $(".acc").css("z-index","-1");
        for(var i=0;i<classReg.length;i++)
        {
            $(".register input").val("");
            $("#"+classLog[i]).next().css("display","none");
        }
    });
    $("#close1").click(function()
    {
        $(".acc").animate({opacity:"0"});
        $("#content").animate({opacity:"1"});
        $(".acc").css("z-index","-1");
        $(".register").css("display","none");
        $(".log").css("display","block");
        for(var i=0;i<classReg.length;i++)
        {
            $(".register input").val("");
            $("#"+classReg[i]).next().css("display","none");
        }
    });
    $("#reg").click(function()
    {
        $(".register").css("display","block");
        $(".log").css("display","none");
    });
    $("#reg1").click(function()
    {
        $(".register").css("display","none");
        $(".log").css("display","block");
    });
});