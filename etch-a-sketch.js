const canva= document.querySelector('#etch-a-sketch');
const shake=document.querySelector('.shake');
const ctx=canva.getContext('2d');
const MOVE_AMOUNT=50;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

const {width,height}=canva;

 let x=Math.floor(Math.random()*width );
 let y= Math.floor(Math.random()*height );
let hue=0;
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

function draw( {key} ){
    hue += 1;
    ctx.strokeStyle=`hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch (key) {
        case 'ArrowUp':
            y-=MOVE_AMOUNT;
           
            break;
        case 'ArrowDown':
            y+=MOVE_AMOUNT;
          
            break;       
        case 'ArrowRight':
            x+=MOVE_AMOUNT;
           
            break;          
        case 'ArrowLeft':
            x-=MOVE_AMOUNT;
            
            break;           
        default:
            break;
    }
   
    ctx.lineTo(x,y);
    ctx.stroke();
}



function keyHandler(e){
  if(e.key.includes('Arrow')){
    e.preventDefault();
    draw({ key:e.key });
  }
}
function clear(){
    canva.classList.add('shake');
    ctx.clearRect(0,0,width,height);
    canva.addEventListener(
        'animationend',
        function() {
         canva.classList.remove('shake');
        }
    //    { once: true }
      );
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y);
    ctx.stroke();

}





// eventHandler for shake and arrow key keydown
//    ||||            ||||     
//    vvvv            vvvv
//          SHAKE
shake.addEventListener('click',clear);
//         arrow key
window.addEventListener('keydown',keyHandler);