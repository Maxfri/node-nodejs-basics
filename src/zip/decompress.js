import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

const decompress = async () => {
  const inputFilePath = "./files/archive.gz";
  const outputFilePath = "./files/fileToCompress.txt";

  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);

  const gunzipStream = createGunzip();

  readStream.pipe(gunzipStream).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("File decompression completed");
  });

  writeStream.on("error", (error) => {
    console.error("An error occurred while decompressing the file:", error);
  });
};

await decompress();
