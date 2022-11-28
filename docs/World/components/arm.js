import {
    Mesh,
    MeshStandardMaterial,
    MathUtils,
    CylinderGeometry
} from "../../../node_modules/three/build/three.module.js";
import { createTrapezium } from "./trapezium.js"

function createArm() {
    const cilinderLeftGeometry = new CylinderGeometry(0.4, 0.4, 0.2, 32, 1, false, 0, 3.14);
    const cilinderRightGeometry = new CylinderGeometry(0.1, 0.1, 0.2, 32, 1, false, 0, 3.14);

    const material = new MeshStandardMaterial({ color: "grey" });
    const cilinderRight = new Mesh(cilinderRightGeometry, material);
    const cilinderLeft = new Mesh(cilinderLeftGeometry, material);

    const trapezium = createTrapezium();
    
    cilinderLeft.rotation.x = MathUtils.degToRad(90);
    cilinderLeft.rotation.y = MathUtils.degToRad(180);
    trapezium.rotation.x = MathUtils.degToRad(-90);
    trapezium.rotation.y = MathUtils.degToRad(-180);
    trapezium.position.x = -1;
    cilinderRight.rotation.y = MathUtils.degToRad(180);
    cilinderRight.position.x = -2;
      
    const arm = cilinderLeft;
    arm.add(trapezium, cilinderRight);

    return arm;
}

export { createArm };