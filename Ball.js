class Ball
{
    constructor()
    {
        this.velocity = new THREE.Vector3(0.025, 0, 0);

        var geometry = new THREE.SphereGeometry(1, 10, 10);
        var material = new THREE.MeshBasicMaterial( { color: 0x2f23cf } );
        
        this.mesh = new THREE.Mesh(geometry, material);
        scene.add(this.mesh);
    }

    Update(deltaTime)
    {
        var frameDisp = this.velocity.clone().multiplyScalar(deltaTime);
        this.mesh.position.add(frameDisp);
        
    }

    DetectCollision(batOne, batTwo)
    {
        var bat1Pos = batOne.mesh.position.clone()
        var bat2Pos = batTwo.mesh.position.clone()

        console.log(bat1Pos);
        if (Math.abs(this.mesh.position.x - bat1Pos.x) < 1 && Math.abs(this.mesh.position.y - bat1Pos.y) < 4)
        {
            if (this.velocity.x < 0) 
            {
                this.velocity.x = -(this.velocity.x * 1.05);
            }
            this.velocity.y = -0.0125 + Math.random() * 0.025;
        }

        if (Math.abs(this.mesh.position.x - bat2Pos.x) < 1 && Math.abs(this.mesh.position.y - bat2Pos.y) < 4)
        {
            if (this.velocity.x > 0) 
            {
                this.velocity.x = -(this.velocity.x * 1.05);
            }
            this.velocity.y = -0.0125 + Math.random() * 0.025;
        }

        if (this.mesh.position.y > 15) 
        {
            if (this.velocity.y > 0) 
            {
                this.velocity.y = -this.velocity.y;
            }
        }

        if (this.mesh.position.y < -15) 
        {
            if (this.velocity.y < 0) 
            {
                this.velocity.y = -this.velocity.y;
            }
        }

        if (this.mesh.position.x > 35) 
        {
            playerScore++;
            this.ResetBall();
        }

        if (this.mesh.position.x < -35) 
        {
            enemyScore++;
            this.ResetBall();
        }

    }

    ResetBall()
    {
        this.mesh.position.x = 0;
        this.mesh.position.y = 0;
        this.velocity = new THREE.Vector3(0.025, 0, 0);

    }
}