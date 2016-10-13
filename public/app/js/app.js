// import * as three from 'three';

import { createScene } from './create-scene';
import { createLights } from './create-lights';
import { loop } from './loop';

import { createGround } from './objects/ground/init';
import { createPlane } from './objects/plane/init';

window.addEventListener('load', init, false);

function init() {

  createScene();

  createLights();

  // createGround();

  createPlane();

  loop();

  console.log('App initialization :: done');
}

