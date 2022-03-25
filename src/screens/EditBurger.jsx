import React from "react";
import { useParams } from 'react-router-dom';

function EditBurger(){
    const {burgerid}=useParams();
    return(
        <div>
            <h2>Edit Burger</h2>
            <h2>Burger Id : {burgerid}</h2>
        </div>
    )
};
export default EditBurger;