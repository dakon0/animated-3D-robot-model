import {
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MathUtils,
  BufferGeometry,
  BufferAttribute

} from "../../../node_modules/three/build/three.module.js";
function createTrapezium() {
  const vertices = [
    // front
    { pos: [-1, -.4, .1], norm: [0, 0, 1] },
    { pos: [1, -.1, .1], norm: [0, 0, 1] },
    { pos: [-1, .4, .1], norm: [0, 0, 1] },

    { pos: [-1, .4, .1], norm: [0, 0, 1] },
    { pos: [1, -.1, .1], norm: [0, 0, 1] },
    { pos: [1, .1, .1], norm: [0, 0, 1] },
    // right
    { pos: [1, -.1, .1], norm: [1, 0, 0] },
    { pos: [1, -.1, -.1], norm: [1, 0, 0] },
    { pos: [1, .1, .1], norm: [1, 0, 0] },

    { pos: [1, .1, .1], norm: [1, 0, 0] },
    { pos: [1, -.1, -.1], norm: [1, 0, 0] },
    { pos: [1, .1, -.1], norm: [1, 0, 0] },
    // back
    { pos: [-1, .4, -.1], norm: [0, 0, -1] },
    { pos: [1, .1, -.1], norm: [0, 0, -1] },
    { pos: [-1, -.4, -.1], norm: [0, 0, -1] },

    { pos: [-1, -.4, -.1], norm: [0, 0, -1] },
    { pos: [1, .1, -.1], norm: [0, 0, -1] },
    { pos: [1, -.1, -.1], norm: [0, 0, -1] },
    // left
    { pos: [-1, -.4, -.1], norm: [-1, 0, 0] },
    { pos: [-1, -.4, .1], norm: [-1, 0, 0] },
    { pos: [-1, .4, -.1], norm: [-1, 0, 0] },

    { pos: [-1, .4, -.1], norm: [-1, 0, 0] },
    { pos: [-1, -.4, .1], norm: [-1, 0, 0] },
    { pos: [-1, .4, .1], norm: [-1, 0, 0] },
    // top
    { pos: [-1, .4, .1], norm: [0, 1, 0] },
    { pos: [1, .1, .1], norm: [0, 1, 0] },
    { pos: [1, .1, -.1], norm: [0, 1, 0] },

    { pos: [1, .1, -.1], norm: [0, 1, 0] },
    { pos: [-1, .4, -.1], norm: [0, 1, 0] },
    { pos: [-1, .4, .1], norm: [0, 1, 0] },

    // bottom
    { pos: [-1, -.4, -.1], norm: [0, -1, 0] },
    { pos: [1, -.1, -.1], norm: [0, -1, 0] },
    { pos: [-1, -.4, .1], norm: [0, -1, 0] },

    { pos: [-1, -.4, .1], norm: [0, -1, 0] },
    { pos: [1, -.1, -.1], norm: [0, -1, 0] },
    { pos: [1, -.1, .1], norm: [0, -1, 0] },
  ];
  const positions = [];
  const normals = [];
  for (const vertex of vertices) {
    positions.push(...vertex.pos);
    normals.push(...vertex.norm);
  }

  const geometry = new BufferGeometry();

  const positionNumComponents = 3;
  const normalNumComponents = 3;
  geometry.setAttribute(
    'position',
    new BufferAttribute(new Float32Array(positions), positionNumComponents));
  geometry.setAttribute(
    'normal',
    new BufferAttribute(new Float32Array(normals), normalNumComponents));

  const material = new MeshStandardMaterial({ color: "dimgrey" });
  const trapezium = new Mesh(geometry, material);

  return trapezium;
}

export { createTrapezium };
