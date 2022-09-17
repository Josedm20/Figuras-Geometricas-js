//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../img/volcan.jpg', function(texture){
	scene.background = texture;
})

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.z = 8;
camera.position.x = 0.5;
camera.position.y = 0;

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.CapsuleGeometry( 2, 3, 4, 8 );
const material = new THREE.MeshStandardMaterial( {color: 0x0000FF} );
const capsule = new THREE.Mesh( geometry, material );
material.metalness = 0.4;
material.roughness = 0.5;
scene.add( capsule );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 10 );
scene.add( directionalLight );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000} ) );
scene.add( line );

//animacion
function animate() {
	requestAnimationFrame( animate );

	capsule.rotation.x += 0.02;
	capsule.rotation.y += 0.02;
	line.rotation.y += 0.02;
	line.rotation.x += 0.02;

	renderer.render( scene, camera );
};
animate();

