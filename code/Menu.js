class Menu extends Phaser.Scene{
	constructor(){
		super('mainMenu');
	}
	init(data){
		
	}
	
	preload(){

		this.load.image('bg', 'assets/menu/menu.png');
		this.load.image('select', 'assets/menu/selec.png');
		this.load.image('confirm', 'assets/menu/confirm-selec.png');

	}
	
	create(){

		this.add.image(540,960,'bg');
		//mj 2 --> dodge
		let selection2 =this.add.image(540,870,'select');
		let confirme2 =this.add.image(540,870,'confirm');
		confirme2.setVisible(false);

		selection2.setInteractive();
		selection2.on("pointerover",()=>{
			confirme2.setVisible(true);
			console.log('in2');
		})
		selection2.on("pointerout",()=>{
			confirme2.setVisible(false);
			console.log('out2');
		})
		selection2.on("pointerup",()=>{
			this.scene.start('mj2')
		})


		// mj 1 --> eater
		let selection1 =this.add.image(191,870,'select');
		let confirme1 =this.add.image(191,870,'confirm');
		confirme1.setVisible(false);

		selection1.setInteractive();
		selection1.on("pointerover",()=>{
			confirme1.setVisible(true);
			console.log('in1');
		})
		selection1.on("pointerout",()=>{
			confirme1.setVisible(false);
			console.log('out1');
		})
		selection1.on("pointerup",()=>{
			this.scene.start('mj1')
		})


		// mj 3 --> riddle
		let selection5 =this.add.image(540,1510,'select');
		let confirme5 =this.add.image(540,1510,'confirm');
		confirme5.setVisible(false);

		selection5.setInteractive();
		selection5.on("pointerover",()=>{
			confirme5.setVisible(true);
			console.log('in5');
		})
		selection5.on("pointerout",()=>{
			confirme5.setVisible(false);
			console.log('out5');
		})
		selection5.on("pointerup",()=>{
			this.scene.start('mj5')
		})

	}
	
	update(){

	}

}