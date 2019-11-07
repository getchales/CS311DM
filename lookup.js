/* eslint-disable require-jsdoc */
"use strict";

function checkForSum(numList, numZ) {
    let mymap = new Map();
    for (const key of numList) {
        mymap.set(key, key);
        if (mymap.has(numZ - key)) 
        { return true; }


    }
    return false;

}