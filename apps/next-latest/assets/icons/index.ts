const context = require.context('./', false, /\.svg$/);
if (typeof window !== 'undefined') {
  context.keys().map(context);
}

const fileNames: string[] = context
  .keys()
  .map(fileName => fileName.replace('./', '').replace('.svg', ''));

export default fileNames;
