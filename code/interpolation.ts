// example domaine name of url
let webString: string = 'cypress.io';
// standard url prefix 
const webPrefix: string = 'https://';

// Back-tick interpolation ==> full template string using ``
console.log(`${webPrefix}${webString}`);