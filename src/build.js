const fs = require('fs');

function generateDomString(domHtmlElm, domTagTemplate, domTagList) {
  let domString = domHtmlElm;

  for (let tag of tags) {
    const tagContent = tag === 'var' ?
      domTagTemplate.split('tag').join(tag).replace('var', 'vardom') :
      tagTemplateCode.split('tag').join(tag);
    domString += tagContent;
  }

  return domString;
}

const htmlElmCode = fs.readFileSync('src/fmdomhtmlelm.js', 'utf8');
const tagTemplateCode = fs.readFileSync('src/fmdomtagtemplate.js', 'utf8');
const tags = JSON.parse(fs.readFileSync('src/fmdomtaglist.json', 'utf8'));

const fileContent = generateDomString(htmlElmCode, tagTemplateCode, tags);

if (!fs.existsSync('lib')){
  fs.mkdirSync('lib');
}

fs.writeFileSync('lib/fmdom.js', fileContent);
