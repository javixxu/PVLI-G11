export default class Obstacles extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, name)
    {
        super(scene, x, y, name);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.scene.physics.add.collider(this, this.scene.player);
    }
    preUpdate() {
        super.preUpdate();
    }
}