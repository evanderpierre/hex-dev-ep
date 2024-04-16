import React from "react";
import '../styles/CustomBanner.css';
import anthropic from '../images/logos/anthropic.svg'
import algolia from '../images/logos/Algolia.svg'
import brex from '../images/logos/Brex-logo.svg'
import notion from '../images/logos/Notion.svg'
import recursion from '../images/logos/Recursion.svg'

function CustomBanner() {
return (

    <div className="customBanner">
        <h3>How the best data teams do their best work</h3>
        <div className="imgRow">
<ul>
<li><img src= {anthropic} alt="Anthropic" /></li>
<li><img src= {algolia} alt="Algolia" /></li>
<li><img src= {brex} alt="brex" /></li>
<li><img src= {notion} alt="notion" /></li>
<li><img src= {recursion} alt="recursion" /></li>

</ul>
        </div>
    </div>




);
}

export default CustomBanner;
