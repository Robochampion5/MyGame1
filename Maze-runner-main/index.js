var edge1,edge2,edge3,edge4,edge5,edge6,edge7,edge8,edge9,edge10,edge11,edge12,edge13,edge14,edge15;
var edge16,edge17,edge18,edge19,edge20;

function setup(){
    createCanvas(1535,760);
    edge1 =createSprite(400,380,7,560);
    edge2 =createSprite(1135,380,7,560);
    edge3 =createSprite(546.5,100,300,7);
    edge4 =createSprite(971,100,335,7);
    edge5 =createSprite(596.5,660,400,7);
    edge6 =createSprite(1013.5,660,250,7);
    edge7 =createSprite(885,625.5,7,70);
    edge8 =createSprite(260,200,5,50);
    edge9 =createSprite(280,200,5,50);
    edge10 =createSprite(300,200,5,50);
}

function draw(){
    background("black");
    drawSprites();
}