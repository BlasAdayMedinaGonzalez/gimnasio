const {runServer, stopServer} = require('./server/server');

const startAplicattion = () => {
    console.log(`Aplication is running...`);
    runServer();
}

const stopAplication = () => {
    console.log(`Received kill signall, shutting down...`);
    stopServer();
    process.exit(0)
}

process.on('SIGINT', () => {stopAplication()});
process.on('SIGTERM', () => {stopAplication()});

startAplicattion();