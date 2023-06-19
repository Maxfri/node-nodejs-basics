import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  const inputFilePath = "./files/fileToCompress.txt";
  const outputFilePath = "./files/archive.gz";

  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);

  const gzipStream = createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("File compression completed");
  });

  writeStream.on("error", (error) => {
    console.error("An error occurred while compressing the file:", error);
  });
};

await compress();
