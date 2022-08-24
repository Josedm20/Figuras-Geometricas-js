//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x127890);

{
	const color = 0x000000;
	const near = 1;
	const far = 25;
	const density = 10;
	scene.fog = new THREE.Fog(color, near, far, density);
}


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.ConeGeometry( 3, 5, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 10;
camera.position.x = 0;
camera.position.y = 0;


//animacion
function animate() {
	requestAnimationFrame( animate );

	cone.rotation.y += 0.07;

	renderer.render( scene, camera );
};
animate();