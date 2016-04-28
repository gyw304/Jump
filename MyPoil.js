MyGame.MyPoil = function(game) {
};
MyGame.MyPoil.prototype = {
    create: function() {
        this.add.image(0,0,'game-bg');
        
        this.add.image(90,590,'mypoil_pic');
        
        this.mypoilText = this.add.text(this.world.centerX, 460, '¹§Ï²Äã»ñµÃ\n'+poil+'',{font: "bold 50px Microsoft YaHei", fill: '#00394b',align:'center'});
        this.mypoilText.anchor.set(0.5);
        
        game.backIndexBtn = game.add.button(game.world.centerX,game.world.height - 20,'ico',function(){
        	game.state.start('MainMenu');
        },this);
    	game.backIndexBtn.anchor.set(0.5,1);
        game.backIndexBtn.frameName = 'backIndex_btn.png';
        GameUI.cutscenes();
    }
};