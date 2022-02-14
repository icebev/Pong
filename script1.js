//// Start & Initialization ////
var previousTimeStamp = 0;
let scene, camera, renderer, cube;
var cameraHeight;
var playerScore = 0;
var enemyScore = 0;
var bat1, bat2, mouseYPos, currentBallPos, userInterface, ctx;

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) 
{
    mouseYPos = e.clientY; 
};

// Called before game start
function Start() 
{
    // Scene, camera and renderer
    scene = new THREE.Scene();
    cameraHeight = 45;
    const cameraWidth = ( window.innerWidth / window.innerHeight ) * cameraHeight;
    camera = new THREE.OrthographicCamera( cameraWidth / - 2, cameraWidth / 2, cameraHeight / 2, cameraHeight / - 2, 1, 1000 );
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer({antialiasing: true});
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );
    
    // Add lighting
    hlight = new THREE.AmbientLight (0x404040,100);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff,100);
    directionalLight.position.set(0,100,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Set up a simple wireframe cube
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshBasicMaterial( { color: 0x2f23cf } );

    cube = new THREE.Mesh(geometry, material);
    cube.material.wireframe = true;
    cube.material.wireframe.wireframeLinewidth = 10;
    cube.position.x = 0;

    scene.add(cube);

    bat1 = new PlayerBat(false, -20);
    bat2 = new PlayerBat(true, 20);
    ball = new Ball();
    
    userInterface = new GameUI();

};

// Called every frame
function Update(deltaTime)
{
    cube.rotation.x += 0.001 * deltaTime;
    cube.rotation.y += 0.001 * deltaTime;
    ball.Update(deltaTime);
    currentBallPos = ball.mesh.position.clone();
    console.log(currentBallPos);
    bat1.Update(deltaTime);
    bat2.Update(deltaTime);

    ball.DetectCollision(bat1, bat2);
    //console.log(bat1.position.distanceToSquared(ball.position));
};

// Draw the scene
function Render()
{
    renderer.render(scene, camera);
    userInterface.DrawScore();
};

// The animation loop (once per frame);
function animate(timeStamp) {
    var deltaTime = timeStamp - previousTimeStamp;
    requestAnimationFrame(animate);
    Update(deltaTime);
    Render();
    previousTimeStamp = timeStamp;

}

Start();
animate(0);