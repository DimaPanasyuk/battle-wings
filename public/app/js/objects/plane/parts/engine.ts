import {
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  FlatShading
} from 'three';

import { config } from '../../../config';

let engineGeometry = new BoxGeometry(42, 42, 10);
let engineMaterial = new MeshPhongMaterial({color: config.colors.black, shading: FlatShading});
let engine = new Mesh(engineGeometry, engineMaterial);
engine.position.z = 30;

export { engine };