import React from "react";
import SecondsCounter from "./SecondsCounter";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
	return (
		<div className="container-fluid bg-dark text-light">
      <div className="row">
	  <SecondsCounter />
      </div>
    </div>
	);
};

export default Home;
