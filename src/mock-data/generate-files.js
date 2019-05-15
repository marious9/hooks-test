export const generateMockServers = () => {
    const amount = 20000;
    const server = {
        id: 1,
        name: 'server',
        location: 'warsaw'
    };
    const generatedFile = [];

    for (let i = 0; i < amount; i++) {
        const cpyServer = {};
        cpyServer.id = i + 1;
        cpyServer.location = server.location + ` ${i}`;
        cpyServer.name = server.name + ` ${i}`;
        generatedFile.push(cpyServer);
    }
    
    return generatedFile;
};


