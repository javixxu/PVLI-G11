import Player from '../player.js';
import Platform from '../platform.js';
import Crow from '../birds/crow.js';
import Floor from '../floor.js';
import Cola from '../powerups/cola.js';
import Car from '../obstacles/car.js';
import Fence from '../obstacles/fence.js';
import Debris from '../obstacles/debris.js';
import Seagull from '../birds/seagull.js';
import Puddle from '../obstacles/puddle.js';
import VictoryCollider from '../victorycollider.js';
import Sewer from '../obstacles/sewer.js';
import Bandages from '../powerups/bandages.js';
import Sparrow from '../birds/sparrow.js';
import Spikes from '../obstacles/spikes.js';
import Birdseed from '../powerups/birdseed.js';
import Harrier from '../birds/harrier.js'
import PauseMenu from './pausemenu.js';
/**
 * Escena principal del juego. La escena se compone de una serie de plataformas 
 * sobre las que se sitúan las bases en las podrán aparecer las estrellas. 
 * El juego comienza generando aleatoriamente una base sobre la que generar una estrella. 
 */
export default class Level extends Phaser.Scene 
{
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'level' });
  }
  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    //DIMENSIONES
    const width=this.scale.width;
    const height = this.scale.height;
    const large=width*10;
    //MUSICA DE FONDO
    const config = {
      mute: false,
      volume: 0.1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    };
    this.soundtrack = this.sound.add("backsound",config);
    
    this.createAligned(this, large,'city',1);
    
    
    
    this.player = new Player(this, 200, 300, 5);
    for(let i = 0; i < large; i+=60)
    {
      this.ground = new Floor(this, this.player, i, height-10);
    }
    this.cola= new Cola(this,600,300);
    this.birdseed=new Birdseed(this,100,450).setScale(2,2);
    this.crow=new Crow (this, this.player, 500,100, 'crow');
    this.harrier=new Harrier(this,this.player,1500,180,'harrier');
    this.seagull = new Seagull(this, this.player, 500, 250);
    this.sparrow = new Sparrow(this, this.player, 50, 200);
    new Bandages(this,100,100,'bandage');
    this.spikes=new Spikes(this,this.player,1800,470,'spikes');
    new Fence(this,this.player, 1500, height-120, 'fence');
    new Debris(this,this.player, 2155, height-50, 'debris')
    //new Car(this, this.player, 1000, height-38, 'car');
    new VictoryCollider(this,this.player,6000,height-38);
    //this.puddle = new Puddle(this, this.player, 500, height-10, 'puddle')
    new Platform(this, this.player, this.sparrow, 150, 350);
    new Platform(this, this.player, this.sparrow, 850, 350);
    new Platform(this, this.player, this.sparrow, 5000, 350);
    this.groupAlcantarillas=this.add.group();
    this.createSewer(height-50);

    this.soundtrack.play();
    //menú de pausa
    this.pause = this.add.image(975,25,'pause').setScale(0.1).setScrollFactor(0).setInteractive();
  
    this.pause.on("pointerdown", () =>{
      this.tiempoPausa=true;
      this.scene.launch('pausemenu'),
      this.soundtrack.pause(),
      this.scene.pause()
    });

    this.tiempoTotal=0;this.tiempo;
    this.tiempoPausa=false;
    this.label = this.add.text(800, 10, "");
    this.label.setScrollFactor(0);

    this.physics.world.setBounds( 0, 0, large, height );
    this.cameras.main.setBounds(0, 0, large, height);
    this.cameras.main.startFollow(this.player);
  }
  init(){
    console.log('inicio');
    //por si es la pruimera vez q se inicia el juego
    if(this.tiempoTotal==undefined)this.tiempoTotal=0;
    this.tiempo=this.tiempoTotal;
    console.log(this.tiempo);
    
  }
  createAligned(scene, large, texture, scrollFactor)
  {
    const w = scene.textures.get(texture).getSourceImage().width;
    const cant = Math.ceil(large/w)*scrollFactor;

    let x=0;

    for(let i=0; i<cant; i++){
      const b = scene.add.image(x, scene.scale.height, texture)
      .setOrigin(0,1)
      .setScrollFactor(scrollFactor);

      x+=b.width;
    }
  }  
  bandagePickt(){
    this.player.bandageEffect();
  }
  /**
   * metodo para crear las alcantarillas , poner en orden creciente es decir de menor posicion a mas adelante
  */
  createSewer(h){
    this.groupAlcantarillas.add(new Sewer(this,this.player,2000,h, 'alcantarilla'));     
    this.groupAlcantarillas.add(new Sewer(this,this.player,2500,h,'alcantarilla'));
    this.groupAlcantarillas.add(new Sewer(this,this.player,3500,h,'alcantarilla'));
  }
  UltimaSobrePasada(){
    let w=this.groupAlcantarillas.getChildren();let desplazamiento=175

    for(let i=this.groupAlcantarillas.getLength()-1 ;i>-1;i--){     
     if(w[i].isPassed()){
       return w[i].getPos()-desplazamiento;
      }
    }
    return w[0].getPos()-desplazamiento;
  }
  
  update(t,dt){ 
    this.soundtrack.resume();   
    this.tiempoTotal=t;    
    let x=parseInt((t-this.tiempo)/1000);
    this.label.text=('Time: ' + x);
  }
  
}