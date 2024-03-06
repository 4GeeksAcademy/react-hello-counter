import React from "react";
import SecondsCounter from "./SecondsCounter";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
	return (
	<div className="container-fluid bg-dark text-light">
	  <div className="row">
    	<div className="col-md-2 text-center bordered-box">
		<FontAwesomeIcon icon={faClock} size="4x" />
    	</div>
      <div className="col-md-1 text-center bordered-box">
		<h2>0</h2>
      </div>
      <div className="col-md-1 text-center bordered-box">
	  	<h2>0</h2>
      </div>
	  <div className="col-md-1 text-center bordered-box">
	  	<h2>0</h2>
      </div>
	  <div className="col-md-1 text-center bordered-box">
	   	<h2>0</h2>
      </div>
	  <div className="col-md-1 text-center bordered-box">
	   	<h2>0</h2>
      </div>
	  <div className="col-md-1 text-center bordered-box">
		<h2><SecondsCounter /></h2>
      </div>
  </div>
    </div>
	);
};

export default Home;
