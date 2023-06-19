import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const filePath = "./files/script.js";
  const childProcess = spawn("node", [filePath, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);

  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

const args = ["someArgument1", "someArgument2"];
spawnChildProcess(args);
