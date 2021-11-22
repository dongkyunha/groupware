/*
    게시판 생성 insert
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//코드 정의
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//상수
var today = new Date();
var Target = document.getElementById("clock");
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//시작 부분
//--------------------------------------------------------------------------------------------------------------------------------------------------------
let init = function(){
    main.init();
    main.bind();
}

let main = (function(){
    return {
        init : function(){
            console.log("자바스크립트 바인딩 테스트");

            Event.click();
        },
        bind: function () {
            bind.boardMasterBind();
        }
    }
}());

//--------------------------------------------------------------------------------------------------------------------------------------------------------
//바인딩 함수 정의 부분
//--------------------------------------------------------------------------------------------------------------------------------------------------------
let bind = (function () {
    return {
        boardMasterBind: function () {
            //화면에 표시 or 생성하는 경우
            var boardList = jQuery('#boardList tbody');


        }
    }
}());

let Event = (function () {
    return {
        click : function(){
            //UI 이벤트 처리
            jQuery('#choiceSize').off('change').on('change', function (){
                var size = jQuery('#choiceSize option:selected').val();
                location.href = '?page='+ '1' + '&size=' + size;
                // console.log(size);
            });

            jQuery('#home').off('click').on('click', function (){
                console.log(location.href);
                location.href = '/login/home';
            });
        }
    }
}());

jQuery(document).ready(function(){
    console.log("인잇");
    init();
});