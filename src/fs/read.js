import fs from "fs";

const read = async () => {
  const fileName = "fileToRead.txt";
  const filePath = `./files/${fileName}`;

  try {
    const fileExists = await isFileExists(filePath);

    if (!fileExists) {
      throw new Error("FS operation failed");
    }

    const content = await fs.promises.readFile(filePath, "utf8");
    console.log("File content:");
    console.log(content);
  } catch (error) {
    console.error(error.message);
  }
};

const isFileExists = async (filePath) => {
  try {
    await fs.promises.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
};

await read();
