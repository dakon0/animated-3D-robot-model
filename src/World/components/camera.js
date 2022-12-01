import { PerspectiveCamera } from "../../../node_modules/three/build/three.module.js";

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  // move the camera back so we can view the scene
  camera.position.set(0, 3, 15);

  return camera;
}

export { createCamera };
