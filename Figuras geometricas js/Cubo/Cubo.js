//escenario
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../img/toronto.jpg', function(texture){
	scene.background = texture;
})


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 8;
camera.position.x = 0.5;
camera.position.y = -0.5;


//animacion
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	renderer.render( scene, camera );
};
animate();