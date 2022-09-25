$(function () {
    //页面加载时动画
  let goaliveImg = document.querySelector(".goaliveImg");
  let count = 0;

  $(goaliveImg).stop().animate({"margin-top": "40px",opacity: "0.2",},1200);

  let goAliveTimer1 = setInterval(function () {$(goaliveImg).animate({"margin-top": "0px", opacity: "1",},1200);}, 1200);

  let goAliveTimer2 = setInterval(function () {$(goaliveImg).stop().animate({"margin-top": "40px",opacity: "0.2",},1200);

      count++;
    if (count == 10) {
        $(".GizmoBodyBanner").css("display","block");
        $(".goAliveTrangle").animate({"border-width":"0px"},2000,function(){$(goaliveImg).parent().css("display","none");
      
      clearInterval(goAliveTimer1);
      clearInterval(goAliveTimer2);
      })
    }
  }, 1200);






  let flag = true;
    //监听滚轮控制头部区域的隐藏出现
    $(document).scroll(function(){
        let bac = flag == true?"#383543":"transparent";
        $(this).scrollTop()>=100?$(".mainHeader").css({"height":"70px","background-color":bac}):$(".mainHeader").css({"height":"110px","background-color":"transparent"})
    })



    // 菜单模块的显示与隐藏
    let times = [1000,900,700,500,400];
    $(".menuBtn").click(function(){
        if(flag){
            $(".menuArea").stop().slideDown(300);
            $(".mainHeader").css("background-color","transparent");

            $("#munuTop").stop().animate({
                "top":"8px"
            },400).siblings("#munuBottom").stop().animate({
                "top":"8px"
            },400,function(){
                $("#munuTop").css("display","none").siblings("#munuMiddlw").css("transform","rotate(45deg)").siblings("#munuBottom").css("transform","rotate(-45deg)");
            });
            $(".menuAreaTrangle1").stop().animate({
                "left":"12%"
            },900)
            $(".menuAreaTrangle2").stop().animate({
                "left":"30.1%"
            },1000)
            $(".menuAreaTrangle3").stop().animate({
                "left":"40%"
            },600)
            $(".menuAreaTrangle4").stop().animate({
                "left":"26%"
            },800)
            $(".menuAreaTrangle5").stop().animate({
                "left":"48%"
            },400)

            setTimeout(function(){
                $(".menuContent").each(function(index,item){
                    $(item).css("display","block").stop().slideDown(times[index]);
                    $(item).animate({
                        "opacity":"1"
                    },times[index]);
                })
            },600)

            setTimeout(function(){
                $(".whiteCicle").each(function(index,item){
                $(item).stop().slideDown(times[index]+100);
            })
            },800)

            flag = false;
        }else{
            $("#munuMiddlw").css("transform","rotate(0deg)").siblings("#munuBottom").css("transform","rotate(0deg)").siblings("#munuTop").css("display","block");
            $("#munuTop").stop().animate({
                "top":"2px"
            },400).siblings("#munuBottom").stop().animate({
                "top":"14px"
            },400);

            $(".menuAreaTrangle1").stop().animate({
                "left":"-120px"
            },900)
            $(".menuAreaTrangle2").stop().animate({
                "left":"-120px"
            },1000)
            $(".menuAreaTrangle3").stop().animate({
                "left":"-120px"
            },600)
            $(".menuAreaTrangle4").stop().animate({
                "left":"-120px"
            },800)
            $(".menuAreaTrangle5").stop().animate({
                "left":"-120px"
            },400)

            $(".menuContent").each(function(index,item){
                $(item).stop().slideUp(times[index]).animate({
                    "opacity":"0"
                },times[index]);
            })

            $(".whiteCicle").css("display","none");

            setTimeout(function(){
                $(".menuArea").stop().slideUp(300);
            },900)

            flag = true;
        }
    })






//点击跳转到immo详情页
$(".seccond").click(function(){
    location.href="./immo.html";
})







//鼠标经过跳转按钮颜色渐变动画
// 第一模块
$(".VideoContenerHref").hover(function(){
    $(".maskLine").stop().animate({"left":"0px"},400)},function(){
    $(".maskLine").stop().animate({"left":"-266px"},400);
})
//第二三四五六模块
$(".hrefHover").each(function(index,item){
    $(item).hover(function(){
        $(this).find(".hrefMove").stop().animate({"left":"0px"},400);
    },function(){
        $(this).find(".hrefMove").stop().animate({"left":"-370px"},400);
    })
})






//下拉按钮跳动动画
let SlideMove = ()=>{
    $(".videoContenerSlide").animate({"bottom":"8.5%"},100);
    $(".videoContenerSlide").animate({"bottom":"9%"},200);
    $(".videoContenerSlide").animate({"bottom":"8%"},300);
    $(".videoContenerSlide").animate({"bottom":"10%"},500);
}
SlideMove();
setInterval(function(){SlideMove();},1500)

//点击下拉按钮滚动动画
$(".videoContenerSlide").click(function(){
    let tagetH = $(".theSeccond").offset().top;
    $("html").animate({scrollTop:tagetH},400)
})






//滚轮事件触发动画
let slideDownTarget = [410,1070,1730,2390,3050];
let moveObj = [],moveObjMargin = [];
let moveTimes = [300,400,500,600,700.800,900,1000];
let moveLength = [30,40,50,60,70,80,90,100,110];

$(".scrollDown").each(function(index,item){
    moveObj.push([]);
    moveObjMargin.push([]);
})

//遍历需要添加动画的元素并获取初始margin-top值，设置触发动画之前的margin-top初始值
for(let i=0;i<slideDownTarget.length;i++){
    $(".moveObject").eq(i).children().each(function(index,item){
        let defaultMargin = parseInt((($(item).css("margin-top")).split('px'))[0]);
        moveObjMargin[i].push(defaultMargin);
        $(item).css({"margin-top":(moveLength[index]+defaultMargin)+"px","opacity":"0"});
        moveObj[i].push($(item));
    })
}

let start = window.scrollY; // 初始值
//监听滚轮事件
$(document).scroll(function(e){
    //判断滚动条向上滚动还是向下滚动
    let current = $(this).scrollTop();
    let first = $(".first").offset().top+110;
    let seccond = $(".seccond").offset().top+110;
    let third = $(".third").offset().top+110;

    if (current<=start) {
        // 向上滚,小于某个值使对应索引值的元素向下浮动
        if($(this).scrollTop()<=330){
            for(let j=0;j<moveObj.length;j++){
                for(let i=0;i<moveObj[j].length;i++){
                moveObj[j][i].stop().animate({"margin-top":(moveLength[i]+moveObjMargin[j][i])+"px","opacity":"0"},10);
                }
            }
            
            $(".thirdBackground").stop().animate({"left":"1400px"},500);
            $(".fourBackground").stop().animate({"left":"-1400px"},500);
            $(".fiveBackground").stop().animate({"left":"1400px"},500);
        }

    } else {
        // 向下滚,大于某个值使对应索引值的元素向上浮动
        if($(this).scrollTop()>=slideDownTarget[0]){
            $( moveObj[0]).each(function(index1,item1){
                $(item1).stop().animate({"margin-top":moveObjMargin[0][index1]+"px","opacity":"1"},moveTimes[index1]);
            })
        }
        if($(this).scrollTop()>=slideDownTarget[1]){
            $( moveObj[1]).each(function(index1,item1){
                $(item1).stop().animate({"margin-top":moveObjMargin[1][index1]+"px","opacity":"1"},moveTimes[index1]);
            })
        }
        if($(this).scrollTop()>=slideDownTarget[2]){
            $( moveObj[2]).each(function(index1,item1){
                $(item1).stop().animate({"margin-top":moveObjMargin[2][index1]+"px","opacity":"1"},moveTimes[index1]);
            })
        }
        if($(this).scrollTop()>=slideDownTarget[3]){
            $( moveObj[3]).each(function(index1,item1){
                $(item1).stop().animate({"margin-top":moveObjMargin[3][index1]+"px","opacity":"1"},moveTimes[index1]);
            })
        }
        if($(this).scrollTop()>=slideDownTarget[4]){
            $( moveObj[4]).each(function(index1,item1){
                $(item1).stop().animate({"margin-top":moveObjMargin[4][index1]+"px","opacity":"1"},moveTimes[index1]);
            })
        }

        //单独设置遮罩层左右移动动画
        if($(this).scrollTop()>=first){
            $(".thirdBackground").stop().animate({"left":"0px"},500);
        }
        if($(this).scrollTop()>=seccond){
            $(".fourBackground").stop().animate({"left":"0px"},500);
        }
        if($(this).scrollTop()>=third){
            $(".fiveBackground").stop().animate({"left":"0px"},500);
        }

    }
    start = current;
    
})







//广告区域的动画
//点击隐藏
$(".del").click(function(){
    $(".advertisementPic").stop().animate({"bottom":"130px","opacity":"0"},600);
    setTimeout(function(){
        $(".advertisementArear").stop().animate({"right":"-470px"},600);},600)
})

//自动显示
setTimeout(function(){
    $(".advertisementArear").stop().animate({"right":"0px"},600);},17000)

setTimeout(function(){
    $(".advertisementPic").stop().animate({"bottom":"24px","opacity":"1"},600);},17600)

//自动隐藏
setTimeout(function(){
    $(".advertisementArear").stop().animate({"right":"-470px"},600);},27600)

setTimeout(function(){
    $(".advertisementPic").stop().animate({"bottom":"130px","opacity":"0"},600);},27000)




});
