import React from 'react';
const Filter = (props) => {
    const { handleFilterInput, filter } = props;
    return (
        <div className="request-form-font set-margin">
            <div>
                <div>Filter By:</div>
                <select id="requestType" onChange={handleFilterInput}>
                    <option value="none">Select Request Type</option>
                    <option value="Repair">Repair</option>
                    <option value="Maintenance">Maintenance</option>
                </select>
                <select placeholder="Hello" id="requestLevel" onChange={handleFilterInput}>
                    <option value="none">Select Request Level</option>
                    <option value="Critical">Critical</option>
                    <option value="Minor">Minor</option>
                    <option value="Major">Major</option>
                </select>
                <input type="date" id="requestDate" placeholder="Select date" onChange={handleFilterInput} />
                <input type="text" id="requestId" placeholder="Enter Request ID" onChange={handleFilterInput} />
                <select id="department" onChange={handleFilterInput}>
                    <option value="none">Select Department</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Technology">Technology</option>
                    <option value="Human Resource">Human Resource</option>
                </select>
                <input type="submit" onClick={filter} value="Search" onChange={handleFilterInput} />
            </div>
        </div>);
}

export default Filter;