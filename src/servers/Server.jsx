import React from 'react';
import PropTypes from 'prop-types';
import './server.css';

const Server = (props) => {
    const { server, checkServer, checked } = props;

    return (
        <div className={`server-container ${checked && 'checked'}`} onClick={() => checkServer()}>
            {server.name}
        </div>
    )
}

// Server.PropTypes = {
//     props.\\server: PropTypes.object
// };

export default Server;