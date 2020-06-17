class Boot extends Phaser.Scene{
	constructor(){
		super('bootGame');
	}

	init(data) {
		var cursors;
	}

	preload(){

	}

	create(){
		//this.cursors = this.input.keyboard.createCursorKeys();
		this.cursors = this.input.keyboard.addKey('X');

	}

	

	update(){
		if (this.cursors.isDown){
			this.scene.start('');
		}
	}
}

//this.scene.start("");