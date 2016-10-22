import {
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  FlatShading
} from 'three';

import { config } from '../../../config';

let tailGeometry = new BoxGeometry(7, 40, 20);
let tailMaterial = new MeshPhongMaterial({color: config.colors.red, shading: FlatShading});
let tail = new Mesh(tailGeometry, tailMaterial);
tail.position.z = -36;
tail.position.y = 10;

export { tail };