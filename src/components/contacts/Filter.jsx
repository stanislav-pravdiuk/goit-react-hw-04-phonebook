import React from "react";
import css from './filter.module.css'
import PropTypes from 'prop-types';

function Filter({ filter, onChange }) {
    
    return (
        <label className={css.filter}>Find contacts by name
            <input
                type="text"
                value={filter}
                onChange={onChange}
            >
            </input>
        </label>
    );
};

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default Filter;