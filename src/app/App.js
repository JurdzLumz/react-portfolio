import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";

// Import the image
import ReactPortfolioImage from "../assets/images/react-porfolio.jpg";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        {/* Insert the image */}
        <div style={{ textAlign: "center", margin: "70px 0" }}>
          <img
            src={ReactPortfolioImage}
            alt="React Portfolio"
            style={{ maxWidth: "700px", borderRadius: "60px" }}
          />
        </div>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
