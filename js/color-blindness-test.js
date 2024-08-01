const contentElement = document.querySelector('.content');
const startElement = document.querySelector('.start');
const reciprocalElement = document.querySelector('.reciprocal')
const endElement = document.querySelector('.end')
let countdown = 60;
let side = 2;
let times = ['','',1,2,3,3,4,5,5,6,999];
let count = 1;
let score = 0;
let result = '';

function creatBox(){
    let boxes = '';
    let answer = Math.floor(Math.random() * side ** 2);
    // let boxSize = 100 / side;
    let R = Math.floor(Math.random() * 240);
    let G = Math.floor(Math.random() * 240);
    let B = Math.floor(Math.random() * 240);
    let style = `style = "--size:${side};background-color: rgb(${R},${G},${B});"`
    
    for(let i = 0;i < side ** 2;i++){
        if(answer == i){
            boxes += `<div class="box answer" ${style}></div>`
        }else{
            boxes +=`<div class="box" ${style}></div>`
        }
        contentElement.innerHTML = boxes;
    };
};

function reciprocal(){
    if(countdown == -1){
        reciprocalElement.innerHTML = "時間結束";
        result += ` <div class="background">
                        <div class="result">
                            <div class="score">分數：${score}分</div>
                        </div>
                    </div>
                `;
        endElement.innerHTML = result;
    }else{
        reciprocalElement.innerHTML = "剩餘時間：" + countdown + "秒";
        setTimeout(reciprocal,1000);
        countdown-= 1;
    };
};

function answerSetting(){
    let answerElement = document.querySelector('.box.answer')
    answerElement.addEventListener('click', function() {
        if(count == times[side]){
            side += 1;
            count = 1;
            score += 1;
        }else{
            count += 1;
            score += 1;
        };
        reset();
    });
};

function reset(){
    creatBox();
    answerSetting();
};

creatBox();

startElement.innerHTML = `<div class="active">開始遊戲</div>`
$(startElement).one("click", function(){
    startElement.innerHTML = `<div class="active">加油！</div>`
    reciprocal();
    reset();
});
