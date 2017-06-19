//Скрипты для хидера
$(document).ready(function(){

    var $btnMainMenu    = $(".burger-xs"),
        $background     = $('html'),
        $dropMenu       = $("#dropd-main-menu"),
        $burgerMiddle   = $('.burger-xs span:nth-child(2)');

    //Замена бургера на иконку закрытия
    $btnMainMenu.on('click', function(){
        var $this = $(this);

        if ($this.hasClass('open')){
            $background.removeClass('menu-opened');
            $this.removeClass('open');
            $dropMenu.removeClass('open');
            $dropMenu.addClass('cubic');
            $burgerMiddle.show(100, function(){});
        } else {
            $burgerMiddle.hide(50, function(){});
            $dropMenu.addClass('open');
            $this.addClass('open');
            $dropMenu.removeClass('cubic');
            $background.addClass('menu-opened');
        }   
    });
});