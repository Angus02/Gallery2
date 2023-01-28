// import html2canvas from 'html2canvas'

// const exportAsImage = async (element, imageFileName) => {
//   const html = document.getElementsByTagName("html")[0];
//   const body = document.getElementsByTagName("body")[0];
//   let htmlWidth = html.clientWidth;
//   let bodyWidth = body.clientWidth;
//   const newWidth = element.scrollWidth - element.clientWidth;
//   if (newWidth > element.clientWidth) {
//   htmlWidth += newWidth;
//   bodyWidth += newWidth;
//   }
//   html.style.width = htmlWidth + "px";
//   body.style.width = bodyWidth + "px";
//   const canvas = await html2canvas(element);
//   const image = canvas.toDataURL("image/png", 1.0);
//   downloadImage(image, imageFileName);
//   html.style.width = null;
//   body.style.width = null;
//   };


export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" rel="noreferrer"   href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};


