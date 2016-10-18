import { createScene } from './create-scene';
import { createLights } from './create-lights';
import { loop } from './loop';

import { createGround, createPlane } from './objects';

import '../styles/main.less';
// this is comment

window.addEventListener('load', init, false);

function init() {

  createScene();

  createLights();

  // createGround();

  createPlane();

  loop();

  console.log('App initialization :: done');
}

