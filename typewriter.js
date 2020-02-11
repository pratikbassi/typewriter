let sentence = "hello there from lighthouse labs";
sentence = sentence + "\n"
let waitTime = 0;
for (let char of sentence){
  waitTime = waitTime + 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, waitTime)
}
