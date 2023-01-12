import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';

import SceneInit from './SceneInit.js';

import '../components/Geese.css'


const ThreeGraphics = props => {

    const mountRef = useRef(null);
    

    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();

        test.scene.background = new THREE.Color().setHSL( 0.1, 1.00, 0.24 );

        // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
        const boxMaterial = new THREE.MeshPhongMaterial();
        // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
           

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

            gltfScene.scene.scale.set(15, 15, 15);
            test.scene.add(gltfScene.scene);
            });

        }

        let x = 0;

        function layout( x) {

            if(x == 0)
            {
                Load(0.5, 30, -10);
                Load(-0.5, -30, -10);
                Load(0, 0, 0);
            }
            else
            {
                Load(0, 0, 0);
            }
        }

        layout(1);


        const sphere = new THREE.SphereGeometry(0.5, 16, 8);

        function addLight( col, x, y, z ) {
            const pointLight = new THREE.PointLight( col, 3, 80, 1 );
            pointLight.position.set( x, y, z );
            pointLight.lookAt(0,0,0);
            test.scene.add( pointLight );

            // const sphereSize = 1;
            // const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
            // test.scene.add( pointLightHelper );

        }

        var colour = ["#b35600", "#0077b3", "#b300ad", "#fff"];


        addLight( colour[1], 0, 75, 0 );
        addLight( colour[2], 0, 0, 100 );
        addLight( colour[3], 0, 20, 80 );


        console.log("test");

        // test.convert();




    }, []);

    return (
        <>
            <canvas id="myThreeJsCanvas" />
        </>
    );
}

export default ThreeGraphics;