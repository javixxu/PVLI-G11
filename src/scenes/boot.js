/**
 * Escena para la precarga de los assets que se usarán en el juego.
 */
export default class Boot extends Phaser.Scene {
  /**
  * Constructor de la escena
  */
  constructor() {
    super({ key: 'boot' });
  }
  /**
  * Carga de los assets del juego
  */
  preload() {
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0xBD0DBD, 0.8);
    progressBox.fillRect(340, 270, 320, 50);
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(350, 280, 300 * value, 30);
    });

    //BOTONES
    this.load.setPath('assets/botones/');
    this.load.image('button', 'play.png');
    this.load.image('replay', 'replay.png');
    this.load.image('pause', 'pause.png');
    this.load.image('sound', 'sound.png');
    this.load.image('midsound', 'midsound.png');
    this.load.image('mute', 'mutesound.png');
    this.load.image('exit', 'exit.png');
    this.load.image('controlsButton', 'controls.png')
    this.load.image('nextlevel', 'nextlevel.png');

    //IMAGENES
    this.load.setPath('assets/images/');
    this.load.image('menubackground', 'fondo2.png');
    this.load.image('backgroundlvl1', 'backgroundtown.png');

    this.load.image('fondof', 'FONDOF.png');
    this.load.image('controles', 'controles.png');
    this.load.image('inventory', 'inventory.png');
    this.load.image('platform', 'platform.png');
    this.load.image('player', 'cathy_jump.png');
    this.load.image('corazon', 'HEART.png');
    this.load.image('bandage', 'bandages.png');
    this.load.image('spikes', 'spikes.png');
    this.load.image('key', 'key.png');
    this.load.image('backgroundvictory', 'backgroundvictory.png');
    this.load.image('backgroundvictory1', 'backgroundvictory1.png');
    this.load.image('ganar', 'ok_bird.png');
    this.load.image('alcantarilla', 'alcantarilla.png');
    this.load.image('panel', 'panel.png');
    this.load.image('cola', 'cola.png');
    this.load.image('pausebg', '3.png');
    this.load.image('harrier', 'harrier.png');
    this.load.image('beach', 'backgroundbeach.png');
    this.load.image('fence', 'fence.png');
    this.load.image('debris', 'escombros.png');
    this.load.image('gameover', 'deadbird.png');
    this.load.image('gameoverbackground', 'go.png');
    this.load.image('puddle', 'mud.png');
    this.load.image('center', 'center.png');
    this.load.image('car', 'car.png');
    this.load.image('redcar', 'redcar.png');
    this.load.image('greencar', 'greencar.png');
    this.load.setPath('assets/images/elementosfondo/');
    this.load.image('arbol', 'arbol1.png');
    this.load.image('pino', 'arbol(Pino).png');
    this.load.image('cartel', 'cartel.png');
    this.load.image('casa1', 'casa1.png');
    this.load.image('casa2', 'casa2.png');
    this.load.image('casa3', 'casa3.png');
    this.load.image('casa4','casa4.png');
    this.load.image('casa5', 'casa5.png');
    this.load.image('gasolinera', 'gasolinera.png');
    
    // SPRITESHEETS
    this.load.setPath('assets/images/');
    this.load.spritesheet('crow', 'ravens.png', { frameWidth:97, frameHeight: 95 });
    this.load.spritesheet('sg', 'seagullsSprite.png', { frameWidth: 90, frameHeight: 90 });
    this.load.spritesheet('sparrow', 'gorrion.png', { frameWidth: 45, frameHeight: 45 });
    this.load.spritesheet('parakeet', 'periquito.png', { frameWidth: 500, frameHeight: 300, endFrame: 17 });
    this.load.spritesheet('run', 'cathy_run.png', { frameWidth: 55, frameHeight: 80, endFrame: 8 });
    this.load.spritesheet('jump', 'cathy_jump.png', { frameWidth: 55, frameHeight: 80, endFrame: 2 });
    this.load.spritesheet('idle', 'cathy_idle.png', { frameWidth: 55, frameHeight: 80, endFrame: 2 });
    this.load.spritesheet('harrieranim', 'aguilucho.png', { frameWidth: 149, frameHeight: 65 });
    this.load.spritesheet('menu_crow', 'menu_crow.png', { frameWidth: 150, frameHeight: 150, endFrame: 30 });
    //SONIDOS
    this.load.setPath('sounds/');
    this.load.audio('pickup', 'pickup.wav');
    this.load.audio('usepowerup', 'poweruosound.wav');
    this.load.audio('hurt', 'femalehurt.wav');
    this.load.audio('fall', 'losesound.wav');
    this.load.audio('backsound', 'soundtrack.wav');
    this.load.audio('menumusic', 'menumusic.wav');
    this.load.audio('buttonclick', 'bottonclick.wav');
    this.load.audio('gameovermusic', 'deadmusic.wav');
    this.load.audio('backsound2','level2.wav');
    this.load.audio('parakeetsound','tweet.wav');
    
    this.load.audio('winmusic', 'victorysound.mp3');

    //TILEMAP
    this.load.setPath('tilemap/');
    this.load.tilemapTiledJSON('map1', 'level1.json');
    this.load.image('patronesLevel1', 'tilesetForest.png');
    this.load.tilemapTiledJSON('map2', 'level2.json');
    this.load.image('patronesLevel2', 'tilesetbeach.png');

    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
    });
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2 - 75,
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
  createAnims() {
    this.anims.create({ //correr
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
      frames: this.anims.generateFrameNumbers('idle', { start: 0, end: 2 }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({// movimiento del cuervo
      key: 'raven_right',
      frames: this.anims.generateFrameNumbers('crow', { start: 0, end: 9 }),
      frameRate: 10,
      repeat: -1    
    });
    this.anims.create({
      key: 'seagull_fly',
      frames: this.anims.generateFrameNumbers('sg', { start: 0, end: 8 }),
      frameRate: 10,
      repeat: -1 
    });
    this.anims.create({
      key: 'sparrow_fly',
      frames: this.anims.generateFrameNumbers('sparrow', { start: 0, end: 4 }),
      frameRate: 10,
      repeat: -1 
    });
    this.anims.create({
      key: 'explosion',
      frames: this.anims.generateFrameNumbers('parakeet', { start: 0, end: 17 }),
      frameRate: 20, 
      repeat: -1 
    });
    this.anims.create({
      key: 'crow_menu',
      frames: this.anims.generateFrameNumbers('menu_crow', { start: 0, end: 29 }),
      frameRate: 9,
      repeat: -1 
    });
    this.anims.create({
      key: 'harrier_anim',
      frames: this.anims.generateFrameNumbers('harrieranim', { start: 0, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
  }
  /**
  * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
  * nivel del juego
  */
  create() {
    this.scene.start('menu');
    this.createAnims();
  }
}