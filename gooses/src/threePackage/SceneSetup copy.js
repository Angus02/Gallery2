import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import 'canvas';
import { create as ipfsHttpClient } from "ipfs-http-client";
import { Buffer } from 'buffer';
import metadata from './metadata';
import { Button } from '../components/Button';
import mintToken from '../utils/Minter';
import React from 'react';


import { 
    getCurrentWalletConnected 
} from "../utils/interact";

import '../components/Geese.css'

const authorization = "Basic Mk1ZcTJlZGdPbGZ3ZjQxY2Z2dkdmd1MxQldDOjYzNDYwNTdlNWIwZTQyZWQ1MjY3NmMxNWFjMjgyOGJj";

const ThreeGraphics = props => {


    const colours = ['#922B21', '#943126', '#633974', '#5B2C6F', '#1A5276', '#21618C', '#117864' , '#0E6655', '#196F3D', '#1D8348', '#9A7D0A', '#9C640C', '#935116', '#873600', '#979A9A', '#797D7F', '#5F6A6A', '#515A5A', '#212F3C', '#1C2833'];
    const [walletAddress, setWallet] = useState("");
    const [buff, setBuff] = useState("");
    const [images, setImages] = useState([])
    const [loaded, setLoaded] = useState(0)



    const ipfs = ipfsHttpClient({
      url: "https://ipfs.infura.io:5001/api/v0",
      headers: {
        authorization
      }
    })



    async function data() {
        const {address} = await getCurrentWalletConnected();
        setWallet(address);


        let addre = String(address);
        // console.log(addre);
        
        let add = addre.replace(/[^1-9]/gi, '');
        // console.log(add);
        return add;
    }

    const Draw = (ctx, addr) => {

        var scene = new THREE.Scene();
        // scene.background = new THREE.Color( "grey" );

        var camera = new THREE.PerspectiveCamera( 65, 800 / 800, 0.1, 1000 );

        var renderer = new THREE.WebGLRenderer( { antialias: true, preserveDrawingBuffer: true } );
        renderer.setPixelRatio(1);
        renderer.setSize( 1080, 1080 );
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;

        camera.position.z = 150;    
        camera.position.x = 0;


        function box(w,h,d,x,y,z, colour) {

            const geometry = new THREE.BoxGeometry( w, h, d );
            const material = new THREE.MeshPhysicalMaterial( {color: colour, roughness: 0, metalness: 0, } );
            const cube = new THREE.Mesh( geometry, material );
            cube.position.set( x, y, z);
            cube.castShadow = true;
            cube.receiveShadow = true;
            scene.add( cube );

        }

        // box(550, 1, 550, 0, -45, -180, 'red');
        box(330, 330, 1, 0, 0, -80, 'black');
        // box(230, 230, 1, 0, 0, -120, 'grey');



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
            let x, y, a;
            a = 0;

            for(y = 0; y < 10; y++)
            {
              for(x = 0; x < 10; x++)
              {
                a += 1;
                addLight((x * 25) - 112.5, (y * 25) - 112.5, -50 , "white")
              }
            }
        }

        function addLight(x, y, z, colour) {
            const pointLight = new THREE.PointLight( colour, 0.2, 100 );
            pointLight.position.set( x, y, z );

            pointLight.castShadow = true;
            scene.add( pointLight );
    
            // const sphereSize = 1;
            // const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize, colour );
            // scene.add( pointLightHelper );
        }

        Lights();
        // addLight(0, 35, 0 , colours[3]);
        // addLight(10, 35, 20, colours[2]);
        // addLight(0, 35, 45 , colours[3]);

        const Amblight = new THREE.AmbientLight( 0x404040, 0.0 ); // soft white light
        scene.add( Amblight );

        const Hemlight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.75 );
        scene.add( Hemlight );


        function spheres(x, y, z, r, col, rough) 
        {
            // console.log(col);

            const geometry = new THREE.SphereGeometry( r, 64, 32 );
            const material = new THREE.MeshStandardMaterial( {color: col, roughness: rough, metalness: 0, } );
            const sphere = new THREE.Mesh( geometry, material );
            sphere.position.set(x, y , z)
            scene.add( sphere );
        }

        // spheres(-40, 0 , 0, 15);
        // spheres(40, 0, 0, 5);

        async function Multispheres() {

            let u = await addr;
            // console.log(u[1]);

            let q,c,a = 0;

            for(q = 0; q < 10; q++)
            {
              for(c = 0; c < 10; c++)
              {
                if(a === 20)
                {
                    a = 0;
                }
                a+=1;

                if(c < 4 || c > 5)
                {
                    spheres((q * 20) - 90, (c * 20) - 90, -80 , 3, colours[u[a]], (u[a]) / 10);   
                }

                else if(q < 3 || q > 6)
                {
                    spheres((q * 20) - 90, (c * 20) - 90, -80 , 3, colours[u[a]], (u[a]) / 10);
                }
              }
            }
        }

        Multispheres();

        let r = 0;

        function animate() {
            r += 1;
            if(r < 30)
            {
                requestAnimationFrame( animate );
            }
            // cube.rotation.y += 0.01;
            // cube_2.position.x += 0.05;
            document.getElementById("myScene").appendChild( renderer.domElement );
            renderer.render( scene, camera );
        }
        animate();

        var buffer;

        setTimeout(async function() {

            var URL = renderer.domElement.toDataURL('image/png');
            // console.log(URL);
            buffer = Buffer(URL.split(",")[1], 'base64');
            // console.log(buffer);
            // const result = await ipfs.add(buffer);

            // console.log(result.path);
            setBuff(buffer);
            setLoaded(1);
        }, 5000);
    }


    useEffect(() => {

        let num = [];

        async function load() {
            const adress = await data(); 
            console.log(adress);
            num = adress;

            
            Draw("myScene", num);
            // console.log(authorization, "authorization");
        }
        load(); 
        
        // convert(ctx);
    }, []);


    const Upload = async (event) => {

        const Infura_HTTPS = "https://gooses-gallery-members-season-one.infura-ipfs.io/ipfs/";


        setTimeout(async function() {

            // var URL = renderer.domElement.toDataURL('image/png');
            // console.log(URL);
            // const buffer = Buffer(URL.split(",")[1], 'base64');
            // console.log(buff);
            const result = await ipfs.add(buff);

            if(result)
            {
                metadata.image = Infura_HTTPS + result.path;
                // console.log("image address", metadata.image);
                let metadataBuffer = Buffer.from(JSON.stringify(metadata));
                const secondResult = await ipfs.add(metadataBuffer);
                if(secondResult)
                {
                    const tokenURI = Infura_HTTPS + secondResult.path;
                    // console.log("congratulations on your purchase, ipfs at: ", tokenURI);

                    mintToken(walletAddress, tokenURI);
                }


                setImages([
                    ...images,
                    {
                        cid: result.cid,
                        path: result.path,
                    },

                ]);
            }

            // console.log(result.path);
            // setUri(URL);
        }, 5000);

    };

    class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            showComponent: false,
          };
          this._onButtonClick = this._onButtonClick.bind(this);
        }
      
        _onButtonClick() {
          this.setState({
            showComponent: true,
          });
        }
      
        render() {
          return (
            <div>    
                {this.state.showComponent ?
                (
                    null
                ) 
                : 
                (
                    <>
                    {loaded != 0 ? ( //null
                        <Button buttonStyle='btn--outline' buttonSize='btn--large'  onClick={Upload} type="submit" >Mint for 0.01 eth</Button>
                    )
                    :
                    (
                        <Button buttonStyle='btn--outline' buttonSize='btn--large'  type="submit" >Please Wait</Button>
                    )}
                    </>
                )
              }
            </div>
          );
        }
    }


    return (
        <>

            <div className='cemtered'>
                {walletAddress !== "" ? (
                    <>
                        <div className='mintBtn2'>

                            <MyComponent />
                        </div>
                    </>

                ) : ( 
                    <>
                        <div className='centered'>
                            <h1> Please Connect Wallet</h1>
                        </div>
                    </>
                )}
            </div>

            <div className='centeredIMG' id="myScene" />

        </>
    );
}

export default ThreeGraphics;