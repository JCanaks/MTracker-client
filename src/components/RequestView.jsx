import React from 'react';
import Search from './Search';
import Filter from './Filter';
import ModalComponent from './ModalComponent';
import RequestDetailsModal from './RequestDetailsModal';
import RequestTable from './RequestTable';

const RequestView = (props) => {
    const { requestRowClass, textMarginClass,
        textInfoClass, role, style,
        showModal, closeModal, exitModal,
        handleInput, createRequest,
        errorText, UserRequestTableColumns, requests,
        showDetailsModal, displayStyle, closeDetailsModal,
        search, updateRequest, handleUpdateInput, request,
        updateData, handleFilterInput, filter,
        approveRequest, disapproveRequest, resolveRequest } = props
    return (
        <div>
            <div className={requestRowClass}>
                <div className={textMarginClass}>
                    <div>Maintenance Tracker Request View</div>
                </div>
                <div className={textInfoClass}>
                    <div id="info"> </div>
                </div>
            </div>
            {role == 'User'
                ? <Search
                    showModal={showModal}
                    search={search}
                />
                : <Filter
                    handleFilterInput={handleFilterInput}
                    filter={filter}
                />}
            <RequestTable
                UserRequestTableColumns={UserRequestTableColumns}
                requests={requests}
                showDetailsModal={showDetailsModal}
                displayStyle={displayStyle}
                role={role}
            />
            <ModalComponent
                style={style}
                closeModal={closeModal}
                exitModal={exitModal}
                handleInput={handleInput}
                createRequest={createRequest}
                errorText={errorText}
            />
            <RequestDetailsModal
                displayStyle={displayStyle}
                exitModal={exitModal}
                closeDetailsModal={closeDetailsModal}
                updateRequest={updateRequest}
                handleUpdateInput={handleUpdateInput}
                request={request}
                updateData={updateData}
                errorText={errorText}
                role={role}
                approveRequest={approveRequest}
                disapproveRequest={disapproveRequest}
                resolveRequest={resolveRequest}
            /> 
        </div>
    );
}
export default RequestView;