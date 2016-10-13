import {
  Object3D,
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  FlatShading
} from 'three';

import { config } from '../../config';

export class Plane {
  constructor() {
    this.mesh = new Object3D();

    let bodyGeometry = new BoxGeometry(60, 50, 50);
    let bodyMaterial = new MeshPhongMaterial({ color: config.colors.red, shading: FlatShading});
    let body = new Mesh(bodyGeometry, bodyMaterial);
    body.castShadow = true;
    body.receiveShadow = true;
    this.mesh.add(body);

    let glassGeomentry = new BoxGeometry(2, 20, 48);
    let glassMaterial = new MeshPhongMaterial({
      color: config.colors.white,
      shading: FlatShading,
      opacity: 0.1
    });
    let glass = new Mesh(glassGeomentry, glassMaterial);
    glass.position.x = 20;
    glass.position.y = 33;
    glass.rotateZ(0.2);
    glass.castShadow = true;
    glass.receiveShadow = true;
    this.mesh.add(glass);

    let engineGeometry = new BoxGeometry(10, 50, 50);
    let engineMaterial = new MeshPhongMaterial({color: config.colors.black, shading: FlatShading});
    let engine = new Mesh(engineGeometry, engineMaterial);
    engine.position.x = 35;
    this.mesh.add(engine);

    let pipeGeometry = new BoxGeometry(5, 5, 10);
    let pipeMaterial = new MeshPhongMaterial({color: config.colors.blue, shading: FlatShading});
    let pipe = new Mesh(pipeGeometry, pipeMaterial);
    pipe.position.x = 42;
    this.mesh.add(pipe);

    let propellerGeometry = new BoxGeometry(5, 5, 80);
    let propellerMaterial = new MeshPhongMaterial({color: config.colors.black, shading: FlatShading});
    this.propeller = new Mesh(propellerGeometry, propellerMaterial);
    this.propeller.position.x = 46;
    this.mesh.add(this.propeller);

    let wingsGeometry = new BoxGeometry(40, 5, 130);
    let wingsMaterial = new MeshPhongMaterial({color: config.colors.brown, shading: FlatShading});
    this.wings = new Mesh(wingsGeometry, wingsMaterial);
    this.wings.rotateZ(0.06);
    this.mesh.add(this.wings);

    let tailGeometry = new BoxGeometry(20, 20, 20);
    let tailMaterial = new MeshPhongMaterial({color: config.colors.red, shading: FlatShading});
    this.tail = new Mesh(tailGeometry, tailMaterial);
    this.tail.position.x = -36;
    this.tail.position.y = 20;
    this.mesh.add(this.tail);
  }
}