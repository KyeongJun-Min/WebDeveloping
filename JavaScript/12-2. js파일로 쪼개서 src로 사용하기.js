
// js코드를 colors.js 파일에 저장해놓고 어디든 편하게 가져다가 쓰고, 쉽게 일괄적으로 편집 가능하다.
// 한번 웹브라우저에 다운로드된 파일은(js파일은) 브라우저가 저장해놓고 파일을 계속 사용하기 때문에 서버에도 부하가 덜하다.
    var Links = {
    setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
    console.log(alist[i]);
    alist[i].style.color = color;
    i += 1;
}
}

}
    var Body = {
    setColor:function(color){
    document.querySelector('body').style.color = color;
},
    setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
}
}

    function nightDayHandler(self)
    {
        var target = document.querySelector('body');

        if(self.value === 'night')
    {
        self.value = 'day';
        Body.setBackgroundColor('black');
        Body.setColor('white');

        Links.setColor('yellow');
    }
        else if(self.value === 'day')
    {
        self.value = 'night';
        Body.setBackgroundColor('white');
        Body.setColor('black');

        Links.setColor('blue');
    }
    }
