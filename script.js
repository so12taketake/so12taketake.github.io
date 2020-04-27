$(function(){

    $('.question-list').click(function(){
        var $answer = $(this).find('.answer')
        if($answer.hasClass('open')){
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('span').html('+')

        }else{
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('span').html('ー')
        }
    });


});