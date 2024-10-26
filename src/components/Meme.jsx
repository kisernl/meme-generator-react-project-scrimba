import memesData from "../memesData";
import React from "react";

function Meme() {
  // function randomImg() {
  //   const memeList = memesData.data.memes;
  //   const randomMeme = Math.floor(Math.random() * memeList.length);
  //   const randomImgUrl = memeList[randomMeme].url;
  //   console.log(randomImgUrl);
  // }

  /**
   * Challenge: Save the random meme URL in state
   * - Create new state called `memeImage` with an
   *   empty string as default
   * - When the getMemeImage [mine is randomImg] function is called, update
   *   the `memeImage` state to be the random chosen
   *   image URL
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */

  const [memeImage, setMemeImage] = React.useState("");
  const randomImg = () => {
    const memeList = memesData.data.memes;
    const randomMeme = Math.floor(Math.random() * memeList.length);
    const randomImgUrl = memeList[randomMeme].url;
    console.log(randomImgUrl);
    setMemeImage(randomImgUrl);
    console.log(memeImage);
  };

  return (
    <main>
      <div className="meme--form">
        <div className="meme--inputs">
          <div className="meme--left">
            <label htmlFor="top">Top text</label>
            <input
              className="meme--top"
              type="text"
              id="top"
              name="top"
            ></input>
          </div>
          <div className="meme--right">
            <label htmlFor="bottom">Bottom text</label>
            <input
              className="meme--bottom"
              type="text"
              id="bottom"
              name="bottom"
            ></input>
          </div>
        </div>
        <button className="meme--button" onClick={randomImg}>
          Get a new meme image
          <img src="../PhotoIcon.svg" className="meme--btn-img" />
        </button>
      </div>
      {memeImage !== "" && (
        <img src={memeImage} alt="random meme image" className="meme--img" />
      )}
    </main>
  );
}

export default Meme;
