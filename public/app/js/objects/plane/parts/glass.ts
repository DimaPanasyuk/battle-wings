import {
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  FlatShading
} from 'three';

import { config } from '../../../config';

let glassGeomentry = new BoxGeometry(2, 20, 38);
let glassMaterial = new MeshPhongMaterial({
  color: config.colors.white,
  shading: FlatShading,
  opacity: 0.1
});
let glass = new Mesh(glassGeomentry, glassMaterial);
glass.position.z = 10;
glass.position.y = 23;
glass.rotateX(-0.2);
glass.rotateY(-1.6);
glass.castShadow = true;
glass.receiveShadow = true;

export { glass };