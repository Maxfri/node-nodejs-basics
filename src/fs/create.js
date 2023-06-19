import fs from "fs";

const create = async () => {
  const content = "I am fresh and young";
  const filePath = "./files/fresh.txt";
  try {
    if (fs.existsSync(filePath)) {
      throw new Error("FS operation failed");
    }
    await fs.promises.writeFile(filePath, content);
    console.log("File created successfully.");
  } catch (error) {
    console.error(error.message);
  }
};

await create();
