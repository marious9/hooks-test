import React, { useState, useEffect } from 'react';
import Server from './Server';
import Search from '../utils/search/Search';
import { generateMockServers } from '../mock-data/generate-files';

const Servers = () => {
    const pageLimit = 300;
    const [servers, setServers] = useState([ { id: '-1', name: 'name', location: 'poland'} ]);
    const [checkedServers, setCheckedServers] = useState([]);
    const [page, setPage] = useState(1);

    const takeElementAndPutItOnFirstPlace = (array, elementIds) => {
        const firstElements = elementIds.map(id => array.find(element => element.id === id));
        const newArray = array.filter(element => !elementIds.some(id => id === element.id));

        return [...firstElements, ...newArray];
    };

    const checkOrUncheckServer = serverId => {
        if(!checkedServers.some(id => id === serverId)) {
            setCheckedServers([...checkedServers, serverId]);
        } else {
            setCheckedServers(checkedServers.filter(id => id !== serverId));
        }
    };

    useEffect(() => {
        const fetchServers = () => {
            const mockedServers = generateMockServers();
            setServers(mockedServers);
        };
        fetchServers();
    }, []);

    return (
        <React.Fragment>
            <Search list={servers} checkOrUncheckServer={checkOrUncheckServer}/>
            <div className='servers'>
                {takeElementAndPutItOnFirstPlace(servers, checkedServers).slice(0, pageLimit*page)
                .map(server =>
                    <Server
                        key={server.id}
                        server={server}
                        checkServer={() => checkOrUncheckServer(server.id)}
                        checked={checkedServers.some(id => id === server.id)} />
                )}
            </div>
            <div className='load-more-bar'>
            <button disabled={page < 2} onClick={() => setPage(page - 1)}>
                    Load less..
                </button>
                <button disabled={page*pageLimit >= servers.length} onClick={() => setPage(page + 1)}>
                    Load more..
                </button>
            </div>
        </React.Fragment>
    );
};

export default Servers;
