MyGame.Result = function(game) {
};
MyGame.Result.prototype = {
    create: function() {
        this.add.image(0,0,'game-bg');
        
        if(ispoil)
        {
        	this.ispoil = this.add.image(game.world.centerX,650,'ispoil');
        	this.ispoil.anchor.set(0.5);
        	this.scoreText = this.add.text(this.world.centerX, 520, '恭喜你获得'+poil+'，\n你与180套优质新房源更近啦！',{font: "bold 38px Microsoft YaHei", fill: '#00394b',align:'center'});
        	this.scoreText.anchor.set(0.5);
        	/*game.add.text(0,0,)*/
        }
        else
        {
        	this.nopoil = this.add.image(game.world.centerX,650,'nopoil');
        	this.nopoil.anchor.set(0.5);
        }
        
        game.replayBtn = game.add.button(game.world.centerX,game.world.height - 20,'ico',function(){
        	game.state.start('Game');
        },this);
    	game.replayBtn.anchor.set(0.5,1);
        game.replayBtn.frameName = 'replay_btn.png';
        GameUI.cutscenes();
    }
};