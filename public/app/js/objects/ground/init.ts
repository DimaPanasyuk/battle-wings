import { Ground } from './ground';
import { scene } from '../../create-scene';

export let ground;

export function createGround() {
  ground = new Ground(1000, 1000);
  ground.mesh.position.y = 0;
  ground.mesh.rotateX(-1.1);
  scene.add(ground.mesh);
}