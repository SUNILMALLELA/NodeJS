function Demo1(name,callback){
    console.log(`I am a ${name}`); 
    callback()
}
function Demo2(){
    console.log("I am a Full Stack Developer");
}
Demo1("Sunil",Demo2)