// half a second work
const start = Date.now();
while (Date.now() - start < 500) {
  let s = '';
  for (let j = 0; j < 100000; j++) s += 'a';
}