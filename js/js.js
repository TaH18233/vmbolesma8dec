var myCanvas = document.getElementById("myCanvas");
stage = new createjs.Stage(myCanvas);
var starCount = 10;
var activeStars = starCount;
var allStars = [];


for(var i=1; i<starCount+1; i++) {
    var star = new createjs.Shape();
    star.graphics.setStrokeStyle(2).beginStroke("#ff9900");
    star.graphics.drawPolyStar(180, 100, 25 + (i*8), 7, 0.5, -90);
    star.x = Math.random()*200;
    star.y = Math.random()*100;
    star.alpha = 1 - i/20;
    star.compositeOperation="lighter";
    var tween = createjs.Tween.get(star).to({x:300, y:200}, 1500 + 90*i, createjs.Ease.elasticOut).call(telActiveStars);
    allStars.push({starId: star})
    stage.addChild(star);
}

createjs.Ticker.addEventListener("tick", repeat);
function repeat(event) {
    if (activeStars) {

        stage.update(event);
        console.log(activeStars);

    }


}

function telActiveStars() {
    activeStars--;

}

addEventListener('mouseup', clicked);
function clicked(event) {
    for(var i=0; i<starCount; i++) {
        var stars = allStars[i].starId;
        createjs.Tween.get(stars,{override:true}).to({x:stage.mouseX-180, y:stage.mouseY-100}, 1500 + 120*i, createjs.Ease.elasticOut).call(telActiveStars);

    }
    activeStars = starCount;

}