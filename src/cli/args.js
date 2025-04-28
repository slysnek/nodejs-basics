const parseArgs = () => {
    const args = Object.entries(process.argv).slice(2)
    for (let i = 0; i < args.length; i+=2) {
        process.stdout.write(`${args[i][1].slice(2)} is ${args[i+1][1]}`);
        if (!(i === args.length - 1)){ 
            process.stdout.write(', ')
        }
    }
};

parseArgs();