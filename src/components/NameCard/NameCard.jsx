import React from "react";
import './NameCard.css';
const nameCheapUrl=  'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard=({suggestedname})=>{
    return(
        <a 
        target="_blank"
        rel="noreferrer"
        href={`${nameCheapUrl}${suggestedname}`} className="card-link">
 <div className="result-name-card">
     <p className="result-name">{suggestedname}</p>
 </div>
 </a>
    );
};
export default NameCard;