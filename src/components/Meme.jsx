import memesData from "../memesData";

function Meme() {
  function randomImg() {
    const memeList = memesData.data.memes;
    const randomMeme = Math.floor(Math.random() * memeList.length);
    const randomImgUrl = memeList[randomMeme].url;
    console.log(randomImgUrl);
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
        <button className="meme--button" onClick={randomImg}>
          Get a new meme image
          <img src="../PhotoIcon.svg" className="meme--btn-img" />
        </button>
      </div>
    </main>
  );
}

export default Meme;
