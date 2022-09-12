let kek = _ => console.log(`Penis: ${_}`);

kek(23);


setTimeout( _ => {
    console.log('I happen sooner');
    setTimeout( _ => {
        console.log('I happen later');
    }, 1);
}, 1);

