var going=false;
var particleCount;
var 	particlesController = document.getElementById("particlesSelector");
function selectParticles(){
    var c=particlesController.value*100;
    	document.getElementById('particlesInfo').textContent ="Particles per ring: "+c;
    particleCount=c;

}
function start(){
   createPlanet(particleCount);

    render();
    
}
var canvas,
    renderer,
    scene,
    camera;

var particle;
var buf=[];
var keyboard={}; // TASTIERA
    var texture=new THREE.TextureLoader().load('../images/galassia.png');

    var textureA= new THREE.TextureLoader().load('../images/index.jpeg');

    var textureEarth    =new THREE.TextureLoader().load('../images/earthmap1k.jpg');
 var uniforms = {
        time: {value: 0.0},
        textureAsteroid:{value:textureA}
    };
var choiche;
//buf[particleCount]=particle;
$(function() {
    init();
    
        
    
});
function init(){
    console.log("INIT");
    // grab the container from the DOM
    canvas = document.getElementById("canvas");


    // load texture


    // create scene camera light
    scene = new THREE.Scene();
        scene.background=texture;

    camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        10000
    );
    camera.position.z = 150;
    camera.position.y=30;
    camera.position.x=-30;

    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 0, 1 ).normalize();
    scene.add(light);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    canvas.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;




}
function createPlanet(count){
        console.log("CREATE");


   

    // create a wireframe material
    var shaderMaterial = new THREE.ShaderMaterial( {
        uniforms:     uniforms,
        vertexShader:   document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
        blending:       THREE.AdditiveBlending,
        depthTest:      false,
        transparent:    true
    });
    var material = new THREE.MeshBasicMaterial( { map: textureEarth, overdraw: 0.5 } );
    var geometry   = new THREE.SphereGeometry(10, 32, 32);
    var earthMesh = new THREE.Mesh(geometry, material);
    scene.add(earthMesh);
    var geometryt   = new THREE.SphereGeometry(40,32,32);
    var materialt  = new THREE.MeshLambertMaterial({color: 0x808080, transparent: true, opacity: 0.5});
    var earthMesht = new THREE.Mesh(geometryt, materialt);
    scene.add(earthMesht);
    
    var geometry=new THREE.BufferGeometry();
var vertices=[];
var mov=[];
var coda=[];
var stop=[];
for ( var i = 0; i < count; i ++ ) {
    var a=THREE.Math.randFloat(2,3);
    var b=THREE.Math.randFloat(1,2);
    var c=THREE.Math.randFloat(1,2);
    var theta = THREE.Math.randFloatSpread(180);
    var phi = THREE.Math.randFloatSpread(360);

    //randomize positions
    var x = a* Math.sin(theta) * Math.cos(phi);
    var y = b* Math.sin(theta) * Math.sin(phi);
    var z = c* Math.cos(theta);
    mov.push(THREE.Math.randFloat(-Math.PI/2,Math.PI/2));
    coda.push(THREE.Math.randFloat(0,2*Math.PI));
    stop.push(THREE.Math.randFloat(-1,0));

    vertices.push( x, y, z );
}


geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
geometry.addAttribute( 'alpha',new THREE.Float32BufferAttribute(mov,1));
geometry.addAttribute( 'beta',new THREE.Float32BufferAttribute(coda,1));
geometry.addAttribute( 'stop',new THREE.Float32BufferAttribute(stop,1));

// create a sphere and assign the material
particle = new THREE.Points( geometry, shaderMaterial );
//particles.push(particle);
scene.add(particle);
    buf[particleCount]=particle;


}
function render(){
     renderer.render(scene, camera);
        requestAnimationFrame(render);
        //controls.update();
        // PARTE QUANDO PREMO SPAZIO
        uniforms.time.value += 0.05;
        if(uniforms.time.value>30.0){
                for(var i=0;i<buf.length;i++){
                    scene.remove(buf[i]);
                }
            }
}
