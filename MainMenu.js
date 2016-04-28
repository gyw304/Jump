MyGame.MainMenu = function(game) {
	game.playerDir = -1;
	game.flag = false;
};
MyGame.MainMenu.prototype = {
    create: function() {
        this.add.image(0,0,'MainMenu-bg');
        
        this.title = this.add.image(game.world.centerX,400,'title');
        this.title.anchor.set(0.5);
        
        
        this.player = this.add.sprite(0,-100, 'player');

	    
	    this.title.addChild(this.player)
	    
        
        this.ruleText = this.add.image(game.world.centerX,430,'rule-text')
        this.ruleText.anchor.set(0.5);
        this.ruleText.visible = false;
        
        game.startBtn = game.add.button(game.world.centerX,game.world.height - 50,'ico',function(){
        	if(!islogin)
        	{
        		document.getElementById('cover').style.display = 'block';
        	}
        	else
        	{
        		game.state.start('Game');
        	}
        },this);
    	game.startBtn.anchor.set(0.5,1);
        game.startBtn.frameName = 'start_btn.png';
        
        game.ruleBtn = game.add.button(game.world.centerX + 250,game.world.height - 50,'ico',function(){
        	this.ruleText.visible = true;
        	this.title.visible = false;
        	game.flag = true;
        },this);
    	game.ruleBtn.anchor.set(0.5,1);
        game.ruleBtn.frameName = 'rule_btn.png';


		game.libaoBtn = game.add.button(game.world.centerX - 250,game.world.height - 50,'ico',function(){
        	game.state.start("MyPoil")
        },this);
    	game.libaoBtn.anchor.set(0.5,1);
        game.libaoBtn.frameName = 'libao_btn.png';
        
        
        
        GameUI.cutscenes();
        
    },
    update : function(){
    	if(game.flag) return;
    	if(this.player.y>=-100)
    	{
    		game.playerDir = -1;
    		this.player.loadTexture('player_jump');
    	}
    	else if(this.player.y <= -130)
    	{
    		game.playerDir = 1;
    		this.player.loadTexture('player');
    	}
    	this.player.y += 1 * game.playerDir;
    }
};