const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;
//canvas를 css크기가 아닌 pixel을 다룰 수있는 element로서 만드는 것이기에
//이 element에 너비와 높이값을 지정해줘야한다

//context의 디폴트 기본값 설정
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
};

function startPainting(){
    painting = true;
};

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else{
        ctx.lineTo(x, y);
        ctx.stroke();
    };
};

function onMouseDown(event){
    painting = true;
};


if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
};

//canvas는 context를 갖고있는 html요소.
//context라는 건 요소 안에서 우리가 픽셀에 접근할 수 있는 방법