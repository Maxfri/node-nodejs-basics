import fs from "fs";

const list = async () => {
  const folderPath = "./files";

  try {
    const folderExists = await isFolderExists(folderPath);

    if (!folderExists) {
      throw new Error("FS operation failed");
    }

    const files = await fs.promises.readdir(folderPath);
    console.log("Files in the folder:", files);
  } catch (error) {
    console.error(error.message);
  }
};

const isFolderExists = async (folderPath) => {
  try {
    const stats = await fs.promises.stat(folderPath);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};

await list();
