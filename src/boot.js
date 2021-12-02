/**
 * Escena para la precarga de los assets que se usarán en el juego.
 */
 export default class Boot extends Phaser.Scene{
    /**
    * Constructor de la escena
    */
    constructor() 
    {
       super({ key: 'boot' }); 
    }
        
    /**
    * Carga de los assets del juego
    */
    preload()
    {
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0xBD0DBD, 0.8);
        progressBox.fillRect(340, 270, 320, 50);
        this.load.on('progress', function (value) {
            console.log(value);
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(350, 280, 300 * value, 30);
        });
        this.load.setPath('assets/botones/');
        this.load.image('button','button.png');
        this.load.image('replay','replay.png');
        this.load.image('pause','pause.png');
        this.load.image('resume', 'button.png');
        this.load.setPath ('assets/images/');
        this.load.image('inventory','inventory.png');
        this.load.image('platform', 'platform.png');
        this.load.image('base', 'base.png');
        this.load.image('player', 'cathy2.png');
        this.load.image('city', 'city.png');
        this.load.image('corazon','HEART.png');
        this.load.image('bandage','star1.png');
        this.load.image('ganar','victoria.jpg');
        this.load.image('alcantarilla','alcantarilla.png');
        this.load.image('cola','cola.png');
        this.load.image('pausebg', '3.png');
        for (var i = 0; i < 200; i++) {
            this.load.image('cola'+ i, 'cola.png');
          }
        this.load.image('car', 'car.png');
        this.load.image('fence', 'fence.png');
        this.load.image('seagull', 'seagull.png');
        this.load.image('gameover','GameOver.png');
        this.load.image('puddle','mud.png');
        this.load.image('center', 'center.png');

        this.load.spritesheet('crow','ravens.png',{frameWidth:100, frameHeight:75});
        this.load.spritesheet('sg', 'seagullsSprite.png',{frameWidth:100, frameHeight:85});
        this.load.spritesheet('sparrow', 'gorrion.png', {frameWidth:51, frameHeight:50});
        this.load.spritesheet('still','cathy2.png',{frameWidth:50, frameHeight:75});
        this.load.spritesheet('run','ninya_run.png',{frameWidth:55, frameHeight:75, endFrame: 6});
        this.load.spritesheet('jump','ninya_jumping.png',{frameWidth:40, frameHeight:75, endFrame: 4});
        this.load.spritesheet('bend','bend.png',{frameWidth:58, frameHeight:75, endFrame: 4})

        this.load.on('fileprogress', function (file) {
            console.log(file.src);
          });
          this.load.on('complete', function () {
            console.log('complete');
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
          });
          var width = this.cameras.main.width;
          var height = this.cameras.main.height;
          var loadingText = this.make.text({
            x: width / 2-75,
            y: height / 2 - 50,
            text: 'LOADING PECK...',
            style: {
              font: '20px monospace',
              fill: '#ffffff'
            }
          });
          var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
              font: '18px monospace',
              fill: '#ffffff'
            }
          });
          percentText.setOrigin(0.5, 0);
          
    }
    /**
    * Creación de las animaciones
    */
    createAnims(){
      this.anims.create({ //correr 1
        key: 'run_anim',
        frames: this.anims.generateFrameNumbers('run', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
        });
        this.anims.create({ //saltar
          key: 'jump_anim',
          frames: this.anims.generateFrameNumbers('jump', { start: 0, end: 2 }),
          frameRate: 4, 
          repeat: -1
        });
        this.anims.create({//en estático
          key: 'still_anim',
          frames: this.anims.generateFrameNumbers('still', { start: 0, end: 6 }),
          frameRate: 8,
          repeat: -1 
        });
        this.anims.create({// movimiento del cuervo
          key: 'raven_right',
          frames: this.anims.generateFrameNumbers('crow', { start: 0, end: 9 }),
          frameRate: 10, // Velocidad de la animación
          repeat: -1    // Animación en bucle
        });
        this.anims.create({
          key: 'seagull_fly',
          frames: this.anims.generateFrameNumbers('sg', { start: 0, end: 8 }),
          frameRate: 10, // Velocidad de la animación
          repeat: -1    // Animación en bucle
        });
        this.anims.create({
          key: 'sparrow_fly',
          frames: this.anims.generateFrameNumbers('sparrow', { start: 0, end: 4 }),
          frameRate: 10, // Velocidad de la animación
          repeat: -1    // Animación en bucle
        });
        this.anims.create({
          key: 'bend_anim',
          frames: this.anims.generateFrameNumbers('bend', { start: 0, end: 4 }),
          frameRate: 11, // Velocidad de la animación
          //repeat: 0    // Animación en bucle
        });
     
    }
    /**
    * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
    * nivel del juego
    */
    create(){
        this.scene.start('menu');
        this.createAnims();
    }
}