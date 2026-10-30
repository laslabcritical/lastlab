import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join} from 'node:path';
// Next's shared root layout does not receive a descendant locale segment.
// Set the exported document language for each locale, preserving every other byte.
for(const locale of ['es','en']) {
 async function walk(dir){for(const item of await readdir(dir,{withFileTypes:true})) {
  const path=join(dir,item.name);
  if(item.isDirectory())await walk(path);
  else if(item.name.endsWith('.html')) {
   const before=await readFile(path,'utf8');
   const after=before.replace(/(<html\b[^>]*\blang=")[^"]*(")/,`$1${locale}$2`);
   if(before!==after)await writeFile(path,after);
  }
 }}
 await walk(join('out',locale));
}
console.log('Exported HTML document languages: es/en.');
