import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.jsx';

function bootstrap(){
	ReactDOM.render(
	 	<Hello date={new Date()}/>,
	  	document.getElementById('app')
	);
}

if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}