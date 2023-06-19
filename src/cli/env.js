const parseEnv = () => {
  const prefix = "RSS_";
  const envVariables = process.env;

  console.log("Parsed environment variables:");

  for (const key in envVariables) {
    if (key.startsWith(prefix)) {
      const value = envVariables[key];
      const parsedKey = key.substring(prefix.length);
      console.log(`RSS_${parsedKey}=${value}`);
    }
  }
};

parseEnv();
