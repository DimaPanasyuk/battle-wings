import { Sky } from './sky';
import { scene } from '../../create-scene';

export function createSky() {
  let sky = new Sky();
  sky.mesh.position.y = 0;
  scene.add(sky.mesh);
}