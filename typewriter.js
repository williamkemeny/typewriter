const sentence = "hello there from lighthouse labs";
let time = 100;

const typewriter = (sentence, time) => {
  if (sentence === "" || sentence === undefined) {
    //Do nothing
  } else {
    time += 25;
    process.stdout.write(sentence[0]);
    let tail = sentence.slice(1);
    setTimeout(typewriter, time, tail, time);
  }
};

setTimeout(typewriter, time, sentence, time);
