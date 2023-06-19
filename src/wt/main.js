import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  const results = [];

  for (let i = 0; i < numCPUs; i++) {
    const workerData = i + 10;
    const worker = new Worker("./worker.js", { workerData });

    const result = await new Promise((resolve) => {
      worker.on("message", (message) => resolve(message));
      worker.on("error", (error) => resolve({ status: "error", data: null }));
    });

    results.push(result);
  }

  console.log(results);
};

await performCalculations();
