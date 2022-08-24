//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x140848);

var loader = new THREE.TextureLoader();
loader.load('../img/desierto.jpg', function(texture){
	scene.background = texture;
})


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 2, 1, 10, 40 );
const material = new THREE.MeshBasicMaterial( { color: 0xFFCC00} );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.x = 0;
camera.position.y = -9;
camera.position.z = 20;


//animacion
function animate() {
	requestAnimationFrame( animate );

	torus.rotation.y += 0.05;

	renderer.render( scene, camera );
};
animate();