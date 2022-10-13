import React, { useRef, useEffect, useState } from 'react'
import { 
  connectWallet,
  getCurrentWalletConnected 
} from "../utils/interact";



const Canvas = props => {
  
  const canvasRef = useRef(null)
  const colours = ['white', 'blue', 'red', 'yellow', 'green', 'purple', 'grey' , 'white', 'navy', 'black'];
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



  function DImage(ctx) {
    ctx.fillStyle = '#F8F0E3'
    ctx.beginPath()
    ctx.fillRect(0, 0, 500, 500)

    ctx.fill()

    // ctx.drawImage(img, 0, 0)
      
  }
  

  let x = 0
  let y = 0
  let a = 0

  const grid = ctx => {

      DImage(ctx)
    

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
  </>
  )
}

export default Canvas