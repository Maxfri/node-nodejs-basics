import fs from "fs";

const rename = async () => {
  const currentFileName = "wrongFilename.txt";
  const newFileName = "properFilename.md";

  try {
    const currentFilePath = `./files/${currentFileName}`;
    const newFilePath = `./files/${newFileName}`;

    const currentFileExists = await isFileExists(currentFilePath);
    const newFileExists = await isFileExists(newFilePath);

    if (!currentFileExists || newFileExists) {
      throw new Error("FS operation failed");
    }

    await fs.promises.rename(currentFilePath, newFilePath);
    console.log("File renamed successfully.");
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

await rename();
