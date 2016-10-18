import { Vector3 } from 'three';

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
  plane.propeller.rotation.x += 0.1;
  renderer.render(scene, camera);
	requestAnimationFrame(loop);
}

function handleMouseMove(ev) {

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