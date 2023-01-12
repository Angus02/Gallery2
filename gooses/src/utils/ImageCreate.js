import React, { useRef, useEffect, useState } from 'react'
import { 
  connectWallet,
  getCurrentWalletConnected 
} from "../utils/interact";
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'


const Canvas = props => {
  
  const canvasRef = useRef(null)
  //1-beak, 2-darkWing, 3-LightWing, 4-Neck, 5-Lightbody, 6-DarkBody, 7- LightWing, 8-DarkWing, 9-LightTail, 10-DarkTail 
  const colours = ['#f97e57', '#3a261a', '#9e8b6f', '#be9178', '#f8ceb7', '#5d473a', '#faddd8' , '#3a322e', '#f1ebe0', '#915e50'];
  const row = [77, 142, 209, 275, 340, 406];
  const [walletAddress, setWallet] = useState("");

  useEffect( () => { //TODO: implement

    async function data() {
      const {address, status} = await getCurrentWalletConnected();
      setWallet(address);
    }

    data();
  }, []);

  const draw = (ctx, colour, posX, posY) => {
    ctx.fillStyle = colour
    ctx.beginPath()
    ctx.arc(posX + 5, posY + 10, 10, 0, 2*Math.PI)

    ctx.fill()
  }



  function Back(ctx) {
    ctx.fillStyle = '#F8F0E3'
    ctx.beginPath()
    ctx.fillRect(0, 0, 500, 500)

    ctx.fill()

    // ctx.drawImage(img, 0, 0)
      
  }

  function Imag(ctx) {
    // var img = document.getElementById("BckImg");
    // img.onload = function () {
    //   ctx.drawImage(img, 0, 0, 500, 500);
    // }
    const image = new Image();
    image.onload = function(res) {
      console.log("res", res);
      ctx.drawImage(image, -50, -220, 1080,720);
    };
    image.onerror = function(err) {
      console.log("err", err);
    };
    // image.src = require("../Gallery-Goose-Logo.png")
    image.src = require("../sampleGooseRender.png")

  }

  let x = 0
  let y = 0
  let a = 0
  let x1 = 0
  let y1 = 0

  function writeText(ctx) {
    const  fontSize = 30, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top'
   
    ctx.beginPath();
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    for(y=0; y < 10; y++)
    {
    ctx.fillText('Test Test Test', 100, y * 50);
    }
    ctx.stroke();
  }

  const drawLine = (ctx, colour, x, y, x1, y1 ) => {
    ctx.lineWidth = 0.2
    ctx.strokeStyle = colour
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x1, y1)
    ctx.stroke()

  }


  const dotx = []
  const doty = []
  const dist = []
  const disCol = ["white", "grey", "black"]

  function ShortLine(ctx, colour, x, y, x1, y1 )
  {



    ctx.lineWidth = 0.2
    ctx.strokeStyle = "white"
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x1, y1)
    ctx.stroke()

  }


  const grid = ctx => {

    Back(ctx)
    Imag(ctx)
    writeText(ctx)

    for(y = 0; y < 6; y++)
    {
      for(x = 0; x < 6; x++)
      {
        a += 1;
        draw(ctx, colours[String(walletAddress)[a]], row[x], row[y])
        dotx[x] = row[x]
        doty[y] = row[y]
      }
    }
  }
  

  useEffect(() => {    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    //Our draw come here

    grid(context)

    var url = canvas.toDataURL();
    // console.log(url);

  }, [grid])

  
  return (
    <>
    <canvas ref={canvasRef} {...props}/>
    <h5>{String(walletAddress)}</h5>
    <img id="BckImg" src='media/images/Gallery-Goose-Logo.png' width={80}/>
  </>
  )
}

export default Canvas