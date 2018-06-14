let fs = require('fs');
const {S2C} = require("./game_app/proto/cmd.js");
let file = fs.readFileSync('./game_app/proto/cmd.d.ts');
let lineInfo = file.toString().split('\n');
let content = "\n\texport enum Protocol{\n";
for (let cmd  in S2C.Message['fields']) {
    if (!S2C.Message["fields"].hasOwnProperty(cmd))
        continue;
    if (cmd.indexOf("SC_") !== -1) {
        content += "\t\t" + cmd + "_ID = \"" + cmd + "\",\n";
    }
}
content += "\t}\n}\n";
lineInfo[1] = content;
fs.writeFileSync("./game_app/proto/cmd.d.ts", lineInfo.join('\n'));