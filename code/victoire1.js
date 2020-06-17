class Victoire1 extends Phaser.Scene{
	constructor(){
		super('victoire1');
	}

	init(data) {

	}

	preload(){
		this.load.image('place holder','assets/victoire/victoire.png');
		this.load.image('bgv','assets/victoire/victory.png');
		this.load.image('continue','assets/victoire/continue.png');
		this.load.image('restart','assets/victoire/restart.png');
		this.load.image('quit','assets/victoire/quit.png');
	}

	create(){
		//this.add.image(540,960,'place holder');
		this.add.image(540,960,'bgv');
		let quit = this.add.image(535,1615,'quit');
		let continu = this.add.image(540,850,'continue');
		let restart = this.add.image(540,1100,'restart');
		
		quit.setInteractive();
		continu.setInteractive();
		restart.setInteractive();

		quit.on("pointerover",()=>{
			quit.setScale(1.25);
		})
		quit.on("pointerout",()=>{
			quit.setScale(1);	
		})
		quit.on("pointerup",()=>{
			this.scene.start('mainMenu')
		})

		continu.on("pointerover",()=>{
			continu.setScale(1.25);
		})
		continu.on("pointerout",()=>{
			continu.setScale(1);	
		})
		continu.on("pointerup",()=>{
			this.scene.start('mj1')
		})

		restart.on("pointerover",()=>{
			restart.setScale(1.25);
		})
		restart.on("pointerout",()=>{
			restart.setScale(1);	
		})
		restart.on("pointerup",()=>{
			this.scene.start('mj1')
		})
	};

	update(){
		
	}
}