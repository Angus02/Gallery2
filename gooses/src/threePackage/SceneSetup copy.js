import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';

import { 
    connectWallet,
    getCurrentWalletConnected 
} from "../utils/interact";

import '../components/Geese.css'


const ThreeGraphics = props => {

    const mountRef = useRef(null);

    const colours = ['#f97e57', '#3a261a', '#9e8b6f', '#be9178', '#f8ceb7', '#5d473a', '#faddd8' , '#3a322e', '#f1ebe0', '#915e50'];
    const [walletAddress, setWallet] = useState("");


    useEffect(() => {

        async function data() {
            const {address, status} = await getCurrentWalletConnected();
            setWallet(address);
          }
      
        data();

        var scene = new THREE.Scene();
        scene.background = new THREE.Color( "grey" );

        var camera = new THREE.PerspectiveCamera( 45, 400 / 400, 0.1, 1000 );

        var renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio(1);
        renderer.setSize( 400, 400 );
        document.getElementById("myScene").appendChild( renderer.domElement );

        camera.position.z = 200;    
        camera.position.x = 0;

        const geometry = new THREE.BoxGeometry( 550, 1, 550 );
        const material = new THREE.MeshPhysicalMaterial( {color: '#1c1c1c', roughness: 0.1} );
        const cube = new THREE.Mesh( geometry, material );
        cube.position.set( 0, -45, 0);
        cube.castShadow = true;
        cube.receiveShadow = true;
        scene.add( cube );


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
                    color: 'light grey',

                    metalness: 0,
                    roughness: 0.1
                });
            });
        
            gltfScene.scene.rotation.y = rotY;
            gltfScene.scene.position.z = posZ;
            gltfScene.scene.position.x = posX;

            gltfScene.scene.scale.set(15, 15, 15);

            gltfScene.castShadow = true;
            gltfScene.receiveShadow = true;

            scene.add(gltfScene.scene);
            });

        }
        Load(0, 0, -30);

        function Lights() {

            // let i = -20;
            // let j = -20;
            // let l = -20;
            // let a = 0;

            // for(i=-40; i<60; i+=20)
            // {
            //     for(j=-40; j<60; j+=20)
            //     {
            //         for(l=-40; l<60; l+=20)
            //         {
            //             a = (i / 20) + 40;
            //             addLight(i, j , l, colours[a]);
            //         }
            //     }
            // }

            let x, y, a;

            for(y = 0; y < 10; y++)
            {
              for(x = 0; x < 10; x++)
              {
                a += 1;
                addLight((x * 15) - 66.666666, (y * 15) - 20, -50 , colours[String(walletAddress)[a]])
              }
            }
        }

        function addLight(x, y, z, colour) {
            const pointLight = new THREE.PointLight( colour, 0.2, 100 );
            pointLight.position.set( x, y, z );

            pointLight.castShadow = true;
            scene.add( pointLight );
    
            const sphereSize = 1;
            const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize, colour );
            scene.add( pointLightHelper );
        }

        Lights();
        // addLight(0, 35, 0 , colours[3]);
        // addLight(10, 35, 20, colours[2]);
        // addLight(0, 35, 45 , colours[3]);

        const Amblight = new THREE.AmbientLight( 0x404040, 1.5 ); // soft white light
        scene.add( Amblight );

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