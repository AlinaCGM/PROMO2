
import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Button() {
  return (
    <Link to="signup">
      <button type="button" className="btn btn-outline-secondary btn-sm button">more</button>
    </Link>
  );
}

export default Button;