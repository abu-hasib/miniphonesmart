import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"
// import './index.css'

const color = Math.random() > 0.5? "green" : "red"

const App = (props) => {
    return (
    //   <h2 className="text-centered" style={{ color: color }}>
    //         Hello from JSX == {Math.random()}
            
    //     </h2>
        <h1>
            {props.message}
        </h1>
    );
}

App.propTypes = {
    message: PropTypes.string
}

App.defaultProps = {
    message: "Default message"
}

ReactDOM.render(
    <App message="Still ok"/>,
    document.getElementById("root")
)

