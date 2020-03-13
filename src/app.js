import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp"; //OR ./components/IndecisionApp.js

ReactDOM.render(
<IndecisionApp />,
document.getElementById('app')
)


//class OldSyntax{
//    constructor(){
//        this.name='nag';
//        this.getGreeting = this.getGreeting.bind(this);//to bind this to the meethod
//    }
//    getGreeting(){
//        return `Hi, i am ${this.name}`
//    }
//}
//const oldSyn = new OldSyntax();
//console.log(oldSyn);
//const fetchGreeting=oldSyn.getGreeting;
//console.log(fetchGreeting());//this gets broken if not bound in the contructor
//

//------------------

//class NewSyntax{
//    name='marc';
//getGreeting = () => {
//     return `Hi, i am ${this.name}`
//}
//}
//const NewSyn = new NewSyntax();
//console.log(NewSyn);
//const fetchGreeting2=NewSyn.getGreeting;
//console.log(fetchGreeting2());//here cuz of arrow functions which do not have this bound, and takes the scope of function, here the class, as its a class properties syntax, binds this automatically