const parseEnv = () => {
    const env = Object.entries(process.env)
    const variables = env.filter((val) => {
       if(val[0].includes('RSS_')) return val
    })
    variables.forEach((val, indx) => {
        process.stdout.write(`${val[0]}=${val[1]}`);
        if (!(indx === variables.length - 1)){ 
            process.stdout.write('; ')
        }
    })
};

parseEnv();