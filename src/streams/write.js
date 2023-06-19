import { createWriteStream } from "fs";

const write = async () => {
  const filePath = "./files/fileToWrite.txt";
  const stream = createWriteStream(filePath);

  process.stdin.pipe(stream);

  process.stdin.on("end", () => {
    console.log("Data writing completed");
  });

  process.stdin.on("error", (error) => {
    console.error("An error occurred while reading input:", error);
  });
};

await write();
