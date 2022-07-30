(function (doc,win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            //js获取当前的设备大小:document.documentElement.clientWidth
            var clientWidth = docEl.clientWidth; //获取设备宽度
            if (!clientWidth) return 
            if(clientWidth >= 750) { //宽度>750，平板或桌面
                docEl.style.fontSize = '100px'; //根元素
            } else {
                //反之宽度<750，移动端
                //设置根元素大小100，750的设计稿(大小可变)
                //px/100 = ?rem
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
            }
        };
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document,window);