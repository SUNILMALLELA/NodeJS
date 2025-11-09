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
dividend(10,0).then((res)=>console.log("result is ",res))
.catch((err)=>console.log("error occur",err)
)

