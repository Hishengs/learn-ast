/* const fs = require('fs');
const parser = require('@babel/parser');

const sourceFiles = fs.readdirSync('./source-code');

sourceFiles.forEach(file => {
  const ast = parser.parse(fs.readFileSync(`./source-code/${file}`, { encoding: 'utf-8' }));
  fs.writeFileSync(`./gen-ast/${file.replace('.js', '.json')}`, JSON.stringify(ast, null, 2));
}); */

const { transform } = require('@babel/core');

const res = transform(`const double = x => x * 2;`, {
  presets: ["@babel/preset-env"],
});

console.log(res.code);
