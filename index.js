// difine the higher-order function
function receivesAFunction(spy) {
    spy();  

}
// define funtion that will return a function
function returnsANamedFunction(){
    return function aA() {console.log("before all")};
}