import React from 'react';
import ReactDOM from 'react-dom'

const greeting = <div>Hello React</div>;
const isReactUser = false;
const rootNode = document.getElementById('root');

function sayGreeting(){
    if (isReactUser){
        return greeting;
} else{  
    return (<div>Hello Python</div>)
}
}


ReactDOM.render(sayGreeting(), rootNode);

