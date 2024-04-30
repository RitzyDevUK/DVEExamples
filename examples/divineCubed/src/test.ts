import {
  ActionManager,
  AnimationPropertiesOverride,
  ArcRotateCamera,
  Axis,
  Engine,
  ExecuteCodeAction,
  FreeCamera,
  HavokPlugin,
  HemisphericLight,
  MeshBuilder,
  PhysicsAggregate,
  PhysicsMotionType,
  PhysicsShapeType,
  Scene,
  SceneLoader,
  Tools,
  Vector3,
} from "@babylonjs/core";

import HavocPhysics from "@babylonjs/havok";
import { RenderNodes } from "Classes";
// letiables
let idleRange: any,
  walkRange: any,
  runRange: any,
  leftRange: any,
  rightRange: any;
let skeleton: any;

export const createPhysics = async (
  engine: Engine,
  scene: Scene,
  nodes: RenderNodes
) => {
  const h = await HavocPhysics({
    locateFile: () => `HavokPhysics.wasm`,
  });
  // initialize plugin]
  let hk = new HavokPlugin(true, h);

  // enable physics in the scene with a gravity
  scene.enablePhysics(new Vector3(0, -9.8, 0), hk);

  nodes.core.renderer.observers.meshCreated.subscribe(
    "physics",
    ({ _mesh }) => {
      let mesh = new PhysicsAggregate(
        _mesh,
        PhysicsShapeType.MESH,
        { mass: 0, restitution: 0 },
        scene
      );
    }
  );
};

// Create Scene
export const createPlayer = async (engine: Engine, scene: Scene) => {
  // This creates and positions a free camera (non-mesh)
  let camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(engine.getRenderingCanvas()!, true);

  SceneLoader.ImportMesh(
    "",
    "/",
    "dummy3.babylon",
    scene,
    function (newMeshes, particleSystems, skeletons) {
      skeleton = skeletons[0];

      // ROBOT
      skeleton.animationPropertiesOverride = new AnimationPropertiesOverride();
      skeleton.animationPropertiesOverride.enableBlending = true;
      skeleton.animationPropertiesOverride.blendingSpeed = 0.05;
      skeleton.animationPropertiesOverride.loopMode = 1;

      idleRange = skeleton.getAnimationRange("YBot_Idle");
      walkRange = skeleton.getAnimationRange("YBot_Walk");
      runRange = skeleton.getAnimationRange("YBot_Run");
      leftRange = skeleton.getAnimationRange("YBot_LeftStrafeWalk");
      rightRange = skeleton.getAnimationRange("YBot_RightStrafeWalk");

      // IDLE
      scene.beginAnimation(skeleton, idleRange.from, idleRange.to, true);

      // ADDED A Dummy Physics Root
      newMeshes[0].position.y = -1;

      let dummyPhysicsRoot = MeshBuilder.CreateCapsule(
        "dummyPhysicsRoot",
        { height: 2 },
        scene
      );
      // let dummyPhysicsRoot = new MeshBuilder.create("dummyPhysicsRoot", {size: 1, height: 2, width: 1}, scene);
      dummyPhysicsRoot.addChild(newMeshes[0]);
      dummyPhysicsRoot.position.y = 100;
      // DummyPhysicsRoot Visibility Change to 0 to Hide
      dummyPhysicsRoot.visibility = 0.2;

      let dummyAggregate = new PhysicsAggregate(
        dummyPhysicsRoot,
        PhysicsShapeType.BOX,
        { mass: 1000, restitution: 0.01 },
        scene
      );
      dummyAggregate.body.setMotionType(PhysicsMotionType.DYNAMIC);
      movePlayer(scene, dummyAggregate);

      dummyAggregate.body.setMassProperties({
        inertia: new Vector3(0, 0, 0),
      });

      createArcRotateCameraWithTarget(scene, newMeshes[0]);
    }
  );
};

// Define player movement speed
let moveForward = 0;
let moveDirection = 0;
let forceMagnitude = 4;
let rotationSpeed = 2;
let angularDamping = 50;
let decelerationFactor = 0.2;
let moveX, moveZ;
let animationState = 0;

