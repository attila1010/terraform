//const mustache = require('./mustache.min.js');
const mustache = require('./handlebars');
const fs = require('fs');

let args = process.argv.slice(2);

let template_file = args[0];
let json_ressource_file = args[1];
let dest = args[2];

if (!dest) {
    console.log('node process_template.js template_file ressource_file dest_file');
    return;
}


if (!fs.existsSync(template_file)) {
    console.error('file ' + template_file + ' does not exist');
    return;
}

if (!fs.existsSync(json_ressource_file)) {
    console.error('file ' + json_ressource_file + ' does not exist');
    return;
}




let template = fs.readFileSync(template_file, { encoding: "utf8" });
let json_ressource = JSON.parse(fs.readFileSync(json_ressource_file, { encoding: "utf8" }));

Object.assign(json_ressource, { template_warning: "Autogenerated file, see mustache folder if you want to overwrite this file" });

let handletemplate = mustache.compile(template);
let res = handletemplate(json_ressource);

fs.writeFileSync(dest, res, { encoding: "utf8" });
