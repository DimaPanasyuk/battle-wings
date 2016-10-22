import {
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  FlatShading
} from 'three';

import { config } from '../../../config';

let wingsGeometry = new BoxGeometry(120, 2, 40);
let wingsMaterial = new MeshPhongMaterial({color: config.colors.brown, shading: FlatShading});
let wings = new Mesh(wingsGeometry, wingsMaterial);
wings.rotateX(-0.05);

export { wings };