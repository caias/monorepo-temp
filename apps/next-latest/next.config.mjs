import { config } from 'dotenv';
import path from 'node:path';

const stage = process.env.STAGE || 'dev';
const ROOT_PATH = path.resolve('..', '..');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: config({
    path: path.join(ROOT_PATH, 'envs', `.env.${stage}`),
  }).parsed,
};

export default nextConfig;
