// no block scope
function counterLoop() {
    console.log(i); // undefined
    for (var i = 0; i < 3; i++) {
        console.log(i); // 0 then 1 then 2
    }
    console.log(i); // 3
}

counterLoop();

// good practice it to declare variable at the top of function to avoid unwanted undefined variables