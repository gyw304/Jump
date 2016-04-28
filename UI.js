var GameUI = ( function (mod){
    mod.cutscenes = function(){
        game.graphics = game.add.graphics(0, 0);
        game.graphics.beginFill(0x000000);
        game.graphics.drawRect(0, 0, game.world.width,game.world.height);
        game.graphics.endFill();
        game.add.tween(game.graphics).to({alpha:0},500,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
            game.graphics.kill()
        },this);
    };
    
    mod.PowerBar = function(x,y){
    	game.powerGroup = game.add.group();
        game.powerGroup.x = x;
        game.powerGroup.y = y;
        game.power = game.add.image(0,0,'ico');
        game.power.frameName = 'power.png';
        game.powerBar = game.add.sprite(19,42,'ico');
        game.powerBar.frameName = 'power-bar.png';
        game.powerCover = game.add.graphics(0, 0);
        game.powerCover.beginFill(0x000000,.5);
        game.powerCover.drawRect(19, 42, 449,35);
        game.powerCover.endFill();
        game.powerGroup.add(game.power);
        game.powerGroup.add(game.powerBar);
        game.powerGroup.add(game.powerCover);
        game.powerBar.mask = game.powerCover;
    }
    
    return mod;
})(window.GameUI || {});
