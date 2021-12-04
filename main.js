// let scene, camera, renderer, cube, sphere;

// function init() {
//     scene = new THREE.Scene(); // Создание сцены

//     camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//     ); // Определение камеры\поле зрения

//     const light = new THREE.DirectionalLight(0xffffff);
//     light.position.set();
//     scene.add(light);

//     renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Рендер

//     renderer.setSize(window.innerWidth, window.innerHeight); // Размер рендера
//     renderer.setClearColor(0xffffff, 0);

//     document.body.appendChild(renderer.domElement); // Рендер в html

//     const cubeShape = new THREE.BoxGeometry(10, 10, 10);
//     const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     cube = new THREE.Mesh(cubeShape, cubeMaterial);

//     const sphereShape = new THREE.SphereGeometry(15, 32, 6);
//     const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     sphere = new THREE.Mesh(sphereShape, sphereMaterial);

//     scene.add(cube, sphere);

//     const size = 1000;
//     const divisions = 1000;
//     const colorCenterLine = new THREE.Color(0xff0000);
//     const colorGrid = new THREE.Color(0xff0000);

//     const gridHelper = new THREE.GridHelper(
//         size,
//         divisions,
//         colorCenterLine,
//         colorGrid
//     );
//     scene.add(gridHelper);

//     camera.position.z = 100;
// }

// // Анимация
// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     cube.rotation.x += 0.02;
//     cube.rotation.y += 0.02;
//     cube.position.y = 40;
//     sphere.rotation.x += 0.03;
//     sphere.rotation.y += 0.02;
// }

// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener("resize", onWindowResize, false);

// init();
// animate();
