const fs = require('fs');

let fileContent = '';

const htmlelmCode = fs.readFileSync('fmdomhtmlelm.js', 'utf8');
const tagTemplateCode = fs.readFileSync('fmdomtagtemplate.js', 'utf8');
const tags = JSON.parse(fs.readFileSync('fmdomtaglist.json', 'utf8'));

fileContent += htmlelmCode;

for (let tag of tags) {
  const tagContent = tag === 'var' ? tagTemplateCode.split('tag').join(tag).replace('var', 'vardom') :
                                     tagTemplateCode.split('tag').join(tag);
  fileContent += tagContent;
}

fs.writeFileSync('fmdom.mjs', fileContent);
