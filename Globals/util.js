console.log('Start util');
const foo = 'bar';
global.foo = foo;
module.exports = foo;
console.log('End util');