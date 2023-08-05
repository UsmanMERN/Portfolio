import { useEffect } from "react";
import "./App.scss";
// react vertical component css
import "react-vertical-timeline-component/style.min.css";

// import bootstrap javascript
import "bootstrap/dist/js/bootstrap.min.js";
// scroll to top
import ScrollToTop from "react-scroll-to-top";

import Routes from "./pages/Routes";
// AOS.init();
import "aos/dist/aos.css";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Routes />
      <ScrollToTop smooth color="#8e9aaf" className="my-5" />
    </>
  );
}

export default App;
