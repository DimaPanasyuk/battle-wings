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
const KEY_UP: number = 87;
const KEY_DOWN: number = 83;
const KEY_LEFT: number = 65;
const KEY_RIGHT: number = 68;
const KEY_SPACE: number = 32;

let keyUpActive: boolean = false;
let keyDownActive: boolean = false;
let keyLeftActive: boolean = false;
let keyRightActive: boolean = false;
let keySpaceActive: boolean = false;

window.addEventListener('mousemove', handleMouseMove, false);
window.addEventListener('keydown', handleKeyDown, false);
window.addEventListener('keyup', handleKeyUp, false);

export function loop() {

  if (keyLeftActive) {
    plane.moveLeft();
  }

  if (keyRightActive) {
    plane.moveRight();
  }

  if (!keyLeftActive && !keyRightActive) {
    plane.centerTail();
  }

  if (keySpaceActive) {
    plane.shoot();
  }

  if (keyUpActive) {
    plane.move();
  }

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
  let posCamera = camera.position.clone().add( dir.multiplyScalar( distance ) );
  let posPlane = camera.position.clone().add( dir.multiplyScalar( distance ) );
  posCamera.z = -2500;
  posPlane.z = -20000;
  plane.mesh.lookAt(posPlane);
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
    case KEY_SPACE:
      keySpaceActive = true;
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
    case KEY_SPACE:
      keySpaceActive = false;
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