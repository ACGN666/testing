const assert = require("assert");

const {add,mul} = require("../src/math");


if(add(2,3,4,5,6) === 20){
    console.log("add(2,3,4,5,6) === 20 OK");
}else{
    console.log("add(2,3,4,5,6) !== 20 ERROR");
}

assert.equal(add(2,3,4,5,6),21);


