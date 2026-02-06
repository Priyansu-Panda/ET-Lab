const inp = document.getElementById('age');

function delay2(age){
    let cnt = 0;
    let id = setInterval(()=>{
        cnt++;
        console.log(cnt);
    },1000)
    console.log("Wait for 2 seconds");
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            clearInterval(id);
            if(age>=18){
                res('U are eligible for voting');
            }else{
                rej('U are not eligible for voting');
            }
        },2000)   
    })
}

async function checkAge(){
    let age = inp.value
    let msg = await delay2(age);
    console.log(msg);
}


// async function delay(age){
//     let tim = new Promise((res,rej)=>{
//         console.log('wait for 2 seconds'); 
//         if(age>=18){
//             setTimeout(()=>{
//                 res('U are eligible for voting');
//             },2000)
//         }else{
//             setTimeout(()=>{
//                 rej('U are not eligible for voting');
//             },2000)
//         }
//     })
//     return tim;  // returns a promise
// }
// function checkAge(){
//     let age = inp.value;
//     // console.log('age: '+age);
//     console.log(delay(age)); // returns a promise
//     delay(age).then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log(error);
//     })
// }
