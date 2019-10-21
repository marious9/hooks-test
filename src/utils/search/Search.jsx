import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './search.css';

const Search = ({ list, checkOrUncheckServer }) => {
    const AMOUNT_OF_LI = 10;
    const [inputValue, setInputValue] = useState('');

    const onPaste = value => {
        const valueArray = value.split('/');
        console.log(value, valueArray)
        let resultArr =[]
        console.log(list)
        for(let item of valueArray) {            
            resultArr.concat(list.filter(server => server.name.indexOf(item) !== -1));
        }
        console.log(resultArr)
    }

    useEffect(() => {
        if(inputValue.indexOf('/')) {
            onPaste(inputValue);
        }
    }, [inputValue]);

    const setInputValueWithDelay = targetValue => {
        const DELAY_TIME = 500;
        return setTimeout(() => setInputValue(targetValue), DELAY_TIME);
    };

    const searchingList = list.filter(item => item.name.indexOf(inputValue) !== -1).slice(0, AMOUNT_OF_LI);

    return (
        <div className="search-container">
            <input className='search-bar' type='text' placeholder='Type to find server' onChange={e => setInputValueWithDelay(e.target.value)} />
            <ul className='search-ul'>
                {inputValue !== '' && searchingList.map(item =>
                    <li className='search-li' key={item.id} onClick={() => checkOrUncheckServer(item.id)}>{item.name}</li>)}
            </ul>
        </div>
    );
};

Search.propTypes = {
    list: PropTypes.array.isRequired,
    checkOrUncheckServer: PropTypes.func
};

export default Search;