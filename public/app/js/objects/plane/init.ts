import { scene } from '../../create-scene';
import { Plane } from './plane';

export let plane;

export function createPlane() {
  plane = new Plane();
  plane.mesh.lookAt({x: 0, y: 100, z: -500});
  plane.mesh.position.y = 100;
  scene.add(plane.mesh);
}