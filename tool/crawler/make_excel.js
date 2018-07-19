const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

let allTables = {};
let files = ['./raw/main.min.js', './raw/main.min5.js', './raw/main.min2.js', './raw/main.min3.js', './raw/main.min4.js'];

for (let file of files) {
    let lines = fs.readFileSync(file).toString().split('\n');
    let [start, str] = [0, []];
    for (let lineNum = 0; lineNum < lines.length; lineNum++) {
        const line = lines[lineNum];
        if (line.indexOf('var g_table;') !== -1) {
            start = lineNum + 2;
        }
        if (str.length > 0 && line.indexOf('(g_table || (g_table = {}))') !== -1) {
            let tableName = str[0].substring(str[0].indexOf(' = ') - 1, str[0].indexOf(' = '));
            let tableContent = str[0].substring(str[0].lastIndexOf(' = ') - 1, str[0].lastIndexOf(' = '));
            str.pop();
            eval(str.join('\n'));
            eval(`allTables[${tableName}] = ${tableContent};`);
            [start, str] = [0, []];
        }
        else if (lineNum >= start && start !== 0) {
            str.push(line);
        }
    }
}

function checkK(data, object2Check, checkNum, keys) {
    for (let k in object2Check) {
        if (typeof object2Check[k] === 'object' && !(object2Check[k] instanceof Array)) {
            while (keys.length > checkNum) {
                keys.pop();
            }
            keys.push(k);
            checkK(data, object2Check[k], checkNum + 1, keys)
        }
        else {
            data[keys.join(',')] = object2Check;
            return;
        }
    }

}

function mkdirpSync(dirName) {
    if (fs.existsSync(dirName)) {
        return true;
    } else {
        if (mkdirpSync(path.dirname(dirName))) {
            fs.mkdirSync(dirName);
            return true;
        }
    }
    return false
}

const outDir = './data/config/';
mkdirpSync(outDir);

let url = new Set();

for (let tableName in allTables) {
    let data = {};
    checkK(data, allTables[tableName], 0, []);
    let keys = [], id = [];
    for (let k in data) {
        let t = k.split(',');
        let idx = 0;
        while (id.length < t.length) {
            id.push('id' + idx++);
        }
        if (keys.length < Object.keys(data[k]).length) {
            keys = Object.keys(data[k]);
        }
    }
    let lines = [];
    let str1 = [''], str2 = [101,102];
    for (let i = 1; i < [...id, ...keys].length; ++i) {
        str1.push('');
        str2.push(102 + i);
    }
    let keysCopy = [...keys];
    let rowId = 0;
    for (let k in data) {
        let line = [(++rowId)];
        let tempt = k.split(',');
        for(let kkk = 0; kkk < tempt.length; ++kkk) {
            if(!isNaN(parseInt(tempt[kkk]))) {
                tempt[kkk] = parseInt(tempt[kkk]);
            }
            line.push(tempt[kkk]);
        }
        for (let idx = 0; idx < keys.length; ++idx) {
            let key = keys[idx];
            if (data[k][key]) {
                if (typeof data[k][key] === 'object') {
                    let str = JSON.stringify(data[k][key]);
                    if(str.indexOf('res/') !== -1) {
                        for(let instance of data[k][key]) {
                            url.add(instance);
                        }
                    }
                    line.push(JSON.stringify(data[k][key]));
                    if (keysCopy[idx].indexOf('JSON_') === -1) {
                        keysCopy[idx] = 'JSON_' + keysCopy[idx];
                    }
                }
                else if (typeof data[k][key] === 'string' && data[k][key].indexOf(',') !== -1) {
                    if(data[k][key].indexOf('res/') !== -1) {
                        url.add(data[k][key]);
                    }
                    if (data[k][key].indexOf('[') !== -1 && data[k][key].indexOf(']') !== -1) {
                        line.push(data[k][key]);
                        if (keysCopy[idx].indexOf('JSON_') === -1) {
                            keysCopy[idx] = 'JSON_' + keysCopy[idx];
                        }
                    }
                    else {
                        if (keysCopy[idx].indexOf('Text_') === -1 && (/.*[\u4e00-\u9fa5]+.*$/.test(data[k][key]))) {
                            keysCopy[idx] = 'Text_' + keysCopy[idx];
                        }
                        line.push(data[k][key].replace(new RegExp(',', 'g'), '，'));
                    }

                }
                else {
                    if (keysCopy[idx].indexOf('Text_') === -1 && (/.*[\u4e00-\u9fa5]+.*$/.test(data[k][key]))) {
                        keysCopy[idx] = 'Text_' + keysCopy[idx];
                    }
                    if(typeof data[k][key] === 'string' && data[k][key].indexOf('res/') !== -1) {
                        url.add(data[k][key]);
                    }
                    line.push(data[k][key]);
                }
            }
            else{
                line.push('');
            }
        }
        lines.push(line);
    }
    lines = [['ID', ...id, ...keysCopy], str1, str2, ['ID', ...id, ...keysCopy], ...lines];
    let workSheet = xlsx.utils.aoa_to_sheet(lines);
    xlsx.writeFile({Sheets: {Main: workSheet}, SheetNames:['Main']}, outDir + tableName + '.xlsx');
}

// console.log(Object.keys(allTables).length);
// http://172.16.1.83/config.tar.gz
// console.log(parseInt('1'));

