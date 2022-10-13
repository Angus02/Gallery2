import React, { useRef, useEffect, useState } from 'react'
import { 
  connectWallet,
  getCurrentWalletConnected 
} from "../utils/interact";


const Canvas = props => {
  
  const canvasRef = useRef(null)
  //1-beak, 2-darkWing, 3-LightWing, 4-Neck, 5-Lightbody, 6-DarkBody, 7- LightWing, 8-DarkWing, 9-LightTail, 10-DarkTail 
  const colours = ['#f97e57', '#3a261a', '#9e8b6f', '#be9178', '#f8ceb7', '#5d473a', '#faddd8' , '#3a322e', '#f1ebe0', '#915e50'];
  const row = [77, 142, 209, 275, 340, 406];
  const [walletAddress, setWallet] = useState("");

  useEffect(async () => { //TODO: implement
    const {address, status} = await getCurrentWalletConnected();
    setWallet(address);

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
    var img = document.getElementById("BckImg");
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 500, 500);
    }
  }

  

  let x = 0
  let y = 0
  let a = 0

  const grid = ctx => {

    Back(ctx)
    Imag(ctx)

    for(y = 0; y < 6; y++)
    {
      for(x = 0; x < 6; x++)
      {
        a += 1;
        draw(ctx, colours[String(walletAddress)[a]], row[x], row[y])
      }
    }
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    //Our draw come here

    grid(context)
  }, [grid])
  
  return (
    <>
   <canvas ref={canvasRef} {...props}/>
  <h5>{String(walletAddress)}</h5>
  <img id="BckImg" src='media/images/Gallery-Goose-Logo.png' alt='goo' width={80}/>
  </>
  )
}

export default Canvas