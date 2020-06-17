class Defaite5 extends Phaser.Scene{
	constructor(){
		super('defaite');
	}

	init(data) {

	}

	preload(){
		this.load.image('place holder','assets/defaite/defaite.png');
		this.load.image('bgd','assets/defaite/defeat.png');
		this.load.image('restart','assets/defaite/restart.png');
		this.load.image('quit','assets/defaite/quit.png');
	}

	create(){
		this.add.image(540,960,'bgd');
		let quit = this.add.image(535,1615,'quit');
		let restart = this.add.image(540,1100,'restart');
		
		quit.setInteractive();
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

		restart.on("pointerover",()=>{
			restart.setScale(1.25);
		})
		restart.on("pointerout",()=>{
			restart.setScale(1);	
		})
		restart.on("pointerup",()=>{
			this.scene.start('mj5')
		})
	};

	update(){
		
	}
}