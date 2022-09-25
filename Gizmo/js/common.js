$(function(){
    //菜单模块的字体颜色动画
    $(".menuList").hover(function(){
        $(this).find(".before").stop().animate({
            "right":"-32px",
            "opacity":"1"
        },800)
        $(this).siblings(".menuList").find(".before").stop(false,true);
        $(this).find(".menuContent").stop().animate({
            "color":"red"
        },800)
    },function(){
        $(this).find(".before").stop().animate({
            "right":"50%",
            "opacity":"0"
        },800)
        $(this).siblings(".menuList").find(".before").stop(false,true);
        $(this).find(".menuContent").stop().animate({},10,function(){
            $(this).find(".menuContent").css("color","#red");
        })
    })






    //搜索区域的显示隐藏动画
    //点击搜索图标显示搜索区域
    $(".searchBtn").click(function(){
        $(".searchArea").stop().slideDown(300);
        setTimeout(function(){
            $("#form").stop().slideDown(200);
        },300)
        setTimeout(function(){
            $(".former").stop().slideDown(200);
        },500)
    })

    //点击former按钮关闭搜索区域
    $(".former>span").click(function(){
        $(".former").stop().slideUp(200);
        setTimeout(function(){
            $("#form").stop().slideUp(200);
        },200)
        setTimeout(function(){
            $(".searchArea").stop().slideUp(300);
        },400)
        
    })



    

    //语言的切换按钮
    $(".languageBtn").on({
        mouseenter:function(){
            $(this).children(".language").stop().show(200);
        },
        mouseleave:function(){
            $(this).children(".language").stop().hide(200);
        }
    })
    $(".language").on({
        mouseover:function(){
            $(this).stop().show(200);
        },
        click:function(){
            let lan = $(this).text();
            $(this).text($("#en").text()).siblings("#en").text(lan);
        }
    })
})