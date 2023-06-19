import { Transform } from "stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk = chunk.toString().split("").reverse().join("");
      this.push(reversedChunk);
      callback();
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);

  process.stdin.on("end", () => {
    console.log("Data transformation completed");
  });

  process.stdin.on("error", (error) => {
    console.error("An error occurred while reading input:", error);
  });
};

await transform();
