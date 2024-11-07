// import memesData from "../memesData";
import React from "react";

function Meme() {
  // function randomImg() {
  //   const memeList = memesData.data.memes;
  //   const randomMeme = Math.floor(Math.random() * memeList.length);
  //   const randomImgUrl = memeList[randomMeme].url;
  //   console.log(randomImgUrl);
  // }

  /**
   * Challenge 4:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(function () {
    console.log("Effect ran");
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    // const memeList = allMemes.data.memes;
    const randomMeme = Math.floor(Math.random() * allMemes.length);
    const randomImgUrl = allMemes[randomMeme].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomImgUrl,
    }));
  }

  function handleChange(event) {
    // console.log(event);
    const { name, value } = event.target;
    setAllMemes((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
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
              id="topText"
              name="topText"
              value={allMemes.topText}
              onChange={handleChange}
            ></input>
          </div>
          <div className="meme--right">
            <label htmlFor="bottom">Bottom text</label>
            <input
              className="meme--bottom"
              type="text"
              id="bottomText"
              name="bottomText"
              value={allMemes.bottomText}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <button className="meme--button" onClick={getMemeImage}>
          Get a new meme image
          <img src="../PhotoIcon.svg" className="meme--btn-img" />
        </button>
      </div>
      <div className="meme">
        {allMemes !== "" && (
          <img
            src={meme.randomImage}
            alt="random meme image"
            className="meme--img"
          />
        )}
        <h2 className="meme--text top">{allMemes.topText}</h2>
        <h2 className="meme--text bottom">{allMemes.bottomText}</h2>
      </div>
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

/**
 * Challenge3:
 * 1. Set up the text inputs to save to
 *    the `topText` and `bottomText` state variables.
 * 2. Replace the hard-coded text on the image with
 *    the text being saved to state.
 */
