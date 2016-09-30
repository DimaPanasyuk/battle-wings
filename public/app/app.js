(function() {
  var kf = 0.0005;
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( 800, 640 );
  document.body.appendChild( renderer.domElement );

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(35, 800 / 640, 0.1, 10000);
  camera.position.set( -15, 10, 15 );
  camera.lookAt( scene.position );

  var geometry = new THREE.BoxGeometry( 5, 5, 5 );
  var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
  var mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  var map = new THREE.TextureLoader().load('assets/plane.jpg');
  var material1 = new THREE.SpriteMaterial( { map: map, color: 0xffffff, fog: true } );
  var sprite = new THREE.Sprite(material1);
  scene.add(sprite);

  var light = new THREE.PointLight( 0xFFFFFF );
  light.position.set( 10, 0, 10 );
  scene.add( light );


  renderer.setClearColor( 0xdddddd, 1);
  var render = function() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
  };
  render();
})();


