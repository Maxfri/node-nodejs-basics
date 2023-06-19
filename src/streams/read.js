import { createReadStream } from "fs";

const read = async () => {
  const filePath = "./files/fileToRead.txt";
  const stream = createReadStream(filePath);

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("end", () => {
    console.log("File reading completed");
  });

  stream.on("error", (error) => {
    console.error("An error occurred while reading the file:", error);
  });
};

await read();
