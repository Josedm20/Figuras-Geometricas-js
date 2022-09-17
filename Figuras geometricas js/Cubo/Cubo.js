//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../img/toronto.jpg', function(texture){
    scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    
camera.position.z = 15;
camera.position.x = 0;
camera.position.y = 1;

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshMatcapMaterial( {} );
const cube1 = new THREE.Mesh( geometry, material );
cube1.position.set(-6, -1, 1)

const cube2 = new THREE.Mesh( geometry, material);
cube2.position.set(5, 4, 1);

const cube3 = new THREE.Mesh( geometry, material);
cube3.position.set(6, -1, 1);

const cube4 = new THREE.Mesh( geometry, material);
cube4.position.set(-5, 4, 1);

scene.add(cube1, cube2, cube3, cube4)

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../img/luna.jpg');
material.matcap = matcap;
material.flatShading = true;

//controles

let objects = [cube1, cube2, cube3, cube4]

const dcontrol = new THREE.DragControls(objects, camera, renderer.domElement);
dcontrol.addEventListener('hoveron', function(event){
    event.object.material.wireframe = true;
    event.object.scale.y *=4;
});
dcontrol.addEventListener('hoveroff', function(event){
    event.object.material.wireframe = false;
    event.object.scale.y /=4;
});

dcontrol.deactivate();
dcontrol.activate();

const flyControls = new THREE.FlyControls( camera, renderer.domElement);
flyControls.movementSpeed =50;
flyControls.rollSpeed =0.01;
flyControls.autoForward =false;
flyControls.dragToLock =false;

//animacion

function animate() {
    requestAnimationFrame( animate );

    cube2.rotation.x += 0.02;
    cube2.rotation.y += 0.01;

    cube1.rotation.x += 0.02;
    cube1.rotation.y += 0.01;

    flyControls.update(0.2);
    
    renderer.render( scene, camera );
}
animate();  