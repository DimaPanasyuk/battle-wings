import {
  Object3D,
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  FlatShading
} from 'three';

import { config } from '../../config';

export class Plane {
  mesh: Object3D;
  propeller: Mesh;
  wings: Mesh;
  tail: Mesh;
  constructor() {
    this.mesh = new Object3D();

    let bodyGeometry = new BoxGeometry(40, 40, 60);
    let bodyMaterial = new MeshPhongMaterial({ color: config.colors.red, shading: FlatShading});
    let body = new Mesh(bodyGeometry, bodyMaterial);
    body.castShadow = true;
    body.receiveShadow = true;
    this.mesh.add(body);

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
    this.mesh.add(glass);

    let engineGeometry = new BoxGeometry(42, 42, 10);
    let engineMaterial = new MeshPhongMaterial({color: config.colors.black, shading: FlatShading});
    let engine = new Mesh(engineGeometry, engineMaterial);
    engine.position.z = 30;
    this.mesh.add(engine);

    let pipeGeometry = new BoxGeometry(5, 5, 10);
    let pipeMaterial = new MeshPhongMaterial({color: config.colors.blue, shading: FlatShading});
    let pipe = new Mesh(pipeGeometry, pipeMaterial);
    pipe.position.z = 35;
    this.mesh.add(pipe);

    let propellerGeometry = new BoxGeometry(7, 87, 5);
    let propellerMaterial = new MeshPhongMaterial({color: config.colors.black, shading: FlatShading});
    this.propeller = new Mesh(propellerGeometry, propellerMaterial);
    this.propeller.position.z = 40;
    this.mesh.add(this.propeller);

    let wingsGeometry = new BoxGeometry(120, 2, 40);
    let wingsMaterial = new MeshPhongMaterial({color: config.colors.brown, shading: FlatShading});
    this.wings = new Mesh(wingsGeometry, wingsMaterial);
    this.wings.rotateX(-0.05);
    this.mesh.add(this.wings);

    let tailGeometry = new BoxGeometry(7, 40, 20);
    let tailMaterial = new MeshPhongMaterial({color: config.colors.red, shading: FlatShading});
    this.tail = new Mesh(tailGeometry, tailMaterial);
    this.tail.position.z = -36;
    this.tail.position.y = 10;
    this.mesh.add(this.tail);
  }
}