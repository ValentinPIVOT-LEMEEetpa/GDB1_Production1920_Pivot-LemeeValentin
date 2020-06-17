var config = {
	width: 1080,
	height: 1920,
	backgroundColor: 0x000000,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { 0: 0 },
            debug: true
        }
    },
	scene: [  Menu, Catcher, Dodge, Riddle, Victoire5, Defaite5, Victoire1, Defaite1, Victoire2, Defaite2, ]
};

var game = new Phaser.Game(config);