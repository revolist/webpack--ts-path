// Get paths from tsconfig and convert it to webpack format
exports.makeModuleNameMapper = function(srcPath, pathFunc) {
    const {paths} = require('../tsconfig.json').compilerOptions;
    const aliases = {};
  
    // Iterate over paths and convert them into moduleNameMapper format
    Object.keys(paths).forEach(item => {
        const key = item.replace('/*', '');
        const path = paths[item][0].replace('/*', '');
        aliases[key] = pathFunc.resolve(__dirname, `${srcPath}/${path}`);
    });
    return aliases;
}

