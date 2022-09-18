const {rmdir, rename} = require('fs')
const {exec} = require('child_process')

module.exports = {
    clean: () => {
        rmdir(`lib`, {recursive: true}, (e) => { if (e) throw e; console.log('old lib removed')});
    },
    move: () => {
        rename(`./lib/esm/index.js`, "./lib/esm/index.mjs", (e) => { if (e) throw e; console.log('output renamed') });
    }
}