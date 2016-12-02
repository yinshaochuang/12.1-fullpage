$(function(){
    //touch事件
    $("#fullpage").mousedown(function(e){
        e.preventDefault();
    })
    $("#fullpage").mousemove(function(e){
        e.preventDefault();
    })
    var ch=$(window).height();
    var cw=$(window).width();
    //向上滑动
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function(e){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }

        $("#fullpage").css({
            transition:"margin-top 1s ease",
            marginTop: -(ch*num)+"px"

        })
        flag=false;
    })
    touch.on("body","swipedown","#fullpage",function(e){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        flag=false;
        $("#fullpage").css({
            marginTop:(-num*ch)+"px"
        })

    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
        $("section").each(function(index,obj){
           if(index==num){
               $(obj).find(".lingxianbox").css({
                   transform:"translate(0,0)",
                   opacity:1
               })
               $(obj).find(".login").css({
                   transform:"translate(0,0)",
                   opacity:1
               })
               $(obj).find(".chuan").css({
                   transform:"translate(0,0)",
                   opacity:1
               })
           }else {
               $(obj).find(".lingxianbox").css({
                   transform:"translate(-50px,0)",
                   opacity:0
               })
               $(obj).find(".login").css({
                   transform:"translate(50px,0)",
                   opacity:0
               })
               $(obj).find(".chuan").css({
                   transform:"translate(-50px,0)",
                   opacity:0
               })
           }
        })
    })



    //小屏时点击menu-option
    var flag1=true;
    $(".menu-option").click(function(){
        if(flag1){
            $(".menu-option-tline").css({
                transform:"rotate(45deg) translate(0,7px)"
            })
            $(".menu-option-bline").css({
                transform:"rotate(-45deg) translate(0,-7px)"
            })

            //$(".scene").css({
            //    animation:"xiaoshi1 .3s linear forwards"
            //})
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:0,
                    animation:"menu .4s ease forwards "+0.2*index+"s",
                    display:"block"
                })
            })
            flag1=false;
        }else{
            $(".menu-option-tline").css({
                transform:"none"
            })
            $(".menu-option-bline").css({
                transform:"none"
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:1,
                    animation:"menu1 .4s linear forwards "+(1.4-0.2*index)+"s"
                })
            })
            //$(".scene").css({
            //    animation:"xiaoshi 2s linear forwards  2s"
            //})
            flag1=true;
        }
    })


    //监测浏览器变化

    $(window).resize(function(){
        ch=$(window).height();
        cw=$(window).width();
        $("#fullpage").css({
            marginTop:(-num*ch)+"px"
        })
        if(cw>1000){
            $(".menu a").css({
                animation:"none",
                opacity:0
            })
            $(".menu-option-tline,.menu-option-bline").css({
                transform:"rotate(0deg) translate(0,0px)"
            })
            flag1=true;
        }
    })

})