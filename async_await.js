

function test1(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Raz");
            resolve();
        },1000)
    })
}

function test2(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Dwa");
            resolve();
        },800)
    })
}

function test3(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Trzy");
            resolve();
        },700)
    })
}

 async function wykonajFunkcjePozostale (){
    await test1();
    await test2();
    await test3();
}

wykonajFunkcjePozostale();
