class Dodge extends Phaser.Scene{
	constructor(){
		super('mj2');
	}

	init(data) {
		var cursors;
		var loading;
		var human;
		var scoreText;
	}

	preload(){
		this.load.image('background', 'assets/mj2/background/background.png');
		this.load.image('spaceship', 'assets/mj2/vaisseau.png');
		this.load.image('left', 'assets/mj2/fleche a appuyer/left.png');
		this.load.image('right', 'assets/mj2/fleche a appuyer/right.png');
		this.load.image('falling-l', 'assets/mj2/fleche qui tombe/falling-left.png');
		this.load.image('falling-r', 'assets/mj2/fleche qui tombe/falling-right.png');
		this.load.spritesheet('load', 'assets/mj2/load/spritesheet_loading.png', {frameWidth: 500 , frameHeight: 50});
	}

	create(){
		this.cursors = this.input.keyboard.createCursorKeys();

		this.add.image(540,960,'background');
		this.add.image(570,300,'spaceship');	

		this.loading1 = this.physics.add.staticGroup();
		this.loading1 = this.physics.add.sprite(250, 25,'load');

	
		this.anims.create({
			key:'loadi',
			frames: this.anims.generateFrameNumbers('load', {start: 0, end: 9}),
			frameRate: 1,
			repeat: 1
		});


//----------------TIMER------------------//
		var time1;
		time1 = this.time.addEvent({ delay: 10000, callback: ()=>{

        this.rand = Phaser.Math.RND.between(1,5);
            this.scene.start('victoire2')
    	}, loop: false});
//--------------------------------------//

	}

	

	update(){
		this.loading1.anims.play('loadi',true);

	}
}