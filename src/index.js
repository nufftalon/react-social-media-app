import React from 'react';
import ReactDOM from 'react-dom'

function Header(props){
    return <h1>Hello {props.username}</h1>
}

function Layout(props){
    return <div style={{background: 'palegoldenrod'}}>
        {props.children}
    </div>
}

const rootNode = document.getElementById('root');



ReactDOM.render
(<Layout>
<Header username="Gary"/>
<footer>Copyright 2020</footer>
</Layout>, rootNode);

