import React from 'react';
const RowComponent = (props) => {
    const { requests, showDetailsModal, role } = props;
    return (
        <tbody>
            {  role == 'User'?(
                requests.length? requests.map((request, index) => (
                    <tr key={index}>
                        <td>{request.requestType}</td>
                        <td>{request.description}</td>
                        <td className="column-display">{request.department}</td>
                        <td className="column-display">{request.requestLevel}</td>
                        <td className="column-display">{request.requestDate.substring(0, 10)}</td>
                        <td className="column-display">{request.requestStatus}</td>
                        <td><button onClick={showDetailsModal} value={request.requestId}>View Details</button></td>
                    </tr>
                )) : <div className="no-request"><h1 >No Requests Available</h1></div>
                )
                :
                (requests.length ? requests.map((request, index) => (
                    <tr key={index}>
                        <td>{request.requestType}</td>
                        <td>{request.description}</td>
                        <td>{request.requestedBy}</td>
                        <td className="column-display">{request.department}</td>
                        <td className="column-display">{request.requestLevel}</td>
                        <td className="column-display">{request.requestDate.substring(0, 10)}</td>
                        <td className="column-display">{request.requestStatus}</td>
                        <td><button onClick={showDetailsModal} value={request.requestId}>View Details</button></td>
                    </tr>
                )) : <div className="no-request"><h1 >No Requests Available</h1></div>
                )
            }
        </tbody>

    );
}
export default RowComponent;
