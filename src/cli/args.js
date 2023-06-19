const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArgs = {};

  for (let i = 0; i < args.length; i += 2) {
    const argKey = args[i].replace(/^--/, "");
    const argValue = args[i + 1];
    parsedArgs[argKey] = argValue;
  }

  console.log("Parsed command line arguments:");

  for (const key in parsedArgs) {
    const value = parsedArgs[key];
    console.log(`${key} is ${value}`);
  }
};

parseArgs();
