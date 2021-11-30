import Enemies from "./enemies.js";
/**
 * Clase que representa el cuervo.
 */
export default class Crow extends Enemies {
 
   constructor(scene, player, x, y, name) {
    super(scene, player, x, y, name);
    
    this.scene.physics.add.existing(this);
    this.body.allowGravity = false;
    this.body.setCollideWorldBounds();
    this.play('raven_right');
    this.scene.tweens.add({
      targets: this,
      x:1000,
      duration:1700,
      ease: 'Sine.easeInOut',
      flipX: true,
      yoyo: true,
      repeat: -1,
    })
  }
  /**
   * Métodos preUpdate de Phaser. Se encarga de mover y animar al cuervo
   */
  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    this.crowAttack();
    
  }
  crowAttack(){
    this.scene.physics.moveToObject(this,this.scene.player,300);
  }
  
}