let input='';
function display(Input) {
    input+=Input;
    document.querySelector('.result').innerHTML= input;
}
function evaluation(evaluate) {
    let x;
    if(input.includes('^')){
        let p = input.split('^');
        x = eval(`${p[0]}**${p[1]}`);
    }else if (input.startsWith('cos(') || input.startsWith('sin(') || input.startsWith('tan(')){
         let s = input.substring(input.indexOf('(') + 1, input.indexOf(')'));
         let D = parseFloat(s);
         let R = D * (Math.PI / 180);
         let p=input.split('c');
         if (input.startsWith('cos(')) {
            x = Math.cos(R);
         } else if (input.startsWith('sin(')) {
            x = Math.sin(R);
         } else if (input.startsWith('tan(')) {
            x = Math.tan(R);
         }
        } else if(input.includes('&radic;')) {
             let bs = parseFloat(input.substring(input.indexOf('&radic;') + 7));
             x = Math.sqrt(bs);
            }else{
             x = eval(input);
            }
    document.querySelector('.result').innerHTML= '= '+x ;
    input=String(x);
}
function resut() {
    document.querySelector('.result').innerHTML= '';
    input='';
}
function deleting() {
    input=input.slice(0,-1);
    document.querySelector('.result').innerHTML= input;
}