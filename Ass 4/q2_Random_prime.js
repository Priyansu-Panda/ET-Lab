function generateRand(){
    // return new Promise((res,rej)=>{
    //     setTimeout(()=>{
    //         let n = Math.floor(Math.random()*100);
    //         console.log('Random Number: '+n);
    //         res(n);
    //     },1000)
    // })
    return Math.floor(Math.random()*100);
}

function isPrime(n){
    return new Promise((resolve,reject)=>{
        if (n < 2) {
            reject(`${n} is Not Prime`);
            return;
        }
        // Loop up to the square root of n for efficiency
        for(let i=2; i*i<=n; i++){
            if(n%i==0){
                reject(`${n} is Not Prime (Divisible by ${i})`);
                return;
            }
        }
        resolve(`${n} is Prime`);
    })
}


async function checkPrime(){
    // let n = await generateRand(); 
    let n = generateRand(); 
    let h1 = document.querySelector('h1');
    let h2 = document.querySelector('h2');
    h1.innerHTML = n;  
    
    let messageParts = [];

    // Check Prime
    try{
        let primeMsg = await isPrime(n);
        messageParts.push(primeMsg);
    }catch(error){
        messageParts.push(error);
    }

    // Check Even/Odd
    if(n%2==0){
        console.log('Number is Even');
        messageParts.push('Number is Even');
    }else{
        console.log('Number is Odd');
        messageParts.push('Number is Odd');
    }

    // Display both
    h2.innerHTML = messageParts.join(" and ");
}