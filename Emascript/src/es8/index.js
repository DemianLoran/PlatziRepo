const data = {
    frontend: 'Melo',
    backend: 'Demi',
    design: 'Cliin',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'Hello';
console.log(string.padStart(7, 'NO'));
console.log(string.padEnd(9, '!!'));

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World', 3000))
            : reject(new Error('Test error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);        
    }
}
anotherFunction();