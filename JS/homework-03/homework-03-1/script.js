
function returnType(param) {
    console.log(typeof param);
    return typeof param;
}

returnType(42);               // "number"
returnType("Hello, World!");  // "string"
returnType(true);            // "boolean"
returnType({ key: "value" }); // "object"
returnType(undefined);        // "undefined"
returnType();           // "undefined"