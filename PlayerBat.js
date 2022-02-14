
/*
class PlayerBat
{
    constructor()
    {
        var geometry = new THREE.BoxGeometry(1, 8, 1);
        var material = new THREE.MeshBasicMaterial( { color: 0x2f23cf } );

        this.targetYPosition = 0;
        this.yPosTick = 0.05;
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.x = -20;

        scene.add(this.mesh);
    }

    Update(deltaTime)
    {
        this.targetYPosition = (cameraHeight / 2) - mouseYPos * (cameraHeight / window.innerHeight);
        
        if (this.mesh.position.y < this.targetYPosition)
        {
            this.mesh.position.y += this.yPosTick * deltaTime;
        }
        else if (this.mesh.position.y > this.targetYPosition)
        {
            this.mesh.position.y -= this.yPosTick * deltaTime;

        }
    };
};
*/

class PlayerBat

{

    constructor(isThisBatAnEnemy, xPosOfTheBatsnStuff)
    {

        var batModel = new THREE.BoxGeometry(1, 8, 1);
        var batMaterial = new THREE.MeshBasicMaterial({ color: 0xf2f2f2 })

        this.targetYPosition = 0;
        this.yPosSpeed = 0.05;
        this.yEnemyPosSpeed = 0.025;

        this.mesh = new THREE.Mesh(batModel, batMaterial);
        this.mesh.position.x = xPosOfTheBatsnStuff;
        this.enemyOrNot = isThisBatAnEnemy;

        scene.add(this.mesh);
    }

    Update(deltaTime)
    {

        switch (this.enemyOrNot)
        {
            case false:

                this.targetYPosition = (cameraHeight / 2) - mouseYPos * (cameraHeight / window.innerHeight);

                if ((this.mesh.position.y) < this.targetYPosition && (Math.abs(this.mesh.position.y - this.targetYPosition) > 1))
                {
                    this.mesh.position.y += (this.yPosSpeed * deltaTime);

                }

                else if ((this.mesh.position.y) > this.targetYPosition && (Math.abs(this.mesh.position.y - this.targetYPosition) > 1)) {

                    this.mesh.position.y -= (this.yPosSpeed * deltaTime);
                }

                break;


            case true:

                this.targetYPosition = currentBallPos.y;

                if (((this.mesh.position.y) < this.targetYPosition) && (currentBallPos.x >= (8) && (Math.abs(this.mesh.position.y - this.targetYPosition) > 1))) {
                    this.mesh.position.y += (this.yEnemyPosSpeed * deltaTime);

                }

                else if ((this.mesh.position.y) > this.targetYPosition && (currentBallPos.x >= (8) && (Math.abs(this.mesh.position.y - this.targetYPosition) > 1))) {

                    this.mesh.position.y -= (this.yEnemyPosSpeed * deltaTime);
                }

                break;

        }

    }

}