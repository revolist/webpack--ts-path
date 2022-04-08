# webpack--ts-path
Loads modules by path in tsconfig.json and adds to webpack alias


```webpack.config.js```

```
const path = require('path');
const { makeModuleNameMapper } = require('./module.wrapper');

module.exports = {
  mode: 'production',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      ...makeModuleNameMapper('..', path),
    },
  },
};
```
