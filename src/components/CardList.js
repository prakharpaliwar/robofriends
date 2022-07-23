import Card from "./Card";
import React from "react";

const CardList=({robots})=>{
    const cardsArray= robots.map((user,i)=>{
        //console.log("Hello " +user.email);
        return (
        <Card key ={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}/>)
    })
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;
