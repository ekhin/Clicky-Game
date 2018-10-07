import React from "react";
import "./pets.css";

const pets = props =>(
	<div className="card" onClick={() => props.activeClick(props.id)}>
		<div className="img-container">
			<img src={props.image} id={props.id}/>

		</div>
	</div>
);


export default pets;
