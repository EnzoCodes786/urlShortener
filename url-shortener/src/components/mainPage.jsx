import { useState } from "react"
import axios from "axios"
import "./mainPage.css"
function MainPage(){
  const [longUrl,setLongUrl] = useState("")
  const [shortLink,setShortLink] = useState("")
  async function fetchShortUrl() {
  const res = await axios.post('http://localhost:5000/api/urls/shortenUrl',
    {
      longUrl : longUrl
    }
  );
  setShortLink(res.data.newLink);
  }
  return(
    <>
    <div className="main-box">
    <h1 className="main-head">
        Welcome to Shortly
    </h1>
    <h3 className="second-head">
        Alternative to the bitly..
    </h3>
    <h3>{shortLink}</h3>
    <input 
    type="text"
    className="url-box"
    placeholder="Enter URL"
    value={longUrl}
    onChange={(e)=>setLongUrl(e.target.value)}
    />
    <button className="send-url" onClick={fetchShortUrl()}>Go</button>
    </div>
    </>
  )
}

export default MainPage