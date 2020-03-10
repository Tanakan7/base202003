const path = require('path')
const glob = require('glob')

exports.getDirName = (localpath)=>{
    let local = glob.sync(path.resolve(__dirname, `..${localpath}/*`))
    local = local.filter(path => !path.includes('.'))
    return local.map(path => path.split('/')[path.split('/').length-1])
}
