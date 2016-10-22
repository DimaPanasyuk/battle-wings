import {
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  FlatShading
} from 'three';

import { config } from '../../../config';

let bodyGeometry = new BoxGeometry(40, 40, 60);
let bodyMaterial = new MeshPhongMaterial({ color: config.colors.red, shading: FlatShading});
let body = new Mesh(bodyGeometry, bodyMaterial);
body.castShadow = true;
body.receiveShadow = true;

export { body };