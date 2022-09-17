//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../img/atardecer.jpg', function(texture){
	scene.background = texture;
})

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.z = 50;
camera.position.x = 0.5;
camera.position.y = 0;

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshNormalMaterial( {} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
material.flatShading = true;


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000} ) );
scene.add( line );

//animacion
function animate() {
	requestAnimationFrame( animate );

	sphere.rotation.x += 0.02;
	sphere.rotation.y += 0.02;
	line.rotation.y += 0.02;
	line.rotation.x += 0.02;

	renderer.render( scene, camera );
};
animate();