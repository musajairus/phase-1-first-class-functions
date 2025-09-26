function receivesAFunction(fn) {
    return fn();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function");
    };
}

// Exporting the functions for use in other modules
module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};