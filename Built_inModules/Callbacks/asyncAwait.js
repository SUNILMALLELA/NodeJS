function Demo1(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res("Data recieve")
        },3000)

    })
}
async function Demo2(){
const result = await Demo1()
console.log(result);

}
Demo2()

function dividend(num1,num2){
    return new Promise((res,rej)=>{
       if(num2===0){
            rej("num2 can't be 0")
        }
        else{
           res( num1/num2)
        }
    })
}
async function results() {
    try {
        const data = await dividend(10,0)
        console.log(data);  
    } catch (error) {
        console.log("error",error);
        
        
    }
}
results()