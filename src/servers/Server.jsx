import React from 'react';
import PropTypes from 'prop-types';
import './server.css';

const Server = ({ server, checkOrUncheckServer, checked }) => {
    return (
        <div className={`server-container ${checked && 'checked'}`}>
            {server.name}
        </div>
    );
};

Server.propTypes = {
    props: PropTypes.object,
    server: PropTypes.object.isRequired,
    // checkOrUncheckServer: PropTypes.func,
    checked: PropTypes.bool
};

export default Server;