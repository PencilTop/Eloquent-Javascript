function parseINI(string) {
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        if (match = line.match(/^(\w+)\s*=\s*(.*)$/))
            section[match[1]] = match[2];
        else if (match = line.match(/^\[(.*)\]$/)) 
            section = result[match[1]] = {};
        else if (!/^\s*(;.*)?$/.test(line))
            throw new Error("Line " + line + " is not valid.");
    });
    return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki
`));
ini = "/home/ahui/PycharmProjects/pvacrunner/pipelines/BC031A.cloud.config.ini"
//let fso = new ActiveXObject("Scripting.FileSystemObject");
//let ts = fso.OpenTextFile(ini);
//let s = ts.ReadLines();
let fs = require("fs");
data = fs.readFileSync(ini, 'utf-8');
console.log(parseINI(data));