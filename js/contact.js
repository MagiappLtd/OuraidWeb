function regist(){
    // 変数定義
    var apiurl = 'https://gvoofk06ed.execute-api.ap-northeast-1.amazonaws.com/Prod';
    // formタグの中身を取得
    var form = $('#myform');
    // formタグ内のvalue値を取得
    var formdata = form.serialize();

    // Ajax通信
    $.ajax({
        // Ajax定義
        type:'POST',
        url:apiurl,
        data:formdata,
        dataType:'json'
    }).done(function(data, textStatus, jqXHR){
         if(data.result == 1){
            // Lambdaからの返答が正常だった場合
            $('#msg').html('お問合せありがとうございました。');
        }else{
            // Lambdaからの返答がエラーだった場合
            console.log(data.result );
            $('#msg').html('エラーが発生しました。');
        }
    }).fail(function(jqXHR, textStatus, errorThrown){
        // Ajaxの通信に問題があった場合
        $('#msg').html('不明なエラーが発生しました。');
    })

}




//$(document).ready(function(){
//    
//    (function($) {
//        "use strict";
//
//    
//    jQuery.validator.addMethod('answercheck', function (value, element) {
//        return this.optional(element) || /^\bcat\b$/.test(value)
//    }, "type the correct answer -_-");
//
//    // validate contactForm form
//    $(function() {
//        $('#contactForm').validate({
//            rules: {
//                name: {
//                    required: true,
//                    minlength: 2
//                },
//                subject: {
//                    required: true,
//                    minlength: 4
//                },
//                number: {
//                    required: true,
//                    minlength: 5
//                },
//                email: {
//                    required: true,
//                    email: true
//                },
//                message: {
//                    required: true,
//                    minlength: 20
//                }
//            },
//            messages: {
//                name: {
//                    required: "come on, you have a name, don't you?",
//                    minlength: "your name must consist of at least 2 characters"
//                },
//                subject: {
//                    required: "come on, you have a subject, don't you?",
//                    minlength: "your subject must consist of at least 4 characters"
//                },
//                number: {
//                    required: "come on, you have a number, don't you?",
//                    minlength: "your Number must consist of at least 5 characters"
//                },
//                email: {
//                    required: "no email, no message"
//                },
//                message: {
//                    required: "um...yea, you have to write something to send this form.",
//                    minlength: "thats all? really?"
//                }
//            },
//            submitHandler: function(form) {
//                $(form).ajaxSubmit({
//                    type:"POST",
//                    data: $(form).serialize(),
//                    url:"contact_process.php",
//                    success: function() {
//                        $('#contactForm :input').attr('disabled', 'disabled');
//                        $('#contactForm').fadeTo( "slow", 1, function() {
//                            $(this).find(':input').attr('disabled', 'disabled');
//                            $(this).find('label').css('cursor','default');
//                            $('#success').fadeIn()
//                            $('.modal').modal('hide');
//		                	$('#success').modal('show');
//                        })
//                    },
//                    error: function() {
//                        $('#contactForm').fadeTo( "slow", 1, function() {
//                            $('#error').fadeIn()
//                            $('.modal').modal('hide');
//		                	$('#error').modal('show');
//                        })
//                    }
//                })
//            }
//        })
//    })
//        
// })(jQuery)
//})