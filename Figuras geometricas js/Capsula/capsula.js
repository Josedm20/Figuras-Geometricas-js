//escena
const scene = new THREE.Scene();

{
	const color = 0x000000;
	const near = 1;
	const far = 20;
	const density = 90;
	scene.fog = new THREE.Fog(color, near, far, density);
}

scene.background = new THREE.Color(0x660033);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.CapsuleGeometry( 2, 3, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0xFFFF00} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 8;
camera.position.x = 0.5;
camera.position.y = 0;


//animacion
function animate() {
	requestAnimationFrame( animate );

	capsule.rotation.x += 0.02;
	capsule.rotation.y += 0.02;

	renderer.render( scene, camera );
};
animate();

