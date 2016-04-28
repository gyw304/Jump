MyGame.Game = function(game) {
	game.start = false;
	game.playerJump = false;
	game.jumpPower = 0;
	game.step = -1;
	game.direction = -1;
	game.leafX = 0;
	game.playerOutWorld = false;
};
MyGame.Game.prototype = {
    create: function() {
        this.add.image(0,0,'game-bg');
        
        game.leafGroup = game.add.physicsGroup();
        
        for(var i=0;i<=5;i++)
        {
        	
        	switch(i)
			{
				case 0: game.leafX = 449; break;
				case 1: game.leafX = 94;  break;
				case 2: game.leafX = 531; break;
				case 3: game.leafX = 344; break;
				case 4: game.leafX = 40;  break;
				case 5: game.leafX = 290; break;
				case 6: game.leafX = 550; break;
			}
        	
        	game.leaf = game.leafGroup.create(game.leafX,320+i*110,'ico');
        	game.leaf.frameName = 'leaf.png';
        	game.leaf.name = 'leaf'+i+'';
        }
        
        game.player = this.add.sprite(375,915,'player');
        game.player.anchor.set(0.5,1);
        
        
        game.physics.enable([game.leaf,game.player],Phaser.Physics.ARCADE);
        game.leafGroup.forEach(function(i){
        	i.body.immovable = true;
        	i.body.setSize(120, 5, 25, 45);
        })
        
        game.player.body.setSize(60, 2, -13, 0);
        
        GameUI.PowerBar(40,1060);
        
        
        game.jumpBtn = game.add.button(game.world.width - 40,game.world.height - 20,'ico',function(){
        	this._playerJump();
        },this);
    	game.jumpBtn.anchor.set(1);
        game.jumpBtn.frameName = 'jump_btn.png';
        
        
        this._gamestart();
        GameUI.cutscenes();
    },
    _gamestart : function(){
    	game.start = true;
    	game.player.body.gravity.y = 1000;
    },
    update: function(){
    	if(!game.start) return;
    	game.physics.arcade.collide(game.leafGroup, game.player,this._hitLeaf, null, this);
    	if(game.powerBar.x>=19)
    	{
    		game.step = -1
    	}
    	else if(game.powerBar.x <= -410)
    	{
    		game.step = 1
    	}
    	game.powerBar.x += 5 * game.step;
    	
    	
    	if(game.player.x<= 0 - 95 || game.player.x >=game.world.width || game.player.y >= game.world.height+165)
    	{
    		game.player.reset(375, 915);
    	}
    	
    },
    _playerJump : function(){
    	if(!game.playerJump)
    	{
    		game.player.body.velocity.y = -600;
    		game.player.body.velocity.x =Math.abs((game.powerBar.x + 410)*1.5) * game.direction;
    		game.player.loadTexture('player_jump');
    		game.player.body.setSize(57, 2, 20, 0);
    		game.playerJump = true;
    	}
    },
    _hitLeaf : function(o,i){
    	if(i.name == 'leaf4' || i.name == 'leaf1')
    	{
    		game.direction = 1;
    		game.player.body.setSize(57, 2, 12, 0);
    		
    	}
    	else if(i.name == 'leaf2' || i.name == 'leaf5')
    	{
    		game.direction = -1;
    		game.player.body.setSize(60, 2, -13, 0);
    	}
    	
    	if(i.name == 'leaf0')
    	{
    		game.state.start('Result')
    	}
    	
    	game.player.scale.x = -game.direction;
    	game.player.loadTexture('player');
    	game.player.body.velocity.x = 0;
    	game.playerJump = false;
    },
    render : function() {
		/*game.debug.body(game.player);
	    game.leafGroup.forEach(function(i){
	    	game.debug.body(i);
	    })*/
	}
};