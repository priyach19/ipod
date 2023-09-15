import React from "react";
import "../css/Themes.css";

// Render themes menu
class Themes extends React.Component {
  render() {
    const { active } = this.props;
    return (
      <div className="music">
        <h2>Theme Select</h2>
        <ul>
          {["Rose Gold", "Space Gray", "Light Purple", "Black"].map(
            (element, index) => {
              return active === index ? (
                <li key={index} className="active theme-li">
                  {element}
                </li>
              ) : (
                <li className="theme-li" key={index}>
                  {element}{" "}
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  }
}
export default Themes;
