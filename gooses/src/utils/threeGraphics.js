import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './lib/SceneInit';


function ThreeGraphics() {

    const mountRef = useRef(null);
    

    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();

        test.scene.background = new THREE.Color().setHSL( 0.51, 0.4, 0.01 );

        const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
        const boxMaterial = new THREE.MeshPhongMaterial();
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
           
        // test.scene.add(boxMesh);

        const boxGeometry1 = new THREE.BoxGeometry(160, 6, 160);
        boxGeometry1.translate(0, -10, 0);
        const boxMaterial1 = new THREE.MeshPhongMaterial();
        const boxMesh1 = new THREE.Mesh(boxGeometry1, boxMaterial1);
           
        test.scene.add(boxMesh1);

        var textureLoader2 = new THREE.TextureLoader();
        var map = textureLoader2.load('src/models/gooseUV.png');
        map.encoding = THREE.sRGBEncoding;
        map.flipY = false;
        

        function Load(rotY, posX, posZ) {
            let loadedModel;
            const glftLoader = new GLTFLoader();
            glftLoader.load('gooses\src\models\gooseHead.gltf', (gltfScene) => {
            loadedModel = gltfScene.scene;
            console.log(loadedModel);

            loadedModel.traverse((child) => {
                if(child.isMesh) child.material = new THREE.MeshBasicMaterial;
            });
        
            gltfScene.scene.rotation.y = rotY;
            gltfScene.scene.position.z = posZ;
            gltfScene.scene.position.x = posX;

            gltfScene.scene.scale.set(10, 10, 10);
            test.scene.add(gltfScene.scene);
            });

        }

        Load(0.5, 30, -10);
        // Load(-0.5, -30, -10);
        // Load(0, 0, 0);


        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.castShadow = true;
        directionalLight.position.set(0, 5, -15);
        test.scene.add(directionalLight);


        const dirLight = new THREE.DirectionalLight( 0xffffff, 2 );
        dirLight.castShadow = true;
        dirLight.position.set( 0, - 1, 0 ).normalize();
        dirLight.color.setHSL( 0.1, 0.7, 0.5 );
        test.scene.add( dirLight );
        

        // const textureLoader = new THREE.TextureLoader();

        // const textureFlare0 = textureLoader.load( 'textures/lensflare/lensflare0.png' );
        // const textureFlare3 = textureLoader.load( 'textures/lensflare/lensflare3.png' );

        const sphere = new THREE.SphereGeometry(0.5, 16, 8);

        function addLight( h, s, l, x, y, z ) {
            const light = new THREE.PointLight( 10000, 10.5, 8000 );
            light.color.setHSL( h, s, l );
            light.position.set( x, y, z );
            light.castShadow = true;
            light.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 'white' } )));
            test.scene.add( light );

            // const lensflare = new Lensflare();
            // lensflare.addElement( new LensflareElement( textureFlare0, 700, 0, light.color ) );
            // lensflare.addElement( new LensflareElement( textureFlare3, 60, 0.6 ) );
            // lensflare.addElement( new LensflareElement( textureFlare3, 70, 0.7 ) );
            // lensflare.addElement( new LensflareElement( textureFlare3, 120, 0.9 ) );
            // lensflare.addElement( new LensflareElement( textureFlare3, 70, 1 ) );
            // light.add( lensflare );

        }
        addLight( 0.65, 0.3, 0.1, 0, 35, 0 );
        addLight( 0.08, 0.8, 0.5, 0, 0, -1000 );
        addLight( 0.5, 0.5, 0.9, 5000, 5000, -1000 );

        console.log("test");

        // test.convert();




    }, []);

    return (
    <div>
        <canvas id="myThreeJsCanvas" />
    </div>
    );
}

export default ThreeGraphics;