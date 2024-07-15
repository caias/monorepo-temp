import type { SSTConfig } from 'sst';
import { NextjsSite, Bucket } from 'sst/constructs';

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
      const bucket = new Bucket(stack, 'public');
      const site = new NextjsSite(stack, 'site', {
        bind: [bucket],
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
};

export default config;
