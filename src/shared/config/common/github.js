import { GITHUB_TOKEN } from './tokens';

const config = {
  TOKEN: process.env.GITHUB_TOKEN || GITHUB_TOKEN
};

export default config;
