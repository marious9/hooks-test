import React, { useState, useFetch } from 'react';
import { generateMockServers } from '../mock-data/generate-files';
import VirtualizedItems from './VirtualizedItems';
import Search from '../utils/search/Search';

function Items() {
    const rowLimit = 5;    
    const [items, setItems] = useState(generateMockServers());
    
    // const pageLimit = 300;
    // const [page, setPage] = useState(1);
    // const [loadingServers, setLoadingServers] = useState(false);

    // const mockedServersPage = () => {
    //     const groupedServers = items.filter(server => server.id < page*pageLimit && server.id > (page - 1)*pageLimit);
    //     const lastItem = groupedServers.slice(-1).pop();
    //     const hasNextPage = lastItem && (lastItem.id < items.length);

    //     const virtualizedModel = {
    //         hasNextPage: hasNextPage,
    //         isNextPageLoading: loadingServers,
    //         list:  groupedServers
    //     };
    //     return virtualizedModel;
    // };

    const groupedItems = () => {
        let groupedModel = [];
        for(let i = 0; i < Math.ceil(items.length/rowLimit); i++) {
            const row = items.filter(item => item.id <= (i + 1)*rowLimit && item.id > i*rowLimit);
            groupedModel = [...groupedModel, [...row]];
        }
        return groupedModel;
    };

    return (
        <div>
            <VirtualizedItems
                list={groupedItems()}
            />
            <Search list={items} />
        </div>
    );
}

export default Items;
