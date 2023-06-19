import { parentPort } from "worker_threads";

// n should be received from the main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const n = Number(process.argv[2]);
  const result = nthFibonacci(n);

  parentPort.postMessage(result);
};

sendResult();
