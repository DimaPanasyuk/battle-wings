import { Object3D, BoxGeometry, MeshPhongMaterial } from 'three';

export class Sky {
  mesh: Object3D;
  constructor() {
    this.mesh = new THREE.Object3D();
  }
}