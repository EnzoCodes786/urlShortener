import "./mainPage.css"
function MainPage(){
  return(
    <>
    <div className="main-box">
    <h1 className="main-head">
        Welcome to Shortly
    </h1>
    <h3 className="second-head">
        Alternative to the bitly..
    </h3>
    
    <input 
    type="text"
    className="url-box"
    placeholder="Enter URL"
    />
    <button className="send-url">Go</button>
    </div>
    </>
  )
}

export default MainPage