import fs from "fs";
import { promisify } from "util";

const copy = async () => {
  const folder = "files";
  const copyFolder = "files_copy";

  try {
    const existsFolder = await promisify(fs.exists)(folder);
    const existsCopyFolder = await promisify(fs.exists)(copyFolder);

    if (!existsFolder || existsCopyFolder) {
      throw new Error("FS operation failed");
    }

    await promisify(fs.mkdir)(copyFolder);
    const files = await promisify(fs.readdir)(folder);
    files.map(async (file) => {
      const fileName = file;
      await promisify(fs.copyFile)(
        `${folder}/${fileName}`,
        `${copyFolder}/${fileName}`
      );
    });
    console.log("Folder copied successfully.");
  } catch (error) {
    console.error(error.message);
  }
};

await copy();
