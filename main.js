canvas =document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=90;
a=["mars1.jpeg","mars2.jpg","mars3.jpg","mars4.jpg" ,"mars5.jpg","mars6.jpg","mars7.jpg","mars8.jpg","mars9.jpg","mars10.jpg"]
r=Math.floor(Math.random()*10);
background_image=a[r];
rover_image="rover.png";
function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=background_image;
    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);

}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    if (keyPressed=='38'){
        up();
}
if (keyPressed=='40'){
   down();
}
if (keyPressed=='37'){
    left();
}
if (keyPressed=='39'){
    right();
}
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        uploadBackground();
        uploadrover();

    }
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        uploadBackground();
        uploadrover();
        
    }
}
function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        uploadBackground();
        uploadrover();
        
    }
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        uploadBackground();
        uploadrover();
        
    }
}
