import {
  renderer,
  scene,
  camera
} from './create-scene';

import { Vector3 } from 'three';


// Remove this from here
const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

import { ground } from './objects/ground/init';
import { plane } from './objects/plane/init';

window.addEventListener('mousemove', handleMouseMove, false);
window.addEventListener('keydown', handleKeyDown, false);
window.addEventListener('keyup', handleKeyUp, false);

export function loop() {
  // var time = Date.now() * 0.0005;
  // plane.mesh.lookAt({
  //   x: Math.sin(time * 0.7) * 2000,
  //   y: Math.cos(time * 0.5) * 2000,
  //   z: Math.cos(time * 0.3) * 2000
  // });
  plane.propeller.rotation.x += 0.1;
  renderer.render(scene, camera);
	requestAnimationFrame(loop);
}

function handleMouseMove(ev) {

}

function handleKeyDown(ev) {
  switch(ev.keyCode) {
    case KEY_UP:
      plane.propeller.rotation.x += 0.7;
      plane.mesh.position.z -= 2;
      break;
    case KEY_DOWN:
      plane.propeller.rotation.x -= 0.2;
      break;
    case KEY_LEFT:
      plane.wings.rotation.z += 0.008;
      break;
    case KEY_RIGHT:
      plane.wings.rotation.z -= 0.008;
      break;
    default:
  }
}

function handleKeyUp() {}