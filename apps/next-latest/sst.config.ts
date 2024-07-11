import type { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';

const config: SSTConfig = {
  config(input) {
    console.log({ input });
    return {
      name: 'next-latest',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(function Site(arg) {
      console.log({ arg });
      const { stack } = arg;
      const site = new NextjsSite(stack, 'site');

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
};

export default config;