// Move Player Function
function movePlayer(scene: Scene, player: any) {
  let inputMap: any = {};
  scene.actionManager = new ActionManager(scene);
  // Key Down Trigger
  scene.actionManager.registerAction(
    new ExecuteCodeAction(ActionManager.OnKeyDownTrigger, function (evt) {
      inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    })
  );
  // Key UP Trigger
  scene.actionManager.registerAction(
    new ExecuteCodeAction(ActionManager.OnKeyUpTrigger, function (evt) {
      inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
      let frontVector = player.transformNode.getDirection(Axis.Z);

      if (moveForward == 1)
        player.body.setLinearVelocity(
          frontVector.scale(decelerationFactor),
          player.transformNode.getAbsolutePosition()
        );
      if (moveForward == -1)
        player.body.setLinearVelocity(
          frontVector.scale(-decelerationFactor),
          player.transformNode.getAbsolutePosition()
        );

      let rotationAxis = new Vector3(0, 0, 0); // el eje de rotación
      if (moveDirection == 0)
        player.body.setAngularVelocity(rotationAxis.scale(0));

      moveForward = 0;
      moveDirection = 0;
      if (moveForward == 0) {
        scene.beginAnimation(skeleton, idleRange.from, idleRange.to, true);
        animationState = 0;
      }
    })
  );

  // Update player position based on keyboard input
  scene.onAfterRenderObservable.add(function () {
    if (inputMap["w"]) {
      let frontVector = player.transformNode.getDirection(Axis.Z);
      player.body.setLinearVelocity(
        frontVector.scale(forceMagnitude),
        player.transformNode.getAbsolutePosition()
      );
      moveForward = 1;
      if (animationState !== 1) {
        scene.beginAnimation(skeleton, runRange.from, runRange.to, true);
        animationState = 1;
      }
    }
    if (inputMap["s"]) {
      let frontVector = player.transformNode.getDirection(Axis.Z);
      player.body.setLinearVelocity(
        frontVector.scale(-forceMagnitude),
        player.transformNode.getAbsolutePosition()
      );
      moveForward = -1;
      if (animationState !== 1) {
        scene.beginAnimation(skeleton, runRange.from, runRange.to, true);
        animationState = 1;
      }
    }
    if (inputMap["a"]) {
      let rotationAxis = new Vector3(0, -1, 0); // el eje de rotación
      player.body.setAngularDamping(angularDamping);
      player.body.setAngularVelocity(rotationAxis.scale(rotationSpeed));
      moveDirection = 1;
      if (animationState !== 1) {
        scene.beginAnimation(skeleton, leftRange.from, leftRange.to, true);
        animationState = 1;
      }
    }
    if (inputMap["d"]) {
      let rotationAxis = new Vector3(0, 1, 0); // el eje de rotación
      player.body.setAngularDamping(angularDamping);
      player.body.setAngularVelocity(rotationAxis.scale(rotationSpeed));
      moveDirection = -1;
      if (animationState !== 1) {
        scene.beginAnimation(skeleton, rightRange.from, rightRange.to, true);
        animationState = 1;
      }
    }
  });
}

// Arc Rotate Camera with Target
function createArcRotateCameraWithTarget(scene: Scene, target: any) {
  scene.activeCamera!.dispose();
  let camera = new ArcRotateCamera(
    "camera",
    Tools.ToRadians(90),
    Tools.ToRadians(65),
    10,
    Vector3.Zero(),
    scene
  );
  camera.setTarget(target, true, false, false);
  camera.allowUpsideDown = false;
  camera.panningSensibility = 0;
  camera.allowUpsideDown = false;
  camera.lowerRadiusLimit = 3;
  camera.upperRadiusLimit = 30;
  camera.upperBetaLimit = Math.PI / 2.2;
  camera.panningSensibility = 0;
  //  camera.cameraAcceleration = .1; // how fast to move
  // camera.maxCameraSpeed = 2; // speed limit
  camera.pinchDeltaPercentage = 0.0006;
  camera.wheelPrecision = 20;
  scene.activeCamera = camera;
  camera.useBouncingBehavior = false;
  camera.useAutoRotationBehavior = false;
  camera.attachControl(scene.getEngine()!.getRenderingCanvas()!, true);
  camera.radius = 20;
  camera.alpha = -1;
  camera.beta = 1;
}
