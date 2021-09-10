// Write your Character component here

import React, {useEffect} from 'react'
import styled, {keyframes} from 'styled-components';

const InnercardDiv = styled.div `
width: 30%;
border: 1px solid black;
margin: 1% auto;
background:#ffd180;
box-shadow: 0px 1px 40px -2px mediumpurple;
`


const CardBox = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
flex-direction:row;
width:100%;
img{
    width:25%;
    height: 8vh;
    border: 2px solid black;
    
}
h2{
    text-decoration: underline;
}
p{
    text-align:center;
    font-size: .9rem;
    /* background: white; */
    width: 10;
    font-weight:bold;
}
/* .CardDiv {
width: 30%;
border: 1px solid black;
margin: 1% auto;
background:#ffd180;
box-shadow: 0px 1px 40px -2px mediumpurple;
} */
`

const Button =styled.button`
color:white;
background: #ffb74d;
font-size: .9rem;
border-radius: 5px;
margin:1% auto;
padding: .5%;
cursor: pointer;
transition: ease background 400ms;
/* outline: 2px dashed green; */
&:hover{
background:#ff9800;
}
`


function CharacterCard (props) {

    const {characters, characterObj } = props;
    return (
      <CardBox>
      {characters.map(characterObj => {
        return <InnercardDiv className ='CardDiv' >
        <img src={characterObj.image} alt={characterObj.name} /> 
        <h2>{characterObj.name}</h2>
        <p>{characterObj.gender}</p>
        <p>{characterObj.origin.name}</p>
        <p>{characterObj.status}</p>
        <Button onClick={characterObj.results}> Learn More</Button>
      </InnercardDiv>
        
      })}
      </CardBox>
    )
  }
  

export default CharacterCard;