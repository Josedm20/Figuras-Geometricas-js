//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../img/desierto.jpg', function(texture){
	scene.background = texture;
})


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.x = 0;
camera.position.y = -9;
camera.position.z = 20;

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 2, 1, 10, 40 );
const material = new THREE.MeshMatcapMaterial( {} );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../img/agua.jpg');
material.matcap = matcap;
material.flatShading = true;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000} ) );
scene.add( line );

//animacion
function animate() {
	requestAnimationFrame( animate );

	torus.rotation.y += 0.05;
	line.rotation.y += 0.05;

	renderer.render( scene, camera );
};
animate();