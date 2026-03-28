import React, {useState, useEffect} from "react";
import { FaSearch } from "react-icons/fa";

function App() {

  const [uiprops, setUiprops] = useState({
    bg: "purple",
    shadow: "",
    transition: "all .3s ease",
    opacity: 0,
    borderBottomColor: "#fff",
    showSearchIcon: true,
  });

  useEffect(() => {
    body.background = uiprops.bg;
    body.boxShadow = uiprops.shadow;
    body.transition = uiprops.transition;
  }, [uiprops.shadow]);

  const showIcon = () => {
    setUiprops({
      opacity: 1,
      showSearchIcon: false,
    });
  }

  const handleSearchFocus = () => {
    setUiprops({
      borderBottomColor: "green",
      shadow: "inset 0 -60vh 200px rgba(0,0,0,0.8)",
    });
  }

  const handleBlur = (e) => {
    setUiprops({
      shadow: "none",
      opacity: 0,
      borderButtomColor: "#fff",
      showSearchIcon: true,
    });
  }

  const body = document.body.style;
  let InputStyle = {
    margin: "10vh 25vw",
    width: "25vh",
    height: "30px",
    padding: "1rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: `1px solid ${uiprops.borderButtomColor}`,
    fontSize: "1.3rem",
    color: "#eee",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,0.7)",
    opacity: `${uiprops.opacity}`,
    transition: "all .3s ease",
  };
  let IconStyle = {
    color: "#fff",
    fontSize: "50px",
    cursor: "pointer",
    position: "absolute",
    top: "20",
    right: "20",
  };

  return (
    <div className="container" style={{height : "100vh"}}>
      <input type="text" placeholder="search" style={InputStyle} onFocus={handleSearchFocus} onBlur={handleBlur} />
      {uiprops.showSearchIcon ? (<FaSearch style={IconStyle} onClick={showIcon} />) : null}
    </div>
  );
}

export default App;
