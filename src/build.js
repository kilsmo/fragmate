const fs = require('fs');

function generateDomString(importElm, domTagTemplate, domTagList) {
  let domString = importElm;

  for (let tag of tags) {
    const tagContent = tag === 'var' ?
      domTagTemplate.split('tag').join(tag).replace('var', 'vardom') :
      tagTemplateCode.split('tag').join(tag);
    domString += tagContent;
  }

  return domString;
}

const importElm = fs.readFileSync('src/importelm.js', 'utf8');
const tagTemplateCode = fs.readFileSync('src/tagtemplate.js', 'utf8');
const tags = JSON.parse(fs.readFileSync('src/taglist.json', 'utf8'));

const fileContent = generateDomString(importElm, tagTemplateCode, tags);

if (!fs.existsSync('lib')){
  fs.mkdirSync('lib');
}

fs.copyFileSync('src/fragmate.js', 'lib/fragmate.js');
fs.copyFileSync('src/elm.js', 'lib/elm.js');
fs.copyFileSync('src/nodecache.js', 'lib/nodecache.js');
fs.writeFileSync('lib/fmdom.js', fileContent);
