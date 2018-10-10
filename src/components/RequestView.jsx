import React from 'react';
import Search from './Search';
import ModalComponent from './ModalComponent';
import RequestDetailsModal from './RequestDetailsModal';
import RequestTable from './RequestTable';

const RequestView = (props) => {
    const { requestRowClass, textMarginClass,
        textInfoClass, role, style,
        showModal, closeModal, exitModal,
        handleInput, createRequest,
        errorText, UserRequestTableColumns, requests,
        showDetailsModal, displayStyle, closeDetailsModal, request, search } = props
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
                : ''}
            <RequestTable
                UserRequestTableColumns={UserRequestTableColumns}
                requests={requests}
                showDetailsModal={showDetailsModal}
                displayStyle={displayStyle}
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
                request={request}
            />
        </div>
    );
}
export default RequestView;