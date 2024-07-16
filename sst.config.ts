import path from 'node:path';
import type { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';

const ROOT_PATH = path.resolve('..', '..');

import dotenv from 'dotenv';

const config: SSTConfig = {
  config(input) {
    console.log({ input });
    const stage = input.stage;
    const environment = dotenv.config({
      path: path.join(ROOT_PATH, 'envs', `.env.${stage}`),
    }).parsed;

    console.log({ environment });

    return {
      name: 'next-latest',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(function Site(arg) {
      console.log({ arg });
      const { stack } = arg;
      // const bucket = new Bucket(stack, 'public');
      const site = new NextjsSite(stack, 'site', {
        path: './apps/next-latest',
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
};

export default config;
