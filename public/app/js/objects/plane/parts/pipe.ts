import {
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  FlatShading
} from 'three';

import { config } from '../../../config';


let pipeGeometry = new BoxGeometry(5, 5, 10);
let pipeMaterial = new MeshPhongMaterial({color: config.colors.blue, shading: FlatShading});
let pipe = new Mesh(pipeGeometry, pipeMaterial);
pipe.position.z = 35;

export { pipe };