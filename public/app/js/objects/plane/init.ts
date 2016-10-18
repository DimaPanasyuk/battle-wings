import { scene } from '../../create-scene';
import { Plane } from './plane';

export let plane;

export function createPlane() {
  plane = new Plane();
  plane.mesh.position.y = 100;
  scene.add(plane.mesh);
}