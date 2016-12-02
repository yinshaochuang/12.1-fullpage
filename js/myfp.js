$(function(){
    $('#fullpage').fullpage({
        anchors: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5','Page6','Page7','Page8','Page9','Page10','Page11'],
        menu: '#Menu',
        navigation: true,
        navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验'],
        afterLoad:function(Page,index){
            var index = index-1;
            if(index==0){
                setTimeout(function(){
                    $(".section").eq(index).find(".bottom-img").css({
                        animation:"first 1s ease forwards "
                    })
                },0)
            } else{
                $(".section").eq(index).find(".bottom-img").css({
                    animation:"first 1s ease forwards"
                })
            }
        },
        onLeave:function(index,Page,direction){
            var index = index-1;
            $(".section").eq(index).find(".bottom-img").css({
                animation:"first1 .5s ease forwards"
            })
        }
    });
})