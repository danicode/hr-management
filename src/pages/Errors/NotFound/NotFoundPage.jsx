"use client";

import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = ({}) => {
  return (
    <div className="container">
      <img src="../../../../public/404.jpg"/>
      <Link to="/home">Go to Home!</Link>
    </div>
  )
};

export default NotFoundPage;
