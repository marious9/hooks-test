import React from 'react';
// import InfiniteLoader from 'react-virtualized/dist/es/InfiniteLoader';
// import List from 'react-virtualized/dist/es/List';
import {AutoSizer, List} from 'react-virtualized';
import PropTypes from 'prop-types';
import './server.css';
import '../App.css';
import Server from './Server';

//Obczaic to
//https://github.com/bvaughn/react-virtualized/blob/master/source/Collection/Collection.example.js

function VirtualizedItems ({
    /** Are there more items to load? (This information comes from the most recent API request.) */
    hasNextPage,
    /** Are we currently loading a page of items? (This may be an in-flight flag in your Redux store for example.) */
    isNextPageLoading,
    /** List of items loaded so far */
    list,
    /** Callback function (eg. Redux action-creator) responsible for loading the next page of items */
    loadNextPaged,
  }) {
    const rowRenderer = ({ index, isScrolling, key, style }) => (
        <li key={key} style={style}>
            {list[index].map(server => <Server key={server.id} server={server} />)}
        </li>
      );

      return (
        <AutoSizer>
        {
            ({width, height}) => (
                <List
                    height={400}
                    rowCount={list.length}
                    width={600}
                    rowHeight={50}
                    rowRenderer={rowRenderer}                    
                />
            )
        }
        </AutoSizer>
      );
  };

VirtualizedItems.propTypes = {
    hasNextPage: PropTypes.bool,
    isNextPageLoading: PropTypes.bool,
    list: PropTypes.arrayOf(Object),
    loadNextPage: PropTypes.bool
};

export default VirtualizedItems;