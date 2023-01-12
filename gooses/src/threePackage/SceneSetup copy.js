import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';

import '../components/Geese.css'


const ThreeGraphics = props => {

    const mountRef = useRef(null);
    let pathTracer;

    useEffect(() => {

        var scene = new THREE.Scene();
        scene.background = new THREE.Color( "grey" );

        var camera = new THREE.PerspectiveCamera( 45, 400 / 400, 0.1, 1000 );

        var renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio(1);
        renderer.setSize( 400, 400 );
        document.getElementById("myScene").appendChild( renderer.domElement );

        camera.position.z = 100;    
        camera.position.x = 0;


        var textureLoader2 = new THREE.TextureLoader();
        var map = textureLoader2.load('gooseUV.png');
        map.encoding = THREE.sRGBEncoding;
        map.flipY = false;


        function Load(rotY, posX, posZ) {
            let loadedModel;
            const glftLoader = new GLTFLoader();
            glftLoader.load('gooseHead.gltf', (gltfScene) => {
            loadedModel = gltfScene.scene;
            // console.log(loadedModel);

            loadedModel.traverse((child) => {
                if(child.isMesh) child.material = new THREE.MeshPhysicalMaterial({
                    map: map,
                    color: 'grey',
                });
            });
        
            gltfScene.scene.rotation.y = rotY;
            gltfScene.scene.position.z = posZ;
            gltfScene.scene.position.x = posX;

            gltfScene.scene.scale.set(10, 10, 10);
            scene.add(gltfScene.scene);
            });

        }
        Load(0, 0, -50);


        const pointLight = new THREE.PointLight( 'white', 10, 100 );
        pointLight.position.set( 10, 10, 10 );
        scene.add( pointLight );

        const sphereSize = 1;
        const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
        scene.add( pointLightHelper );



        function animate() {
        requestAnimationFrame( animate );
        // cube.rotation.y += 0.01;
        // cube_2.position.x += 0.05;
        renderer.render( scene, camera );
        }
        animate();

    }, []);

    return (
        <>
            {/* <canvas id="myThreeJsCanvas" /> */}

            <div id="myScene" />
        </>
    );
}

export default ThreeGraphics;