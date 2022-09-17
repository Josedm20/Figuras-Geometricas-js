//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../img/espacio.jpg', function(texture){
    scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.z = 10;
camera.position.x = 0;
camera.position.y = 0;

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.ConeGeometry( 3, 5, 10 );
const material = new THREE.MeshMatcapMaterial( {} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../img/papel.jpg');
material.matcap = matcap;
material.flatShading = true;


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000} ) );
scene.add( line );

//animacion
function animate() {
	requestAnimationFrame( animate );

	cone.rotation.y += 0.07;
	line.rotation.y += 0.07;

	renderer.render( scene, camera );
};
animate();