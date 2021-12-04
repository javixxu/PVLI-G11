import Obstacles from "./obstacles.js";

export default class Spikes extends Obstacles
{
    constructor(scene, player, x, y, name) {
        super(scene, x, y, name);
        this.player=player;
    }
    preUpdate() {
        super.preUpdate();
        
         if (this.scene.physics.overlap(this.player, this)) {
            this.effect();
        }
    }
    effect(){
        this.player.playerDamage(0.5);
        this.player.changeInvulnerability()
    }
        
}
