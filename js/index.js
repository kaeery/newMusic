
var ul = document.querySelector('.imglist');

var circle = document.querySelector('.circle');

var focus = document.querySelector('.focus');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

// //动态创建小圆圈
for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement('li');
    li.setAttribute('data-index', i);

    circle.appendChild(li);
    //小圆圈排他思想
    circle.children[i].addEventListener('click', function () {

        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        this.className = 'current';
        var index = this.getAttribute('data-index');

        //右箭头和小圆圈获取index
        num = index;
        numC = index;
        console.log(index)
        //点击小圆圈移动图片
        animate(ul, -index * focus.offsetWidth);
        console.log(focus.offsetWidth);

    })

}
circle.children[0].className = 'current';


var newli = ul.children[0].cloneNode(true);
ul.appendChild(newli);

//右箭头
var num = 0;
var numC = 0;
console.log(ul.children.length)
next.addEventListener('click', function () {
        //图片和小圆圈一起切换
        if (num == ul.children.length-1) {
            ul.style.left = 0;
            num = 0;
        }

        //无缝轮播  
        num++;
        animate(ul, -num * focus.offsetWidth);
        numC++;
        if(numC==5) {
            numC=0;
        }
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = ''
        }
        circle.children[numC].className = 'current';


    }

)


//左箭头
prev.addEventListener('click', function () {
        if (num == 0) {
            ul.style.left = (ul.children.length - 1) * focus.offsetWidth;
            num = ul.children.length - 1; //跳到最后一张图片

        }
        num--;
        console.log(focus.offsetWidth);
        animate(ul, -num * focus.offsetWidth)
        //图片与小圆圈一起切换
        numC--;
        if (numC < 0) {
            numC = circle.children.length - 1;
        }
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        circle.children[numC].className = 'current';

    }
)
//自动播放
var timer = setInterval(function () {
}, 5000)

// //鼠标移入停止播放
// focus.addEventListener('mousemove', function () {
//     clearInterval(timer);
//     timer = null;
// })
// //鼠标移出停止播放
// focus.addEventListener('mouseleave', function () {
//     timer = setInterval(function () {
//         slide();
//     }, 2000)
// })
