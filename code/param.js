var kek = function (_) { return console.log("Penis: ".concat(_)); };
kek(23);
setTimeout(function (_) {
    console.log('I happen sooner');
    setTimeout(function (_) {
        console.log('I happen later');
    }, 1);
}, 1);
