// difine the higher-order function
function receivesAFunction(spy) {
    spy();  

}
// define funtion that will return a function
function returnsANamedFunction(){
    return function aA() {console.log("before all")};
}
// define a function that will return a anonymous funciton

function returnsAnAnonymousFunction() {
    return (() => console.log("before all") );
}