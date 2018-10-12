import React from 'react';
const RequestDetailsModal = (props) => {
    const { displayStyle, exitModal, closeDetailsModal,
        updateRequest, handleUpdateInput, request,
        updateData, errorText, role, approveRequest,
        disapproveRequest,resolveRequest, } = props;
    return (
        <form>
            <div className="request-modal " id="detailsModal" style={displayStyle} onClick={exitModal}>
                <div className="modal-content">
                    <span onClick={closeDetailsModal} className="close">&times;</span>
                    <h3>Request Details</h3>
                    <hr />
                    <div className="details-div">
                        <div className="details-column1">Req. ID:</div>
                        <div id="requestId" className="details-column2">{request.requestId}</div>
                    </div>
                    <div className="details-div">
                        <div className="details-column1">Req. Type:</div>
                        {
                            role == 'User' ?
                                <div className="details-column2">
                                    <input id="requestTypeDetails" type="text" value={updateData.requestTypeDetails} onChange={handleUpdateInput} />
                                </div>
                                : <div className="details-column2" id="requestTypeDetails">{request.requestType}</div>
                        }
                    </div>
                    <div className="details-div">
                        <div className="details-column1">Req. Level:</div>
                        {
                            role == 'User' ?
                                <div className="details-column2">
                                    <input id="requestLevelDetails" type="text" value={updateData.requestLevelDetails} onChange={handleUpdateInput} />
                                </div>
                                : <div className="details-column2" id="requestedByDetails">{request.requestLevel}</div>
                        }
                    </div>

                    <div className="details-div">
                        <div className="details-column1">Req. By:</div>
                        <div className="details-column2" id="requestedBy">{request.requestedBy}</div>
                    </div>
                    <div className="details-div">
                        <div className="details-column1">Dept.:</div>
                        <div className="details-column2" id="department">{request.department}</div>
                    </div>
                    <div className="details-div">
                        <div className="details-column1">Date:</div>
                        <div className="details-column2" id="requestDate">{request.requestDate ? request.requestDate.substring(0, 10) : ''}</div>
                    </div>
                    <div className="details-div">
                        <div className="details-column1">Status:</div>
                        <div className="details-column2" id="requestStatus">{request.requestStatus}</div>
                    </div>
                    {
                        role == 'User' ?
                            < textarea
                                className="description-style"
                                name="description"
                                id="descriptionDetails"
                                rows="4"
                                cols="50"
                                value={updateData.descriptionDetails}
                                onChange={handleUpdateInput}
                                placeholder="Type Request Description Here">
                            </textarea>
                            : <div className="details-div">
                                <div className="details-column1">Description:</div>
                                <div className="details-column2" id="descriptionDetails">{request.description}</div>
                            </div>
                    }
                    <div className="details-info" id="details-info">{errorText}</div>
                    {
                        role =='Admin'?
                        <div className="details-div">
                            <button onClick={approveRequest} className="details-btn approve">Approve</button>
                            <button onClick={disapproveRequest} className="details-btn reject">Disapprove</button>
                            <button onClick={resolveRequest} className="details-btn resolve">Resolve</button>
                        </div>
                        :<input type="submit" onClick={updateRequest} value="Update" />
                    }
                    
                </div>
            </div>
        </form >

    );
}

export default RequestDetailsModal;