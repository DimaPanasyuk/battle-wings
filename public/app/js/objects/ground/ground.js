import {
  PlaneGeometry,
  MeshPhongMaterial,
  Mesh,
  FlatShading
} from 'three';

export class Ground {
  constructor(width, height) {
    let object = new PlaneGeometry(width, height);
    let material = new MeshPhongMaterial({
      color: 0x68c3c0,
      transparent: true,
      opacity: 0.6,
      shading: FlatShading
    });
    this.mesh = new Mesh(object, material);
    this.mesh.receiveShadow = true;
  }
}