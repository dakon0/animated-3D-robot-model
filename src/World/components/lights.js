import {
  DirectionalLight,
  SpotLight,
  PointLight,
  RectAreaLight,
} from "three";

function createLights() {
  const light = new DirectionalLight("white", 8);

  light.position.set(0, 5, 5);


  return light;
}

export { createLights };
