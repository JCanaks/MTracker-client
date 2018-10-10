import React from 'react';
const RequestDetailsModal = (props) => {
    const { displayStyle, exitModal, closeDetailsModal,
        request } = props;
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
                        <div className="details-column2">
                            <input id="requestTypeDetails" type="text" value={request.requestType} />
                        </div>
                    </div>
                    <div className="details-div">
                        <div className="details-column1">Req. Level:</div>
                        <div className="details-column2">
                            <input id="requestLevelDetails" type="text" value={request.requestLevel} />
                        </div>
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
                        <div className="details-column2" id="requestDate">{request.requestDate}</div>
                    </div>
                    <div className="details-div">
                        <div className="details-column1">Status:</div>
                        <div className="details-column2" id="requestStatus">{request.requestStatus}</div>
                    </div>
                    <textarea
                        className="description-style"
                        name="description"
                        id="descriptionDetails"
                        rows="4"
                        cols="50"
                        value={request.description}
                        placeholder="Type Request Description Here">
                    </textarea>
                    <div className="details-info" id="details-info"></div>
                    <input type="submit" onclick="updateRequest()" value="Update" />
                </div>
            </div>
        </form>

    );
}

export default RequestDetailsModal;