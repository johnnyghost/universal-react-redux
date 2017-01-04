const config = {
  TOKEN: process.env.GITHUB_TOKEN
};

if(__DEV__) {
  const { GITHUB_TOKEN } = require('./tokens');
  config.TOKEN = GITHUB_TOKEN;
}

export default config;
