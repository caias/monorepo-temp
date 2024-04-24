import { config } from 'dotenv';
import path from 'node:path';

const stage = process.env.STAGE || 'dev';
const cwd = process.cwd();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: config({
    path: path.join(cwd, 'envs', `.env.${stage}`),
  }).parsed,
};

export default nextConfig;
