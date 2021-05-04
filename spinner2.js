let delay = 100;
let animArr = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    '];

for (let elem of animArr) {
  setTimeout(() => {
    process.stdout.write(elem);
  }, delay);
  delay += 200;
}