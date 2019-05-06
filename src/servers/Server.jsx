import React from 'react';
import PropTypes from 'prop-types';
import './server.css';

const Server = ({ server, checkServer, checked }) => {
    return (
        <div className={`server-container ${checked && 'checked'}`} onClick={() => checkServer()}>
            {server.name}
        </div>
    );
};

Server.propTypes = {
    props: PropTypes.object,
    server: PropTypes.object.isRequired,
    checkServer: PropTypes.func,
    checked: PropTypes.bool
};

export default Server;