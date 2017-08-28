const _ = require("lodash")
const fs = require("fs")

var objSynch = JSON.parse(fs.readFileSync('../../data/products.json', 'utf8'));

//get uniq value back
console.log(_.uniq(objSynch))

console.log(_.uniqBy(objSynch, [_.asset]))
