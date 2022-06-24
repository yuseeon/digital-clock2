$(function(){

    // 시간 재생 - 매 1초마다 재생
        setInterval(function(){
    let d = new Date();
    let h = d.getHours(); // 시간
    let m = d.getMinutes(); // 분
    let s = d.getSeconds(); // 초
    
    // 0 ~ 9 까지는 앞에 0을 표시
    if(s < 10) {
        s = '0' + s;
    }
    
    if(m < 10) {
        m = '0' + m;
    }
    
    if(h < 10) {
        h = '0' + h;
    }
    
    // 오전/오후 표시

    if(h <= 12) {
        $('.ampm').html('am');
    } else {
        $('.ampm').html('pm');
    }

    if(s >= 50) {
            s = '<span style="color: #ff0000;">'+ s +'</span>'
        }
    
    // 시간 표시
    $('.hour').html(h);
    $('.min').html(m);
    $('.sec').html(s);
    }, 1000);
    
    
    })