// Dependencies
import React from "react";

export const Pet = ({name, animal, breed}) => {
    //console.log('props: ', props);
//const Pet = () => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{animal}</h2>
            <h2>{breed}</h2>
        </div>
    );
};

//export default Pet;
