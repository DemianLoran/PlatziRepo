const obj = {
    name: 'Demian',
    age: 36,
    country: 'ES'
};

let { age, ...all} = obj;
console.log(all);

const obj1 = {
    name: 'Cliin',
    age: 36
}

const obj2 = {
    ...obj1,
    country: 'ES'
}
console.log(obj2);

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            //? resolve ('Hello Fuckking World')
            ? setTimeout(() => resolve('Hello slow World'), 3000)
            : reject ( new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))
