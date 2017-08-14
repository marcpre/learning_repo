function *naturalNumbers() {
  let n = 1;
 
  while (true) {
    yield n++;
  }
}
 
const nats = naturalNumbers();
 
console.log(nats.next().value) // 1
console.log(nats.next().value) // 2
console.log(nats.next().value) // 3