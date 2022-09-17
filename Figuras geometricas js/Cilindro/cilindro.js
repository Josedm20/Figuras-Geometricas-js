//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../img/cielo.jpg', function(texture){
	scene.background = texture;
})

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.z = 40;
camera.position.x = 0.5;
camera.position.y = 0;

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material = new THREE.MeshMatcapMaterial( {} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../img/madera.jpg');
material.matcap = matcap;
material.flatShading = true;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000} ) );
scene.add( line );

//animacion
function animate() {
	requestAnimationFrame( animate );

	cylinder.rotation.x += 0.02;
	cylinder.rotation.y += 0.02;
	line.rotation.y += 0.02;
	line.rotation.x += 0.02;

	renderer.render( scene, camera );
};
animate();