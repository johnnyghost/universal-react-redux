const config = {
  TOKEN: process.env.GITHUB_TOKEN,
  USER: 'johnnyghost'
};

if(__DEV__) {
  const { GITHUB_TOKEN } = require('./tokens');
  config.TOKEN = GITHUB_TOKEN;
}

export default config;
