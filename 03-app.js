// Modules

let values = require('./modules/03-module');
let shop = require('./modules/03.02-module');


values.sayHi(values.anes);
values.sayHi(values.anes02); 
values.sayHi('anes 0.3');

console.log(shop.items);
console.log(shop.person);

require('./modules/03.03-module');
