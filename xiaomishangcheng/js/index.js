window.onload = function () {
    function rightBor(Sli,Sul,P) {
        var len = Sli.length;
        console.log(Sli);
        console.log(Sul);
        console.log(P);
        for (var i=0;i<len;i++){
            Sli[i].index = i;
            console.log(i);
            Sli[i].onmousemove = function () {
                var z = this.index;
                var j = z*2;
                var k = z*2+1;
                console.log(j,k);
                Sul[j].style.display = 'none';
                Sul[k].style.display = 'block';
                P[z].style.color = '#ff6700';
            }
            Sli[i].onmouseout = function () {
                var z = this.index;
                var j = z*2;
                var k = z*2+1;
                Sul[j].style.display = 'block';
                Sul[k].style.display = 'none';
                P[z].style.color = '#757575';
            }
        }
    }rightBor(document.querySelectorAll('.rightbor ul li'),document.querySelectorAll('.rightbor ul li a div img'),document.querySelectorAll('.rightbor ul li a p'));
/*=====================================*/
    var shopPing = document.querySelector('.right-navbar');
    var sPcrad = document.querySelector('.shopping');
    var sss = shopPing.childNodes[1];
    //console.log(sPcrad);
    //console.log(sss);
    shopPing.childNodes[1].onmouseenter = function () {
        sPcrad.style.height = '100px';
        shopPing.childNodes[1].style.color = '#ff6700';
        shopPing.childNodes[1].style.backgroundColor = '#fff';
        sPcrad.onmousemove = function () {
            sPcrad.style.height = '100px';
            shopPing.childNodes[1].style.color = '#ff6700';
            shopPing.childNodes[1].style.backgroundColor = '#fff';
        }
    };
    shopPing.childNodes[1].onmouseleave = function () {
        sPcrad.style.height = '0px';
        shopPing.childNodes[1].style.color = '#b0b0b0';
        shopPing.childNodes[1].style.backgroundColor = '#424242';
        sPcrad.onmouseout = function () {
            sPcrad.style.height = '0px';
            shopPing.childNodes[1].style.color = '#b0b0b0';
            shopPing.childNodes[1].style.backgroundColor = '#424242';
        }
    };
/*=====================================================================*/
    var banForm = document.querySelector('.banner .banner-navbar form input');
    //console.log(banForm);
    var drDown = document.querySelector('.drop-down');
    var banA = document.querySelectorAll('.banner-navbar form a');
    var banB = document.querySelector('.banner-navbar form button');
    //console.log(banA[1]);
    banForm.onclick = function () {
        drDown.style.display = 'block';
        banForm.style.border = '1px solid #ff6700';
        banA[0].style.display = 'none';
        banA[1].style.display = 'none';
        banB.style.border = '1px solid #ff6700';
    };
    banForm.onblur = function () {
        drDown.style.display = 'none';
        banForm.style.border = '1px solid #ccc';
        banA[0].style.display = 'block';
        banA[1].style.display = 'block';
        banB.style.border = '1px solid #ccc';
    };
    /*===================================================*/
    var hunt = document.querySelector('.hunt');
    var oneLi = document.querySelectorAll('.search-box li a');
    var oneUl = document.querySelectorAll('.hunt ul');
    // console.log(oneUl[1]);
    function f() {
        var i = 0;
        var len = oneLi.length;
        var leng = oneUl.length;
        for (i;i<len;i++) {
            if (i >= 2 && i<10){
                oneLi[i].index = i;
                oneLi[i].onmouseover = function () {
                    for (var j = 0; j < leng; j++) {
                        oneUl[j].style.display = 'none';
                    }
                    oneUl[this.index-2].style.display = 'block';
                    // console.log(oneLi[i]);
                };
                oneLi[i].onmouseenter = function () {
                    //console.log(oneLi[this.index]);
                    hunt.style.border = '1px solid #ccc';
                    hunt.style.boxShadow = '-5px 3px 10px rgba(0,0,0,0.15)';
                    hunt.style.height = '220px';
                    function e(){
                        hunt.style.border = '1px solid #ccc';
                        hunt.style.boxShadow = '-5px 3px 10px rgba(0,0,0,0.15)';
                        hunt.style.height = '220px';
                    }
                    hunt.addEventListener('mousemove',e);
                };
                oneLi[i].onmouseout = function () {
                    hunt.style.border = 'none';
                    hunt.style.boxShadow = 'none';
                    hunt.style.height = '0px';
                    function e(){
                        hunt.style.border = 'none';
                        hunt.style.boxShadow = 'none';
                        hunt.style.height = '0px';
                    }
                    hunt.addEventListener('mouseout',e);
                };
            }
        }
    }f();
    /*====================================================================*/
    var cast = document.querySelector('.cast-right');
    var towLi = document.querySelectorAll('.left-nav ul li');
    var twoUl = document.querySelectorAll('.cast-right .cast-one');
    var sUl = document.querySelector('.left-nav');
    console.log(cast);
    // console.log(towLi);
    // console.log(twoUl);
    // console.log(1);
    function f1() {
        var i = 0;
        var len = towLi.length;
        // console.log(leng);
        for (i;i<len;i++) {
            towLi[i].index = i;
            towLi[i].onmouseover = function () {
                for (var j = 0; j < len; j++) {
                    twoUl[j].style.display = 'none';
                }
                twoUl[this.index].style.display = 'block';
            };
        }
        sUl.onmousemove = function () {
            cast.style.display = 'block';
            function e(){
                cast.style.display = 'block';
            }
            cast.addEventListener('mousemove',e);
        };
        sUl.onmouseout = function () {
            cast.style.display = 'none';
            function e(){
                cast.style.display = 'none';
            }
            cast.addEventListener('mouseout',e);
        };
    }f1();
    /*=========================================================*/
    function update(num) {
        for (var j=0;j<len;j++){
            Img[j].className = '';
            Sli[j].className = '';
        }
        Img[num].className = 'active';
        Sli[num].className = "onlist";
    }
    function autoplay() {
        ++num;
        if (num >= len){
            num = 0;
        }
        update(num);
    }
    var Sli = document.querySelectorAll('.big-buttons li');
    var Img = document.querySelectorAll('.big-wrap li a img');
    var leftButton = document.querySelector('.left-button');
    var rightButton = document.querySelector('.right-button');
    var len = Sli.length;
    var timer = null;
    var num = null;
    timer = setInterval(autoplay,4000);
    for (var i=0;i<len;i++) {
        Sli[i].index = i;
        Sli[i].onmouseover = function () {
            clearInterval(timer);
            update(this.index);
        };
        Sli[i].onmouseout = function () {
            num = this.index;
            timer = setInterval(autoplay, 4000);
        };
    }
    /*===============================*/
    function countDown() {
        var doSh = document.querySelectorAll('.countdown .box');
        var date = new Date();
        var now = date.getTime();
        var endDate = new Date("2018-8-22 18:00:00");
        var end = endDate.getTime();
        var leftTime = end-now;
        var h,m,s;
        if (leftTime>=0) {
            h = Math.floor(leftTime/1000/60/60%24);
            m = Math.floor(leftTime/1000/60%60);
            s = Math.floor(leftTime/1000%60);
        }else{
            h= 0;
            s= 0;
            m= 0;
        }
        s <10&&(s='0'+s);
        m <10&&(m='0'+m);
        h <10&&(h='0'+h);
        doSh[0].innerHTML = h;
        doSh[1].innerHTML = m;
        doSh[2].innerHTML = s;
        timer = setTimeout(countDown,1000);
        if (m == 0 && s == 0 && h==0) {
            clearInterval(timer);
            document.querySelector('.dodge-time p').innerHTML = '活动已结束';
        }
    }
    countDown();

    /*===========================*/
    var cont = document.querySelector('.dodge-tabs');
    var buttons = document.querySelectorAll('.dodge-button div a');
    var wc = 0;
    buttons[0].onclick = function () {
        if (wc == -978) {
            cont.style.left = '-978px';
        }else{
            wc = wc - 978;
            cont.style.left = wc + 'px';
        }
    };
    buttons[1].onclick = function () {
        if (wc == 0) {
            cont.style.left = '0px';
        }else{
            wc = wc + 978;
            cont.style.left = wc + 'px';
        }
    };
        function f2(a1,b1) {
            console.log(a1);
            console.log(b1);
            var len1 = a1.length;
            for (var i = 0;i<len1;i++){
                a1[i].index = i;
                a1[i].onmouseover = function () {
                    for (var j=0;j<len1;j++){
                        a1[j].className = '';
                        b1[j].className = 'right-box-po';
                    }
                    a1[this.index].className = 'active-one';
                    b1[this.index].className = 'right-box-po activetwo';
                }
            }
        }
    f2(document.querySelectorAll('.capacity .homeapp .box-home .more a'),document.querySelectorAll('.capacity .homecontai .right-box-po'))
    f2(document.querySelectorAll('.household .homeapp .box-home .more a'),document.querySelectorAll('.household .homecontai .right-box-po'))
    f2(document.querySelectorAll('.capacity .homeapp .box-home .more a'),document.querySelectorAll('.capacity .homecontai .right-box-po'))
    f2(document.querySelectorAll('.match .homeapp .box-home .more a'),document.querySelectorAll('.match .homecontai .right-box-po'))
    f2(document.querySelectorAll('.parts .homeapp .box-home .more a'),document.querySelectorAll('.parts .homecontai .right-box-po'))
    f2(document.querySelectorAll('.rim .homeapp .box-home .more a'),document.querySelectorAll('.rim .homecontai .right-box-po'))
    /*==============================*/
    var cont1 = document.querySelector('.rec-cunt ul');
    var buttons1 = document.querySelectorAll('.recommend-button div a');
    var wg = 0;
    buttons1[0].onclick = function () {
        if (wg == -3720) {
            cont1.style.marginLeft = '-3720px';
        }else{
            wg = wg - 1240;
            cont1.style.marginLeft = wg + 'px';
        }
    };
    buttons1[1].onclick = function () {
        if (wg == 0) {
            cont1.style.marginLeft = '0px';
        }else{
            wg = wg + 1240;
            cont1.style.marginLeft = wg + 'px';
        }
    };
    /*===========================*/
    function deTails(buttons,cont,Sli) {
        //console.log(buttons);
        //console.log(cont);
        var wl = 0;
        var len = Sli.length;
        //console.log(len);
        for (var i=0;i<len;i++){
            //console.log(i);
            Sli[i].index = i;
            Sli[i].onclick = function () {
                //console.log(this.index);
                wl = -(this.index)*296;
                cont.style.marginLeft = wl + 'px';
                Sli[this.index].className = 'pager';
                var a = this.index;
                for (j=0;j<len;j++){
                    if (j != a){
                        Sli[j].className = '';
                    }
                }
            }
        }console.log(-296*(len-1));
        buttons[0].onclick = function () {
            if (wl == -296*(len-1)) {

                cont.style.marginLeft = -296*(len-1) + 'px';
            }else{
                wl = wl - 296;
                cont.style.marginLeft = wl + 'px';
            }
            if (wl == 0){
                Sli[0].className = 'pager';
            }else {
                Sli[0].className = '';
            }
            if (wl == -296) {
                Sli[1].className = 'pager';
            }else{
                Sli[1].className = '';
            }
            if (wl == -592){
                Sli[2].className = 'pager';
            }else{
                Sli[2].className = '';
            }
            if (wl == -888) {
                Sli[3].className = 'pager';
            }else {
                Sli[3].className = '';
            }
        };
        buttons[1].onclick = function () {
            if (wl == 0) {
                cont.style.marginLeft = '0px';
            }else{
                wl = wl + 296;
                cont.style.marginLeft = wl + 'px';
            }
            if (wl == 0){
                Sli[0].className = 'pager';
            }else {
                Sli[0].className = '';
            }
            if (wl == -296) {
                Sli[1].className = 'pager';
            }else{
                Sli[1].className = '';
            }
            if (wl == -592){
                Sli[2].className = 'pager';
            }else{
                Sli[2].className = '';
            }
            if (wl == -888) {
                Sli[3].className = 'pager';
            }else {
                Sli[3].className = '';
            }
        };
    }
    deTails(document.querySelectorAll('.small-ul li:nth-child(1) .small-button a'),document.querySelector('.small-ul li:nth-child(1) .small-one .first-ul'),document.querySelectorAll('.small-ul li:nth-child(1) .wrapper ul li'))
    deTails(document.querySelectorAll('.small-ul li:nth-child(2) .small-button a'),document.querySelector('.small-ul li:nth-child(2) .small-one .first-ul'),document.querySelectorAll('.small-ul li:nth-child(2) .wrapper ul li'))
    deTails(document.querySelectorAll('.small-ul li:nth-child(3) .small-button a'),document.querySelector('.small-ul li:nth-child(3) .small-one .first-ul'),document.querySelectorAll('.small-ul li:nth-child(3) .wrapper ul li'))
    deTails(document.querySelectorAll('.small-ul li:nth-child(4) .small-button a'),document.querySelector('.small-ul li:nth-child(4) .small-one .first-ul'),document.querySelectorAll('.small-ul li:nth-child(4) .wrapper ul li'))
};

