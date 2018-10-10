import React from 'react';
import Search from './Search';
import ModalComponent from './ModalComponent';
import RequestTable  from './RequestTable';

const RequestView = (props) => {
    const { requestRowClass, textMarginClass,
        textInfoClass, role, style,
        showModal, closeModal, exitModal,
        handleInput, createRequest, 
        errorText, UserRequestTableColumns, requests } = props
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
                />
                : ''}
            <RequestTable
            UserRequestTableColumns={UserRequestTableColumns}
            requests={requests}
            />
            <ModalComponent
                style={style}
                closeModal={closeModal}
                exitModal={exitModal}
                handleInput={handleInput}
                createRequest={createRequest}
                errorText={errorText}
            />
        </div>
    );
}
export default RequestView;