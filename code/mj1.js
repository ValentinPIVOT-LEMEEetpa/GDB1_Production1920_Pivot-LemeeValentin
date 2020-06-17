class Catcher extends Phaser.Scene{
	constructor(){
		super('mj1');
	}

	init(data) {
		var cursors;
		var loading;
		var human;
		var scoreText;
	}

	preload(){
		this.load.image('background', 'assets/mj1/background/background.png');
		this.load.image('spaceship', 'assets/mj1/spaceship/vaisseau.png');
		this.load.spritesheet('falling', 'assets/mj1/human/spritesheet_falling-perso.png', {frameWidth: 176 , frameHeight: 133});
		this.load.spritesheet('open', 'assets/mj1/alien/alien_bouche-ouverte.png',{frameWidth: 300 , frameHeight: 400});
		this.load.image('bouche', 'assets/mj1/alien/bouche.png');
		this.load.image('close', 'assets/mj1/alien/alien_bouche-ferme.png');
		this.load.spritesheet('load', 'assets/mj1/load/spritesheet_loading.png', {frameWidth: 500 , frameHeight: 50});
	}

	create(){
		this.cursors = this.input.keyboard.createCursorKeys();

		this.add.image(540,960,'background');
		this.add.image(570,300,'spaceship');

		this.player = this.physics.add.staticGroup();
		this.player = this.physics.add.sprite(500, 1724,'open');		
		this.player1 = this.physics.add.staticGroup();
		this.player1 = this.physics.add.sprite(500, 1850,'bouche');		

		this.loading = this.physics.add.staticGroup();
		this.loading = this.physics.add.sprite(250, 25,'load');

		//this.human = this.physics.add.sprite(255, 200,'falling');
		//this.human.setCollideWorldBounds(true);
		this.alea = Phaser.Math.Between(88, 992);
  
		this.humans = this.physics.add.group({
    		key: 'falling',
    		repeat: 0,
    		setXY: { x: this.alea, y: 200, stepX: 0 }
		});

		this.player.setCollideWorldBounds(true);
		this.player1.setCollideWorldBounds(true);
		this.physics.add.collider(this.player1,this.humans,this.point,null,this);

		this.anims.create({
			key:'tombe',
			frames: this.anims.generateFrameNumbers('falling', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key:'loadi',
			frames: this.anims.generateFrameNumbers('load', {start: 0, end: 9}),
			frameRate: 1,
			repeat: 1
		});




//----------------TIMER------------------//
		var time1;
		time1 = this.time.addEvent({ delay: 10000/*10000*/, callback: ()=>{

        this.rand = Phaser.Math.RND.between(1,5);
            this.scene.start('defaite1')
    	}, loop: false});


    	var time2;
		time2 = this.time.addEvent({ delay: 1000, callback: ()=>{

        this.rand = Phaser.Math.RND.between(1,5);
			this.alea = Phaser.Math.Between(88, 992);
            this.humans = this.physics.add.sprite(this.alea, 200,'falling');
			//this.humans.setCollideWorldBounds(true);
			this.physics.add.collider(this.player1,this.humans,this.point,null,this);
    	}, loop: true});
//--------------------------------------//


		/*this.human = this.physics.add.group({
			key: 'falling',
			repeat:0,
			setXY: {x:this.alea,y:200,stepX: this.alea}
		});*/
		
		this.scoreText = this.add.text(800,20, 'score:0', {fontSize: '50px', fill:'#fff'});
	}

	

	update(){
		this.loading.anims.play('loadi',true);

		this.humans.setVelocityY(1000)
		//this.humans.anims.play('tombe',true);
		
		if (this.cursors.right.isDown){
			this.player.setVelocityX(600);
			this.player1.setVelocityX(600);
		}else if (this.cursors.left.isDown){
			this.player.setVelocityX(-600);
			this.player1.setVelocityX(-600);
		} else{
			this.player.setVelocityX(0);
			this.player1.setVelocityX(0);
		};
	}

	point(player1,humans){
		var score = 0;
		score += 1;
		
		//this.humans.disableBody(true,true);
		console.log(score);
   		this.scoreText.setText('score: '+ score);

    	
	}
}