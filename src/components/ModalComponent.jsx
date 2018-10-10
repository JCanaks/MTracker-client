import React from 'react';
const ModalComponent = (props) => {
    const { style, closeModal, exitModal, handleInput,
        createRequest, errorText } = props;
        console.log('errorText',errorText);
    return (
        <form onSubmit={createRequest}>
            <div className="request-modal" id="modal" style={style} onClick={exitModal}>
                <div className="modal-content">
                    <span onClick={closeModal} className="close">&times;</span>
                    <h3>Create Request</h3>
                    <hr />
                    <label htmlFor="requestType">Request Type:</label>
                    <select  name="requestType" id="requestType" onChange={handleInput} required>
                        <option value="">Select Request Type</option>
                        <option value="Repair">Repair</option>
                        <option value="Maintenance">Maintenance</option>
                    </select>
                    <label htmlFor="requestLevel">Request Level:</label>
                    <select name="requestLevel" id="requestLevel" onChange={handleInput} required>
                        <option value="">Select Request Level</option>
                        <option value="Critical">Critical</option>
                        <option value="Major">Major</option>
                        <option value="Minor">Minor</option>
                    </select>
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"
                        rows="4" cols="50"
                        placeholder="Type Request Description Here" onChange={handleInput} required>
                        </textarea>
                    <div className="details-info" id="create-info">{errorText}</div>
                    <input type="submit" value="Create" />
                </div>
            </div>
        </form>

    );
}
export default ModalComponent;