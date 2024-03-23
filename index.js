const {GenerateMneMonic} = require('./MnemoicGenerator')
const HdAddGen = require('hdaddressgenerator')
let GenerateWallet = async() =>{
    let mnemonic = GenerateMneMonic()
    let hdw = HdAddGen.withMnemonic(mnemonic,false,"ETH")
    let wallet = await hdw.generate(1)
    let data = wallet[0]
    const {address,privKey} = data
    let details = {address,privKey,mnemonic}
    return details
}
let recoverWallet = async(mnemonic)=>{
    let hdw = HdAddGen.withMnemonic(mnemonic,false,"ETH")
    let wallet = await hdw.generate(1)
    let data = wallet[0]
    const {address,privKey} = data
    let details = {address,privKey}
    return details
}
module.exports= {
    GenerateWallet,
    recoverWallet
}
