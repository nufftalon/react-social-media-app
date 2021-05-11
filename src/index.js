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

function Login(){
    return <p>Please login!</p>
}

function Signout() {
    return <button>Signout</button>
}


const isAuthenticated = true;

function App() {
   return (<Layout>
 {isAuthenticated ? (
     <>

      <Header username="Gary"/>
 <Signout/>    
 </>

 ) : <Login/>}
 {/* {isAuthenticated &&<Signout/> } */}
<footer>Copyright 2020</footer>
</Layout>);
}
const rootNode = document.getElementById('root');

ReactDOM.render
(<App/>, rootNode);


