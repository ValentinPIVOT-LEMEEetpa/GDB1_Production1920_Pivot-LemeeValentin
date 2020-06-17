class Riddle extends Phaser.Scene{
	constructor(){
		super('mj5');
	}

	init(data) {
		var cursors;
		var loading;
		var texte;
		
		//var textAR;
	}

	preload(){
		this.load.image('background','assets/mj5/bg.png');
		this.load.image('bar','assets/mj5/bar.png');
		this.load.image('pinguin','assets/mj5/pinguin.png');
		this.load.image('tortue','assets/mj5/tortue.png');
		this.load.image('Q&A','assets/mj5/slotQ&A.png');
		this.load.spritesheet('load', 'assets/mj5/load/spritesheet_loading.png', {frameWidth: 500 , frameHeight: 50});
	}

	create(){
		this.cursors = this.input.keyboard.createCursorKeys();


		this.add.image(540,960,'background');
		this.add.image(540,525,'pinguin')
		this.add.image(540,1427,'bar');
		this.add.image(425,1200,'tortue');
		this.add.image(555,981,'Q&A');

		this.loading = this.physics.add.staticGroup();
		//this.loading.create(300,960,'load');
		this.loading = this.physics.add.sprite(795, 455,'load');

		this.anims.create({
			key:'loadi',
			frames: this.anims.generateFrameNumbers('load', {start: 0, end: 9}),
			frameRate: 1, //remettre a 1!!!!!
			repeat: 0
		});

//----------------------TIMER----------------------//
		var time1;
		
		time1 = this.time.addEvent({ delay: 10000, callback: ()=>{
        	this.rand = Phaser.Math.RND.between(1,5);
            	this.scene.start('defaite')
    	}, loop: false});
    	
//-------------------------------------------------//


//------------CHOIX-QUESTION-&-REPONSE-------------//
		
		this.alea = Phaser.Math.Between(1,10); // ENTRE 1 ET 10
		switch(this.alea){
		//Q&A1
			case 1:
			// QUESTION
				this.textQ = this.add.text(90,175,"Le nom de la planete la plus proche ", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				this.textQ = this.add.text(400,225,"de la terre?", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
			// REPONSE
				let textAR = this.add.text(600,1200,"A/ Venus", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAR.setInteractive();
				textAR.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR.on("pointerup",()=>{
					this.scene.start('victoire5');
					//chest += 1;
    				//console.log('chest= (click)' + chest)
				})

				let textAW = this.add.text(600,1400,"B/ Mars", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW1 = this.add.text(600,1600,"C/ Jupiter", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW2 = this.add.text(600,1800,"D/ Pluton", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAW.setInteractive();
				textAW.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW1.setInteractive();
				textAW1.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW1.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW2.setInteractive();
				textAW2.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW2.on("pointerup",()=>{
					this.scene.start('defaite5');
				})
			break;
		//Q&A2

			case 2:
			// QUESTION
				this.textQ = this.add.text(200,175, "Le nom de l'agence spacial", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				this.textQ = this.add.text(400,225, "americaine?", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
			// REPONSE
				let textAR2 = this.add.text(600,1400,"B/ NASA ", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAR2.setInteractive();
				textAR2.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR2.on("pointerup",()=>{
					this.scene.start('victoire5');
				})

				let textAW4 = this.add.text(600,1200,"A/ NASE", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW5 = this.add.text(600,1600,"C/ ASAF", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW6 = this.add.text(600,1800,"D/ PAFE", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAW4.setInteractive();
				textAW4.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW4.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW5.setInteractive();
				textAW5.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW5.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW6.setInteractive();
				textAW6.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW6.on("pointerup",()=>{
					this.scene.start('defaite5');
				})
			break;
		//Q&A3
			case 3:
			// QUESTION
				this.textQ = this.add.text(200,200, "Qu'est ce qu'une galaxie?", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
			
			// REPONSE
				let textAR3 = this.add.text(600,1600,"C/ Beaucoup", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAR4 = this.add.text(600,1675,"d'etoile", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAR3.setInteractive();
				textAR3.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR3.on("pointerup",()=>{
					this.scene.start('victoire5');
				})
				textAR4.setInteractive();
				textAR4.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR4.on("pointerup",()=>{
					this.scene.start('victoire5');
				})

				let textAW7 = this.add.text(600,1450,"B/ Du gaz", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW8 = this.add.text(600,1200,"A/ Un type de", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW9 = this.add.text(600,1275,"planete", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW10 = this.add.text(600,1800,"D/ Rien", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAW7.setInteractive();
				textAW7.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW7.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW8.setInteractive();
				textAW8.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW8.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW9.setInteractive();
				textAW9.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW9.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW10.setInteractive();
				textAW10.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW10.on("pointerup",()=>{
					this.scene.start('defaite5');
				})
			break;
		//Q&A4
			case 4:
			// QUESTION
				this.textQ = this.add.text(175,200, "Qu'est ce que la voie lactee?", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
			// REPONSE
				let textAR5 = this.add.text(600,1775,"D/ Notre", {fontSize: '70px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAR6 = this.add.text(600,1825,"galaxie", {fontSize: '70px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAR5.setInteractive();
				textAR5.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR5.on("pointerup",()=>{
					this.scene.start('victoire5');
				})
				textAR6.setInteractive();
				textAR6.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR6.on("pointerup",()=>{
					this.scene.start('victoire5');
				})

				let textAW11 = this.add.text(600,1375,"B/ Une barre", {fontSize: '70px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW12 = this.add.text(600,1425,"chocolate", {fontSize: '70px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW13 = this.add.text(600,1575,"C/ Une", {fontSize: '70px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW14 = this.add.text(600,1625,"nebuleuse", {fontSize: '70px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW15 = this.add.text(600,1175,"A/ Un", {fontSize: '70px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW16 = this.add.text(600,1225,"satellite", {fontSize: '70px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAW11.setInteractive();
				textAW11.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW11.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW12.setInteractive();
				textAW12.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW12.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW13.setInteractive();
				textAW13.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW13.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW14.setInteractive();
				textAW14.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW14.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW15.setInteractive();
				textAW15.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW15.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW16.setInteractive();
				textAW16.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW16.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

			break;
		//Q&A5
			case 5:
			// QUESTION
				this.textQ = this.add.text(100,200, "Quelle est la vitesse de la lumiere?", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
			// REPONSE
				let textAR7 = this.add.text(600,1200,"A/ 300 000", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAR8 = this.add.text(600,1250,"km/s", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAR7.setInteractive();
				textAR7.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR7.on("pointerup",()=>{
					this.scene.start('victoire5');
				})
				textAR8.setInteractive();
				textAR8.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR8.on("pointerup",()=>{
					this.scene.start('victoire5');
				})
				
				let textAW17 = this.add.text(600,1400,"B/ 30 000", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW18 = this.add.text(600,1450,"km/s", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW19 = this.add.text(600,1600,"C/ 150 000", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW20 = this.add.text(600,1650,"km/s", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW21 = this.add.text(600,1800,"D/ 300 000", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW22 = this.add.text(600,1850,"km/h", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAW17.setInteractive();
				textAW17.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW17.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW18.setInteractive();
				textAW18.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW18.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW19.setInteractive();
				textAW19.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW19.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW20.setInteractive();
				textAW20.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW20.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW21.setInteractive();
				textAW21.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW21.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW22.setInteractive();
				textAW22.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW22.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

			break;
		//Q&A6
			case 6:
			// QUESTION
				this.textQ = this.add.text(100,175, "Quelle planete a ses anneaux bien", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				this.textQ = this.add.text(400,225, "visibles?", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
			// REPONSE
				let textAR9 = this.add.text(600,1400,"B/ Saturne", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAR9.setInteractive();
				textAR9.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR9.on("pointerup",()=>{
					this.scene.start('victoire5');
				})

				let textAW23 = this.add.text(600,1200,"A/ Uranus", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW24 = this.add.text(600,1600,"C/ Pluton", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW25 = this.add.text(600,1800,"D/ Venus", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAW23.setInteractive();
				textAW23.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW23.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW24.setInteractive();
				textAW24.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW24.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW25.setInteractive();
				textAW25.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW25.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

			break;
		//Q&A7
			case 7:
			// QUESTION
				this.textQ = this.add.text(150,175, "Sur quel objet celeste l'homme", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				this.textQ = this.add.text(400,225, "est-il aller?", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
			// REPONSE
				let textAR10 = this.add.text(600,1650,"C/ Lune", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAR10.setInteractive();
				textAR10.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR10.on("pointerup",()=>{
					this.scene.start('victoire5');
				})

				let textAW26 = this.add.text(600,1400,"B/ Une", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW27 = this.add.text(600,1475,"comete", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW28 = this.add.text(600,1200,"A/ Un", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW29 = this.add.text(600,1275,"asteroide", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW30 = this.add.text(600,1800,"D/ Phobos", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAW26.setInteractive();
				textAW26.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW26.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW27.setInteractive();
				textAW27.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW27.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW28.setInteractive();
				textAW28.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW28.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW29.setInteractive();
				textAW29.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW29.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW30.setInteractive();
				textAW30.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW30.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

			break;
		//Q&A8
			case 8:
			// QUESTION
				this.textQ = this.add.text(150,175, "Quel est le nom du 1er animal", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				this.textQ = this.add.text(200,225, "a etre aller dans l'espace?", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
			// REPONSE
				let textAR11 = this.add.text(600,1800,"D/ Laika", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAR11.setInteractive();
				textAR11.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR11.on("pointerup",()=>{
					this.scene.start('victoire5');
				})

				let textAW31 = this.add.text(600,1400,"B/ Albert 1er", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW32 = this.add.text(600,1600,"C/ Felicette", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW33 = this.add.text(600,1200,"A/ Spoutnik", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAW31.setInteractive();
				textAW31.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW31.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW32.setInteractive();
				textAW32.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW32.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW33.setInteractive();
				textAW33.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW33.on("pointerup",()=>{
					this.scene.start('defaite5');
				})
			break;
		//Q&A9
			case 9:
			// QUESTION
				this.textQ = this.add.text(150,175, "Quel est le premier animal a", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				this.textQ = this.add.text(225,225, "etre aller dans l'espace?", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
			// REPONSE
				let textAR12 = this.add.text(600,1200,"A/ Chien", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAR12.setInteractive();
				textAR12.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR12.on("pointerup",()=>{
					this.scene.start('victoire5');
				})

				let textAW34 = this.add.text(600,1400,"B/ Chat", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW35 = this.add.text(600,1600,"C/ Singe", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW36 = this.add.text(600,1800,"D/ Mouche", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAW34.setInteractive();
				textAW34.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW34.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW35.setInteractive();
				textAW35.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW35.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW36.setInteractive();
				textAW36.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW36.on("pointerup",()=>{
					this.scene.start('defaite5');
				})
			break;
		//Q&A10
			case 10:
			// QUESTION
				this.textQ = this.add.text(100,200, "Quel phenomene a creer l'univers?", {fontSize: '55px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
			// REPONSE
				let textAR13 = this.add.text(600,1200,"A/ Big-Bang", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAR13.setInteractive();
				textAR13.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('win')
				})
				textAR13.on("pointerup",()=>{
					this.scene.start('victoire5');
				})

				let textAW37 = this.add.text(600,1400,"B/ Bang-Bang", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW38 = this.add.text(600,1600,"C/ Gang-Gang", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				let textAW39 = this.add.text(600,1800,"D/ Chuck Norris", {fontSize: '75px', fill:'#000',fontFamily: '"Trebuchet MS", Helvetica, sans-serif'});
				textAW37.setInteractive();
				textAW37.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW37.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW38.setInteractive();
				textAW38.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW38.on("pointerup",()=>{
					this.scene.start('defaite5');
				})

				textAW39.setInteractive();
				textAW39.on("pointerover",()=>{
					//fontSize:'50px';
					console.log('lose')
				})
				textAW39.on("pointerup",()=>{
					this.scene.start('defaite5');
				})
			break;
		//FIN		
		}
//-------------------------------------------------//
	}

	update(){
		this.loading.anims.play('loadi',true);
		
	}
}