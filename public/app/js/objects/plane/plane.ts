import {
  Object3D,
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  FlatShading,
  Vector3,
  Matrix4
} from 'three';

import { config } from '../../config';
import { camera } from '../../create-scene';

import {
  body,
  engine,
  glass,
  pipe,
  propeller,
  tail,
  wings
} from './parts';

export class Plane {
  mesh: Object3D;
  propeller: Mesh;
  wings: Mesh;
  tail: Mesh;
  constructor() {
    this.mesh = new Object3D();
    this.mesh.add(body);
    this.mesh.add(glass);
    this.mesh.add(engine);
    this.mesh.add(pipe);

    this.propeller = propeller;
    this.mesh.add(this.propeller);

    this.wings = wings;
    this.mesh.add(this.wings);

    this.tail = tail;
    this.mesh.add(this.tail);
  }

  moveLeft() {
    this.tail.rotation.y = -0.4;
  }
  moveRight() {
    this.tail.rotation.y = 0.4;
  }
  centerTail() {
    this.tail.rotation.y = 0;
  }

  move() {

    // This code will get current look at of our plane
    let matrix = new Matrix4();
    let vector = new Vector3( 0, 0, 1 );
    matrix.extractRotation(this.mesh.matrix);
    let direction = vector.applyMatrix4(matrix );
    this.mesh.position.x += direction.x * 2;
    this.mesh.position.y += direction.y * 2;
    this.mesh.position.z -= 0.2;
  }

  shoot() {
    console.log('Paf-paf -- Paf-paf');
  }

  // Implement fn that will center Plane
  // and its details (tail, wings) after some manipulations
}