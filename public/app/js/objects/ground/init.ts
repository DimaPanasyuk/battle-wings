import { Ground } from './ground';
import { scene } from '../../create-scene';

export let ground;

export function createGround() {
  ground = new Ground(400, 400);
  ground.mesh.position.y = 100;
  ground.mesh.rotateX(-1.1);
  scene.add(ground.mesh);
}