import React from 'react';
const RowComponent = (props) => {
    const { requests, showDetailsModal } = props;
    return (
        <tbody>
            {
                requests ? requests.map((request, index) => (
                    <tr key={index}>
                        <td>{request.requestType}</td>
                        <td>{request.description}</td>
                        <td className="column-display">{request.department}</td>
                        <td className="column-display">{request.requestLevel}</td>
                        <td className="column-display">{request.requestDate.substring(0, 10)}</td>
                        <td className="column-display">{request.requestStatus}</td>
                        <td><button onClick={showDetailsModal} value={request.requestId}>View Details</button></td>
                    </tr>
                )) : <div>You have no Requests</div>}
        </tbody>

    );
}
export default RowComponent;
