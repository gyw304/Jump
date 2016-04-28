MyGame.Preloader = function(game){
};
MyGame.Preloader.prototype = {
    create:function(){
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
        this.text = this.add.text(this.world.width/2, this.world.height/2-50, '', { fill: '#fff' });
        this.text.anchor.set(0.5);
        this.start();
    },
    start:function(){
    	
    	this.load.image('game-bg','assets/game-bg.jpg');
    	this.load.image('MainMenu-bg','assets/MainMenu-bg.jpg');
    	this.load.image('title','assets/title.png');
    	this.load.image('player','assets/player.png');
    	this.load.image('ispoil','assets/ispoil.png');
    	this.load.image('nopoil','assets/nopoil.png');
    	this.load.image('rule-text','assets/rule-text.png');
    	this.load.image('player_jump','assets/player_jump.png');
    	this.load.image('mypoil_pic','assets/mypoil_pic.png');
    	this.load.atlas('ico', 'assets/ico.png', 'assets/ico.json');
    	
        this.load.start();
    },
    fileComplete:function(progress){
        this.text.setText( + progress + "%");
    },
    loadComplete:function(){
        this.state.start('MyPoil');
    }
};