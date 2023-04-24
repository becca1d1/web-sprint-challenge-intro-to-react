// Write your Character component here
import React, { useState, useEffect } from 'react';

function Character({characters}) {
    console.log(characters);
    return (
        <div className="characterList">
            <ul>
            {characters.name.map((names) => {
                return <li key={names}></li>
            })}
            </ul>
        </div>
    );
}
//research optional chaining
// how do i delay a rendering of a component while youre waiting on an API call?
export default Character;