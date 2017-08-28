const fs = require("fs")

//##############
//## Read Data##
//##############

//https://stackoverflow.com/questions/10011011/using-node-js-how-do-i-read-a-json-object-into-server-memory
//synch way
var objSynch = JSON.parse(fs.readFileSync('../../data/products.json', 'utf8'));


//#####################
//##Get specific data##
//#####################
console.log(typeof(objSynch))
console.log("###############")
console.log("Get first part:")
console.log("###############")
console.log(objSynch[1])
console.log("###############")
console.log("Get asset part:")
console.log("###############")
console.log(objSynch[1].asset)
console.log("##########")
console.log("Get keys:")
console.log("##########")
for (var i in objSynch) {
    var key = i;
    var val = objSynch[i];
    for (var j in val) {
        var sub_key = j;
        var sub_val = val[j];
        console.log(sub_key);
    }
}
console.log("#######################")
console.log("Get length of Json obj:")
console.log("#######################")
//console.log(Object.keys(objSynch).length)
console.log(objSynch.length)
console.log("########################")
console.log("Get all values Json obj:")
console.log("########################")
var assets = objSynch.map(d => d.asset); //.map() only works for arrays
console.log(assets)
console.log("###############")
console.log("Write Json obj:")
console.log("################")
fs.writeFile("../data/del_me.json", objSynch[1])
console.log("###############")
console.log("Get all keys:")
console.log("################")
console.log(Object.keys(objSynch))
console.log("###############")
console.log("Find key:")
console.log("################")
/*
// the code you're looking for
var needle = 'EOS';
// iterate over each element in the array
for (var i = 0; i < objSynch.length; i++) {
    // look for the entry with a matching `code` value
    if (objSynch[i].code == needle) {
        console.log("found it: " + objSynch[i].asset)
        // we found it
        // obj[i].name is the matched result
    }
} */
console.log("###############")
console.log("Count Occurrence:")
console.log("################")
/*objSynch.reduce(function(sums, entry) {
    sums[entry.currency] = "EOS" //(sums[entry.city] || 0) + 1;
    return sums;
}, {});
*/
const a = objSynch.filter(x => x.asset === "EOS")
