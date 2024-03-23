const seeds = require('./seeds.json')
let GetRandom = ({min,max})=>{
    return Math.floor((Math.random() * max) + min);
}
let GeneratorMneMoic = ()=>{
    let _seeds = seeds.seeds;
    let phrase = ''
    for(let i = 0; i<15;i++){
        let index = GetRandom({min:0,max:_seeds.length})
        if(i != 14){
            phrase += _seeds[index]+" ";
            _seeds.splice(index,1)
        }else{
            phrase += _seeds[index];
            _seeds.splice(index,1)
        }
    }
    return phrase
}
module.exports = {
    GenerateMneMonic: GeneratorMneMoic
}