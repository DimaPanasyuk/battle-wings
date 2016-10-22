import {
  Vector3
} from 'three';

import {
  renderer,
  scene,
  camera
} from './create-scene';

import { plane } from './objects/plane/init';
import { ground } from './objects/ground/init';

// Remove this from here
const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

let keyUpActive: boolean = false;
let keyDownActive: boolean = false;
let keyLeftActive: boolean = false;
let keyRightActive: boolean = false;


window.addEventListener('mousemove', handleMouseMove, false);
window.addEventListener('keydown', handleKeyDown, false);
window.addEventListener('keyup', handleKeyUp, false);

export function loop() {
  plane.propeller.rotation.z += 0.6;
  renderer.render(scene, camera);
	requestAnimationFrame(loop);
}

function handleMouseMove({ clientX, clientY}) {
  let vector = new Vector3();
  vector.set(
      ( clientX / window.innerWidth ) * 2 - 1,
      - ( clientY / window.innerHeight ) * 2 + 1,
      0.5 );
  vector.unproject( camera );
  let dir = vector.sub( camera.position ).normalize();
  let distance = - camera.position.z / dir.z;
  let pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
  pos.z = -500;
  plane.mesh.lookAt(pos);
  camera.lookAt(pos);
}

function handleKeyDown(ev) {
  switch(ev.keyCode) {
    case KEY_UP:
      keyUpActive = true;
      break;
    case KEY_DOWN:
      keyUpActive = true;
      break;
    case KEY_LEFT:
      keyLeftActive = true;
      break;
    case KEY_RIGHT:
      keyRightActive = true;
      break;
    default:
  }
}

function handleKeyUp(ev) {
  switch(ev.keyCode) {
    case KEY_UP:
      keyUpActive = false;
      break;
    case KEY_DOWN:
      keyUpActive = false;
      break;
    case KEY_LEFT:
      keyLeftActive = false;
      break;
    case KEY_RIGHT:
      keyRightActive = false;
      break;
    default:
  }
}
  // if (keyUpActive) {
  //   plane.mesh.rotation.x += 0.1;
  // }
  // if (keyDownActive) {
  //   plane.mesh.rotation.x -= 0.1;
  // }
  // if (keyLeftActive) {
  //   plane.mesh.rotation.y += 0.1;
  // }
  // if (keyRightActive) {
  //   plane.mesh.rotation.y -= 0.1;
  // }