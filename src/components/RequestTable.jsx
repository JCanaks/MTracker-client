import React from 'react';
import RowComponent from './RowComponent';
const RequestTable = (props) => {
    const { UserRequestTableColumns, requests } = props;
    return (
        <div className="view-div">
            <table id="requestTable">
                <thead>
                    <tr>
                        {
                            UserRequestTableColumns.map((column, index) => (
                                <th key={index} className={column.columnClass}>
                                    {column.columnType}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <RowComponent 
                requests={requests}
                />
            </table>
        </div>);
}

export default RequestTable;