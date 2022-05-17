import React from 'react';

const myStyle = {
    'list-style':"circle",

} 
const myStyle2 = {
    'list-style':"square"
}

const Hello = ()=>{


    return <ul>
        
        <h1>Mobile Operating System</h1>

        <li>Andriod</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
        
        <h1>Mobile Manufacturers</h1>
        <li style={myStyle2}>Samsung</li>
        <li style = {myStyle2}>HTC</li>
        
        <li>Micromax</li>
        <li style={myStyle}>Apple</li>

        
        </ul>;



}
export default Hello