import { HemisphereLight, DirectionalLight } from 'three';
import { scene } from './create-scene';

export function createLights() {
  let hemisphereLight = new HemisphereLight(0xaaaaaa,0x000000, 0.9);
  let shadowLight = new DirectionalLight(0xffffff, 0.9);

  shadowLight.position.set(150, 350, 350);
  shadowLight.castShadow = true;

  shadowLight.shadow.mapSize.width = 2048;
	shadowLight.shadow.mapSize.height = 2048;

  scene.add(hemisphereLight);
	scene.add(shadowLight);
  console.log(`Lights :: Done`);
}