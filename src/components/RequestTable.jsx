import React from 'react';
import RowComponent from './RowComponent';
const RequestTable = (props) => {
    const { UserRequestTableColumns, requests,
         showDetailsModal, role} = props;
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
                showDetailsModal={showDetailsModal}
                role={role}
                />
            </table>
        </div>);
}

export default RequestTable;