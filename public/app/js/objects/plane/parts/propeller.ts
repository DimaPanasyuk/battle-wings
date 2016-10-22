import {
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  FlatShading
} from 'three';

import { config } from '../../../config';

let propellerGeometry = new BoxGeometry(7, 87, 5);
let propellerMaterial = new MeshPhongMaterial({color: config.colors.black, shading: FlatShading});
let propeller = new Mesh(propellerGeometry, propellerMaterial);
propeller.position.z = 40;

export { propeller };