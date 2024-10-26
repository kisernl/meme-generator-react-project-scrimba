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
   * Challenge 2: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   *
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   *
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   *
   * Lastly, update the `getMemeImage` function and the markup
   * to reflect our newly reformed state object and array in the
   * correct way.
   */

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memeList = allMemeImages.data.memes;
    const randomMeme = Math.floor(Math.random() * memeList.length);
    const randomImgUrl = memeList[randomMeme].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomImgUrl,
    }));
  }

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
        <button className="meme--button" onClick={getMemeImage}>
          Get a new meme image
          <img src="../PhotoIcon.svg" className="meme--btn-img" />
        </button>
      </div>
      {allMemeImages !== "" && (
        <img
          src={meme.randomImage}
          alt="random meme image"
          className="meme--img"
        />
      )}
    </main>
  );
}

export default Meme;

/**
 * Challenge 1: Save the random meme URL in state
 * - Create new state called `memeImage` with an
 *   empty string as default
 * - When the getMemeImage [mine is randomImg] function is called, update
 *   the `memeImage` state to be the random chosen
 *   image URL
 * - Below the div.form, add an <img /> and set the
 *   src to the new `memeImage` state you created
 */

// const [memeImage, setMemeImage] = React.useState("");
// const randomImg = () => {
//   const memeList = memesData.data.memes;
//   const randomMeme = Math.floor(Math.random() * memeList.length);
//   const randomImgUrl = memeList[randomMeme].url;
//   console.log(randomImgUrl);
//   setMemeImage(randomImgUrl);
//   console.log(memeImage);
// };
