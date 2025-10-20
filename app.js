let previousTime = '';

setInterval(() => {
    const now = new Date().toLocaleTimeString();
    if(now !== previousTime) {
        process.stdout.write(`\rCurrent Time: ${now}`);
        previousTime = now;
    }
}, 200);