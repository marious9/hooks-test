import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Server from './Server';
import { provideMockServers } from '../mock-data/generate-files';

const Servers = () => {    
    const pageLimit = 300;
    const [servers, setServers] = useState([{ id: '-1', name: 'name', location: 'poland'} ]);
    const [checkedServers, setCheckedServers] = useState([]);

    //const countPages = servers.length/pageLimit < 1 ? 1 : Math.ceil(servers.length/pageLimit);

    const [page, setPage] = useState(1);
    // const [loader, setLoader] = useState(false);

    const checkOrUncheckServer = serverId => {
        if(!checkedServers.some(id => id === serverId)) {        
            setCheckedServers([...checkedServers, serverId]);
        } else {
            setCheckedServers(checkedServers.filter(id => id !== serverId));
        }
    }

    useEffect(() => {
            const fetchServers = () => {
            const mockedServers = provideMockServers();
            setServers(mockedServers);            
        }
        fetchServers();
    }, [])
    console.log(checkedServers)
    return (
        <React.Fragment>
            <Search list={servers} />
            <div className='servers'>
                {servers.slice(0, pageLimit*page)
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
    )
    
}
// Servers.PropTypes = {
//     server: PropTypes.array
// };

export default Servers;

const Search = props => {
    const [inputValue, setInputValue] = useState('');

    // useEffect(() => {
    //     const updateSearch = () => {
    //         setInputValue(inputValue);
    // }
    // console.log(inputValue)
    // updateSearch();
    // }, '')

    const { list } = props;
    const searchingList = list.filter(item => item.name.indexOf(inputValue) !== -1).slice(0,10)
    return (
        <div>
            <input className='search-bar' type='text' placeholder='Type to find server' onChange={e => setInputValue(e.target.value)} />
            <ul className='search-ul'>
                {inputValue !== '' && searchingList.map(item => 
                    <li className='search-li' key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}