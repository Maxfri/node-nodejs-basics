import { createReadStream } from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  const filePath = "./files/fileToCalculateHashFor.txt";
  const hash = createHash("sha256");

  return new Promise((resolve, reject) => {
    const stream = createReadStream(filePath);
    stream.on("data", (data) => {
      hash.update(data);
    });

    stream.on("end", () => {
      const hashHex = hash.digest("hex");
      console.log("SHA256 hash:", hashHex);
      resolve();
    });

    stream.on("error", (error) => {
      reject(error);
    });
  });
};

await calculateHash();
