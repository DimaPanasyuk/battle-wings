import { Scene, Fog, PerspectiveCamera, WebGLRenderer } from 'three';

export let scene = new Scene();
export let renderer;
export let camera;

export function createScene() {
  let container = document.getElementById('world');
  let width = window.innerWidth;
  let height = window.innerHeight;
  let aspectRatio = width / height;
  let fieldOfView = 60;
  let nearPlane = 1;
  let farPlane = 10000;

  camera = new PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );

  camera.position.x = 0;
  camera.position.y = 115;
  camera.position.z = 210;

  scene.fog = new Fog(0xf7d9aa, 100, 950);

  renderer = new WebGLRenderer({ alpha: true });
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  container.appendChild(renderer.domElement);

  window.addEventListener('resize', handleWindowResize, false);

  console.log(`Scene :: Done`);

  // Help functions
  function handleWindowResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}
