import fs from "fs";

const remove = async () => {
  const fileName = "fileToRemove.txt";
  const filePath = `./files/${fileName}`;

  try {
    const fileExists = await isFileExists(filePath);

    if (!fileExists) {
      throw new Error("FS operation failed");
    }

    await fs.promises.unlink(filePath);
    console.log("File deleted successfully.");
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

await remove();
