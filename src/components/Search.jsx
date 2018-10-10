import React from 'react';
const Search = (props) => {
    const { showModal } = props;
    return (
        <div className="header">
            <div className="search-div">
                <input className="request-search" type="text" id="searchInput" onKeyUp="search()" placeholder="Search...."
                    title="Type in a description"/>
            </div>
                <div className="request-button-align">
                    <input className="request-button" type="submit" onClick={showModal} value="Create Request"/>
            </div>
                </div>
                );
           }
export default Search;