import React, { useRef, useEffect, useState } from 'react'
import { 
  connectWallet,
  getCurrentWalletConnected 
} from "../utils/interact";


const Canvas = props => {
  
  const canvasRef = useRef(null)
  const colours = ['white', 'blue', 'red', 'yellow', 'green', 'purple', 'grey' , 'white', 'navy', 'black'];
  const row = [50, 150, 250, 350, 450];
  const [walletAddress, setWallet] = useState("");

  useEffect(async () => { //TODO: implement
    const {address, status} = await getCurrentWalletConnected();
    setWallet(address);

}, []);

  const draw = (ctx, colour, posX, posY) => {
    ctx.fillStyle = colour
    ctx.beginPath()
    ctx.arc(posX, posY, 20, 0, 2*Math.PI)

    ctx.fill()
  }


  function DImage(ctx) {
    const img = new Image();
    img.src = '../../public/media/images/render3.png';

    img.onload = () => {
      ctx.drawImage(img, 50, 38, 50, 38);
    };
  }
  
  

  let x = 0
  let y = 0
  let a = 0

  const grid = ctx => {

    for(y = 0; y < 5; y++)
    {
      for(x = 0; x < 5; x++)
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
    DImage(context);

    grid(context)
  }, [grid])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas