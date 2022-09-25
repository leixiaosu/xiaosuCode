$(function(){
    //页面加载完成时的动画(第一块区域)
    $(".theFirstBannerTitle").stop().animate({"margin-top":"0px","opacity":"1"},800);
    $(".theFirstBannerP").stop().animate({"margin-top":"0px","opacity":"1"},900);
    $(".theFirstBannerHref").stop().animate({"margin-top":"0px","opacity":"1"},1000);
    setTimeout(function(){$(".theFirstBannerImg").stop().animate({"opacity":"1"},800);},1000)


    //监听滚轮事件
    let nav = $(".navContener");
    let blueLine = $(".theFourBannerLeftHref").offset().top-54;
    let whiteLine = $(".theSixBannerImmoBottomHrefLeft").offset().top-100;
    let startAnimate = $(".theFirstBannerHref").offset().top;
    let temp = true,isShow = true;
    let hudle = $(".hudle");
    let slideImgTop = $(".slideImgTop");

    //获取监听滚轮数值
    //第二模块
    let second = $(".theFirstBannerP").offset().top;
    //第三模块
    let there = $(".theSecondBannerImmoHref").offset().top;
    //第四模块
    let four = $(".theThirdRightP").offset().top;

    $(document).scroll(function(){
        let TheTop = $(this).scrollTop();
        let bigMask = $(".bigMask");
        let bigMaskCicrl = $(".bigMaskCicrl");
        //监听滚轮控制导航栏区域的位置
        (TheTop>=70)?nav.css("position","fixed"):nav.css("position","static");
        //第二块区域动画效果
        if(TheTop>=second){
            $(".theSecondBannerImmoTitle").stop().animate({"margin-top":"0px","opacity":"1"},600);
            $(".theSecondBannerImmoHref").stop().animate({"margin-top":"0px","opacity":"1"},900);
            setTimeout(function(){$(".theSecondBannerImmoP").stop().animate({"margin-left":"0px","opacity":"1"},800)},1000)
            setTimeout(function(){$(".theSecondBannerImmoRight").stop().animate({"margin-right":"0px","opacity":"1"},400)},700)
        }
        //第三块区域动画效果
        if(TheTop>=there){
            $(".theThirdRightContent").stop().animate({"opacity":"1"},600);
            setTimeout(function(){
                $(".theThirdRightH2").stop().animate({"margin-top":"0px","opacity":"1"},600);
                $(".theThirdRightP").stop().animate({"margin-top":"0px","opacity":"1"},900);
            },600)
            setTimeout(function(){
                $(".theThirdLeft").stop().animate({"margin-left":"0px","opacity":"1"},1000)
            },1500)
        }
        if(TheTop<800){
            $(".theThirdRightContent").stop().animate({"opacity":"0"},10);
            $(".theThirdRightH2").stop().animate({"margin-top":"60px","opacity":"0"},10);
            $(".theThirdRightP").stop().animate({"margin-top":"60px","opacity":"0"},10);
            $(".theThirdLeft").stop().animate({"margin-left":"-60px","opacity":"0"},10);
        }
        //第四块区域动画效果
        if(TheTop>=four){
            $(".theFourBannerLeftH2").stop().animate({"margin-top":"0px","opacity":"1"},600);
            $(".theFourBannerLeftP").stop().animate({"margin-top":"0px","opacity":"1"},800);
            $(".theFourBannerLeftHref").stop().animate({"margin-top":"0px","opacity":"1"},900);
            setTimeout(function(){$(".theFourBannerRight").stop().animate({"margin-right":"0px","opacity":"1"},1000)},1000)
        }if(TheTop<1200){
            $(".theFourBannerLeftH2").stop().animate({"margin-top":"60px","opacity":"0"},10);
            $(".theFourBannerLeftP").stop().animate({"margin-top":"60px","opacity":"0"},10);
            $(".theFourBannerLeftHref").stop().animate({"margin-top":"60px","opacity":"0"},10);
            $(".theFourBannerRight").stop().animate({"margin-right":"-60px","opacity":"0"},10);
        }
        //遮罩层边框线颜色样式和房源列表遮罩层的动画效果
        if(TheTop>=blueLine && TheTop<=whiteLine){
            $(".maskList").css("border-color","#d0eaea");
            if(isShow){
                isShow = false;
                bigMask.css("display","flex");
                bigMaskCicrl.animate({"width":"50px","height":"50px","opacity":"0"},800);
                bigMaskCicrl.animate({"width":"0px","height":"0px","opacity":"1"},10);
                bigMaskCicrl.animate({"width":"50px","height":"50px","opacity":"0"},800);
                bigMaskCicrl.animate({"width":"0px","height":"0px","opacity":"1"},10);
                bigMaskCicrl.animate({"width":"50px","height":"50px","opacity":"0"},800);
                bigMaskCicrl.animate({"width":"0px","height":"0px","opacity":"1"},10);
                bigMaskCicrl.animate({"width":"50px","height":"50px","opacity":"0"},800);
                bigMaskCicrl.animate({"width":"0px","height":"0px","opacity":"1"},10);
                bigMaskCicrl.animate({"width":"50px","height":"50px","opacity":"0"},800);
                bigMaskCicrl.css({"width":"0px","height":"0px","opacity":"1"},10);
                setTimeout(function(){
                    bigMask.css("display","none");
                },4000)
            }
        }else $(".maskList").css("border-color","#fff");
        // 监听滚轮控制门把手自动滑动动画
        if(temp && TheTop>=startAnimate){
            temp = false;
            hudle.stop().animate({"left":"35%"},600);
            slideImgTop.stop().animate({"width":"35%"},600);
            setTimeout(()=>{
                hudle.stop().animate({"left":"80%"},600);
                slideImgTop.stop().animate({"width":"80%"},600);
            },600)
            setTimeout(()=>{
                hudle.stop().animate({"left":"45%"},600);
                slideImgTop.stop().animate({"width":"45%"},600);
            },1200)
        }
        if(TheTop==0){
            hudle.css("left","45%");
            slideImgTop.css("width","45%");
            temp = true;

            $(".theSecondBannerImmoTitle").stop().animate({"margin-top":"60px","opacity":"0"},10);
            $(".theSecondBannerImmoP").stop().animate({"margin-left":"-60px","opacity":"0"},10);
            $(".theSecondBannerImmoHref").stop().animate({"margin-top":"60px","opacity":"0"},10);
            $(".theSecondBannerImmoRight").stop().animate({"margin-right":"-60px","opacity":"0"},10);
        }
    })








    // 菜单模块的显示与隐藏
    let flag = true;
    let times = [1000,900,700,500,400];
    $(".menuBtn").click(function(){
        if(flag){
            $(".mainHeader").css("background-color","transparent");
            $(".menuArea").stop().slideDown(300);

            $("#munuTop").stop().animate({"top":"8px"},400).siblings("#munuBottom").stop().animate({"top":"8px"},400,function(){$("#munuTop").css("display","none").siblings("#munuMiddlw").css("transform","rotate(45deg)").siblings("#munuBottom").css("transform","rotate(-45deg)")});
            $(".menuAreaTrangle1").stop().animate({"left":"12%"},900);
            $(".menuAreaTrangle2").stop().animate({"left":"30.1%"},1000);
            $(".menuAreaTrangle3").stop().animate({"left":"40%"},600);
            $(".menuAreaTrangle4").stop().animate({"left":"26%"},800);
            $(".menuAreaTrangle5").stop().animate({"left":"48%"},400);

            setTimeout(function(){
                $(".menuContent").each(function(index,item){
                    $(item).css("display","block").stop().slideDown(times[index]);
                    $(item).animate({"opacity":"1"},times[index])})
            },600);

            setTimeout(function(){
                $(".whiteCicle").each(function(index,item){
                $(item).stop().slideDown(times[index]+100);})
            },800)

            flag = false;
        }else{
            $("#munuMiddlw").css("transform","rotate(0deg)").siblings("#munuBottom").css("transform","rotate(0deg)").siblings("#munuTop").css("display","block");
            $("#munuTop").stop().animate({"top":"2px"},400).siblings("#munuBottom").stop().animate({"top":"14px"},400);

            $(".menuAreaTrangle1").stop().animate({"left":"-120px"},900);
            $(".menuAreaTrangle2").stop().animate({"left":"-120px"},1000);
            $(".menuAreaTrangle3").stop().animate({"left":"-120px"},600);
            $(".menuAreaTrangle4").stop().animate({"left":"-120px"},800);
            $(".menuAreaTrangle5").stop().animate({"left":"-120px"},400);

            $(".menuContent").each(function(index,item){
                $(item).stop().slideUp(times[index]).animate({"opacity":"0"},times[index])
            })

            $(".whiteCicle").css("display","none");

            setTimeout(function(){
                $(".menuArea").stop().slideUp(300);
                $(".mainHeader").css("background-color","#383543");
            },900)
            flag = true;
        }
    })






    //跳转模块的鼠标移入移除动画效果
    $(".immoHrefCommon").each(function(index,item){
        $(this).hover(function(){$(this).find(".maskLine").stop().animate({"left":"0px"},400)},function(){$(this).find(".maskLine").stop().animate({"left":"-380px"},400)})
    })

    $(".theFirstBannerHref").hover(function(){$(".firstMask").stop().animate({"left":"0px"},400)},function(){$(".firstMask").stop().animate({"left":"-294px"},400)})






    //点击跳转到首页
    $("#backMain").click(function(){
        location.href="./index.html";
    })






    //拖拽门把手功能
    //获取图片盒子距离窗口左边的距离
    // let picDistance = $(".theSecondBannerImmoRight").offset().left;
    // //获取图片盒子的总宽度，以计算门把手移动的百分比
    // let picWidth = $(".theSecondBannerImmoRight").width(),isMove,move;
    // $(".hudle").mousedown(function(e){
    //     console.log("down")
    //     isMove = true;
    //     $(this).mouseup(function(e1){
    //         console.log("up")
    //         isMove = false;
    //     })
    //     if(isMove){
    //     $(this).mousemove(function(event){
    //         //计算move+边界控制
    //         let cursorMove = (event.pageX-picDistance)/picWidth*100;
    //         cursorMove<=0 && (move=0+"%");
    //         cursorMove>=97.3 && (move=97.3+"%");
    //         (cursorMove>0&&cursorMove<97.3) && (move = cursorMove+"%");
    //         // console.log("move")

    //         isMove && $(this).css("left",move).siblings(".slideImgTop").css("width",move);
    //     })}
    // })
    // $(document).mouseup(()=>{
    //     isMove = false;
    // })

    //拖拽门把手功能
    //获取图片盒子距离窗口左边的距离
    let picDistance = $(".theSecondBannerImmoRight").offset().left;
    //获取图片盒子的总宽度，以计算门把手移动的百分比
    let picWidth = $(".theSecondBannerImmoRight").width(),isMove,move;
    $(".hudle").mousedown(function(e){
        isMove = true;
    })
    $(".hudle").mouseup(function(e1){
        isMove = false;
    })
    $(".hudle").mousemove(function(event){
        //计算move+边界控制
        let cursorMove = (event.pageX-picDistance)/picWidth*100;
        cursorMove<=0 && (move=0+"%");
        cursorMove>=97.3 && (move=97.3+"%");
        (cursorMove>0&&cursorMove<97.3) && (move = cursorMove+"%");

        isMove && $(this).css("left",move).siblings(".slideImgTop").css("width",move);
    })
    $(".hudle").mouseleave(function(){
        isMove = false;
    })
    $(document).mouseup(()=>{
        isMove = false;
    })
       





    //房源清单的数据渲染
    $.ajax({
        type:"get",
        url:"js/houseList.json",
        timeout:5000,
        success:(response)=>{
            let transitionBox = $(".transitionBox");
            $.each(response,(index,item)=>{
                $(`<div class="houseLists"><div class="houseImg"><img src=`+item.houseUrl+` alt=""></div><span class="houseName">`+item.houseName+`</span></div>`).appendTo($(".houseListBanner"));
            })

            //切换房源列表信息时动画
            // 动画函数
            let houseListAnim = (the,index)=>{
                $(the).css("border-color","#1eced1").siblings().css("border-color","transparent");
                //自动滚动顶部
                $(".houseListBanner").stop().animate({scrollTop:$(the)[0].offsetTop},300);transitionBox.animate({"width":"0px","height":"0px","opacity":"1"},10);
                transitionBox.animate({"width":"50px","height":"50px","opacity":"0"},800);
                transitionBox.animate({"width":"0px","height":"0px","opacity":"1"},10);
                transitionBox.animate({"width":"50px","height":"50px","opacity":"0"},800);
                transitionBox.animate({"width":"0px","height":"0px","opacity":"1"},10);
                transitionBox.animate({"width":"50px","height":"50px","opacity":"0"},800);
                transitionBox.animate({"width":"0px","height":"0px","opacity":"1"},10);
                setTimeout(function(){
                    $(".theSixBannerImmoTopSituationImg>img").attr("src",response[index].houseUrl); 
                },2400)
            }

            //概览图标点击事件
            $(".overViewImg .iconfont").click(function(){
                let i = $(this).index()-1;
                houseListAnim($(".houseLists:eq("+i+")"),i);
            })

            //房源点击事件
            $(".houseLists").click(function(){
                let index = $(this).index(),isChange = true;
                if(index==0){
                    houseListAnim(this,index);
                    setTimeout(function(){
                        $(".sofa").stop().animate({"opacity":"1"},400);
                        $(".kitchen").stop().animate({"opacity":"1"},400);
                    },2400)
                    isChange = false;
                }else {
                    if(isChange){
                    $(".sofa").stop().animate({"opacity":"0"},400);
                    $(".kitchen").stop().animate({"opacity":"0"},400);
                    }
                }
                if(index == 2){
                    houseListAnim(this,index);
                    setTimeout(function(){
                        $(".kitchenDetial").stop().animate({"opacity":"1"},400);        
                    },2400)
                    isChange = false;
                }else{
                    $(".kitchenDetial").stop().animate({"opacity":"0"},400);
                }
                if(index==3){
                    houseListAnim(this,index);
                    setTimeout(function(){
                        $(".backHome").stop().animate({"opacity":"1"},400);
                        $(".foot").stop().animate({"opacity":"1"},400);},2400)
                    isChange = false;
                }else{
                    $(".backHome").stop().animate({"opacity":"0"},400);
                    $(".foot").stop().animate({"opacity":"0"},400);
                }
                if(index==8){
                    houseListAnim(this,index);
                    setTimeout(function(){
                        $(".batheLeft").stop().animate({"opacity":"1"},400);
                        $(".batheRight").stop().animate({"opacity":"1"},400);},2400)
                    isChange = false;
                }else{
                    $(".batheLeft").stop().animate({"opacity":"0"},400);
                    $(".batheRight").stop().animate({"opacity":"0"},400);
                }
                isChange&&houseListAnim(this,index);
            })

            //小功能按钮的点击事件
            $(".sofa").click(function(){
                houseListAnim(".houseLists:eq(2)",2);
                $(".sofa").stop().animate({"opacity":"0"},400);
                $(".kitchen").stop().animate({"opacity":"0"},400);
                setTimeout(function(){
                    $(".kitchenDetial").stop().animate({"opacity":"1"},400);        
                },2400)
            })
            $(".kitchen").click(function(){
                houseListAnim(".houseLists:eq(1)",1);
                $(".sofa").stop().animate({"opacity":"0"},400);
                $(".kitchen").stop().animate({"opacity":"0"},400);
            })
            $('.kitchenDetial').click(function(){
                houseListAnim(".houseLists:eq(1)",1);
                $(".kitchenDetial").stop().animate({"opacity":"0"},400);
            })
            $(".backHome").click(function(){
                houseListAnim(".houseLists:eq(2)",2);
                $(".backHome").stop().animate({"opacity":"0"},400);
                $(".foot").stop().animate({"opacity":"0"},400);
                setTimeout(function(){
                    $(".kitchenDetial").stop().animate({"opacity":"1"},400);        
                },2400)
            })
            $(".foot").click(function(){
                houseListAnim(".houseLists:eq(8)",8);
                $(".backHome").stop().animate({"opacity":"0"},400);
                $(".foot").stop().animate({"opacity":"0"},400);
                setTimeout(function(){
                    $(".batheLeft").stop().animate({"opacity":"1"},400);
                    $(".batheRight").stop().animate({"opacity":"1"},400);},2400)
            })
            $(".batheLeft").click(function(){
                houseListAnim(".houseLists:eq(12)",12);
                $(".batheLeft").stop().animate({"opacity":"0"},400);
                $(".batheRight").stop().animate({"opacity":"0"},400);
            })
            $(".batheRight").click(function(){
                houseListAnim(".houseLists:eq(11)",11);
                $(".batheLeft").stop().animate({"opacity":"0"},400);
                $(".batheRight").stop().animate({"opacity":"0"},400);
            })
                },
                error:(e)=>{
                    alert(e);
                }
            })




    //房源信息模块动画
    //点击房源左右按钮显示和隐藏房源信息 
    let k = true,k1=false;
    //左
    $(".houseListSlideBtn").click(function(){
        if(k){
            $(this).stop().animate({"left":"0px"},400).find(".iconfont").html("&#xe62e;");
            $(".houseListBanner").stop().animate({"left":"-192px"},400);
            k = false;
        }else{
            $(this).stop().animate({"left":"192px"},400).find(".iconfont").html("&#xe729;");
            $(".houseListBanner").stop().animate({"left":"0px"},400);
            k = true;
        }
    })
    // 菜单区域隐藏函数
    let menuHidde = (the,that)=>{
       $(the).stop().animate({"right":"0px"},400).find(".iconfont").html("&#xe62e;");
        $(that).stop().animate({"right":"-94px"},400);
    }
    // 菜单区域显示函数
    let menuShow = (the,that)=>{
        $(the).stop().animate({"right":"94px"},400).find(".iconfont").html("&#xe729;");
        $(that).stop().animate({"right":"0px"},400);
    }
    //右
    $(".houseMenuSlideBtn").click(function(){
        if(k1){
            menuHidde(this,".houseMenu");
            k1 = false;
        }else{
            menuShow(this,".houseMenu");
            //     setTimeout(function(){
            // $(".houseMenuSlideBtn").hover(function(){
            //         $(this).css("right","94px").find(".iconfont").html("&#xe729;");
            //         $(".houseMenu").css("right","0px");
            // },function(){
            //     menuHidde(this,".houseMenu");
            // })
            //     },400)
            //     setTimeout(function(){
            // $(".houseMenu").hover(function(){
            //             $(".houseMenuSlideBtn").css("right","94px").find(".iconfont").html("&#xe729;");
            //             $(this).css("right","0px");
            // },function(){
            //     menuHidde(".houseMenuSlideBtn",this);
            // })
            //     },400)
            k1 = true;
        }
    })

    //菜单按钮区域的点击事件
    let a1 = true,a2 = true,a3 = true,a4 = true;
    $("#menu1").click(function(){
        if(a1){
            $(this).css({"background-color":"#545454","color":"#24c1c5"});
            a1=false;
        }else{
            $(this).css({"background-color":"#878787","color":"#f9f9f9"});
            a1=true;
        }
    })
    $("#menu2").click(function(){
        if(a2){
            $(this).css("background-color","#545454");
            $(".theSixBannerImmoTopSituationImg").css("display","none");
            $(".overView").css("display","none");
            a2=false;
        }else{
            $(this).css("background-color","#878787");
            $(".theSixBannerImmoTopSituationImg").css("display","block");
            $(".overView").css("display","block");
            a2=true;
        }
    })
    $("#menu3").click(function(){
        if(a3){
            $(this).css({"background-color":"#545454","color":"#24c1c5"});
            $(".overView").stop().animate({"top":"0px"},400).css("overflow","hidden");
            $(".overViewMask").stop().animate({"bottom":"0px"},400).find(".iconfont").html("&#xe652;");
            a3=false;
        }else{
            $(this).css({"background-color":"#878787","color":"#f9f9f9"});
            $(".overView").stop().animate({"top":"-384px"},400).css("overflow","hidden");
            $(".overViewMask").stop().animate({"bottom":"0px"},400).find(".iconfont").html("&#xe652;");
            a3=true;
        }
    })
    $("#menu4").click(function(){
        if(a4){
            $(this).css({"background-color":"#545454","color":"red"}).html("&#xe85c;");
            a4=false;
        }else{
            $(this).css({"background-color":"#878787","color":"#f9f9f9"}).html("&#xe623;");
            a4=true;
        }
    })
    $("#menu5").click(function(){
        $(".forward").css("display","block");
    })
    $("#deleteForward1").click(function(){
        $(".forward").css("display","none");
    })
    $(".forwardMask").click(function(){
        $(".forward").css("display","none");
    })
    $("#menu6").click(function(){
        $(".more").css("display","block");
    })
    $("#deleteForward2").click(function(){
        $(".more").css("display","none");
    })
    $(".moredMask").click(function(){
        $(".more").css("display","none");
    })

    // 滑动滚轮图片放大缩小
    let scaleNum = 1;
    let scaleImg = $(".theSixBannerImmoTopSituationImg>img");
    let goBtn = $(".goBtn"),btnScale = 1;
    let theWheel = (selector)=>{
        $(selector).on({mousewheel:function(event){
            let wheelData = event.originalEvent.wheelDeltaY;
            event.preventDefault();
            if(wheelData>0){
                scaleNum>3.52?scaleNum = 3.52:scaleNum+=Math.abs(wheelData)/1000;
                btnScale<=0.64?btnScale = 0.64:btnScale-=0.06;
                scaleImg.css("transform","scale("+scaleNum+")");
                goBtn.css("transform","scale("+btnScale+")")

            }else{
                scaleNum>1.12?scaleNum-=Math.abs(wheelData)/1000:scaleNum = 1;
                btnScale>=1?btnScale = 1:btnScale+=0.06;
                scaleImg.css("transform","scale("+scaleNum+")");
                goBtn.css("transform","scale("+btnScale+")")
            }
        }})
    }
    theWheel(".theSixBannerImmoTopSituationImg");
    theWheel(".overViewImg");

    goBtn.hover(function(){$(this).css("transform","scale("+(btnScale+0.06)+")")},function(){$(this).css("transform","scale("+(btnScale-0.06)+")")});

    //转发模块图标的样式渲染
    let forweadColor = ["#314a7e","#339dc3","#34abdf","#25d366","#7f4da0","#005983","#2c4762","#f2780c","#ef4056"];
    $.each(forweadColor,function(index,item){
        $(".forwardIcon>.iconfont:eq("+index+")").css("background-color",item);
    })
    $("#longHref").text(`<iframe src="https://viewwer.com/tours/8ll-JTUhh" width="100%" height="100%" frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`);

    //概览木块动画效果
    let isRotat = true;
    $(".overViewImg").hover(function(){
        isRotat&&$(".overViewMask").stop().animate({"bottom":"0px"},400);
    },function(){
        isRotat&&$(".overViewMask").stop().animate({"bottom":"-30px"},400);
    })
    $(".overViewMask").hover(function(){
        isRotat&&$(this).stop().animate({"bottom":"0px"},400);
    },function(){
        isRotat&&$(this).stop().animate({"bottom":"-30px"},400);
    })
    $(".overViewMask").click(function(){
        if(isRotat){
            $(this).stop().animate({"bottom":"-30px"},300).find(".iconfont").html("&#xe651;");
            setTimeout(function(){$(".overView").stop().animate({"top":"-384px"},400).css("overflow","visible")},300)
            isRotat=false;
        }else{
            $(this).stop().animate({"bottom":"0px"},300).find(".iconfont").html("&#xe652;");
            setTimeout(function(){$(".overView").stop().animate({"top":"0px"},400).css("overflow","hidden")},300)
            isRotat=true;
        }
    })

    //概览图标的位置渲染
    let posArr = [{
        top:"296px",
        left:"180px"
    },{
        top:"302px",
        left:"250px"
    },{
        top:"220px",
        left:"214px"
    },{
        top:"132px",
        left:"284px"
    },{
        top:"54px",
        left:"370px"
    },{
        
        top:"202px",
        left:"140px"
    },{
        top:"300px",
        left:"70px"
    },{
        top:"224px",
        left:"80px"
    },{
        top:"90px",
        left:"162px"
    },{
        top:"114px",
        left:"74px"
    },{
        top:"44px",
        left:"106px"
    },{
        top:"46px",
        left:"226px"
    },{
        top:"30px",
        left:"164px"
    }];
    let overViewImg = $(".overViewImg");
    $.each(posArr,(index,item)=>{
        $(`<span class="iconfont" id="nav1">&#xe712;</span>`).css({"top":item.top,"left":item.left}).appendTo(overViewImg)
    })
})