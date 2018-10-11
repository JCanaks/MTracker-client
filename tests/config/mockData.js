const signupInfo = {
    data: {
        message: "Sucessfull Signup You can now make requests",
        userFullname: "Jacky Goody",
        userEmail: "jackiegoody@mail.com",
        department: "Technology",
        role: "User",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
            + ".eyJlbWFpbCI6ImphY2tpZWdvb2R5QG1haWwuY2"
            + "9tIiwidXNlcklkIjoyMiwidXNlckZ1bGxuYW1lIjoi"
            + "SmFja3kgR29vZHkiLCJkZXBhcnRtZW50IjoiVGVjaG5"
            + "vbG9neSIsImlhdCI6MTUzOTAwMDEzNSwiZXhwIjoxNTM5"
            + "MDEwOTM1fQ.5yKQckWiP857_AP3Ve8EXSxQB0QuLtKfLS3k2jdV0lg"
    }
}
const loginInfo = {
    data: {
        message: "Authentication Sucessful, You are now Logged in",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6I"
            + "kpXVCJ9.eyJlbWFpbCI6Implbm55Zmxvd2Vy"
            + "c0BtYWlsLmNvbSIsInVzZXJJZCI6MSwidXNlc"
            + "kZ1bGxuYW1lIjoiSmVubnkgRmxvd2VycyIsImRl"
            + "cGFydG1lbnQiOiJUZWNobm9sb2d5IiwiaWF0IjoxNT"
            + "M5MTk3OTY0LCJleHAiOjE1MzkyMDg3NjR9.au8FJK1i"
            + "-rzucHOp3Zk9zMy9dzcIe2UkRrOboyRok8Y",
        role: "User"
    }
}
const createInfo = {
    data: {
        message: "Request Created",
        request: {
            userId: 1,
            description: "Fan Repair",
            department: "Technology",
            requestType: "Repair",
            requestedBy: "Jenny Flowers",
            requestLevel: "Critical",
            requestStatus: "Pending",
            requestDate: "2018-10-09T17:08:47.394Z"
        }
    }
}
const updateInfo = {
    message: "Request Updated",
    description: "update description",
    requestType: "update.requestType",
    requestLevel: "update.requestLevel",
}
const getRequestsInfo = [
    {
        requestId: 11,
        userId: 1,
        description: "I need help with my faulty Airconditioner",
        department: "Technology",
        requestType: "Repair",
        requestedBy: "Jenny Flowers",
        requestLevel: "Critical",
        requestStatus: "Pending",
        requestDate: "2018-10-10T08:24:11.011+01:00"
    },
    {
        requestId: 10,
        userId: 1,
        description: "My Generator needs minor repairs",
        department: "Technology",
        requestType: "Repair",
        requestedBy: "Jenny Flowers",
        requestLevel: "Minor",
        requestStatus: "Pending",
        requestDate: "2018-10-10T08:22:36.812+01:00"
    },
]

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    + ".eyJlbWFpbCI6ImphY2tpZWdvb2R5QG1haWwuY2"
    + "9tIiwidXNlcklkIjoyMiwidXNlckZ1bGxuYW1lIjoi"
    + "SmFja3kgR29vZHkiLCJkZXBhcnRtZW50IjoiVGVjaG5"
    + "vbG9neSIsImlhdCI6MTUzOTAwMDEzNSwiZXhwIjoxNTM5"
    + "MDEwOTM1fQ.5yKQckWiP857_AP3Ve8EXSxQB0QuLtKfLS3k2jdV0lg";

const signup = () => { };
const closeModal = () => { };
const exitModal = () => { };
const createRequest = () => { };
const handleInput = () => { };
const login = () => { };
const logout = () => { };
const event = {
    preventDefault: () => 'event',
    target: {}
}
const userData = {
    userFullname: '',
    userPassword: '',
    department: '',
    userEmail: '',
    userPhonenumber: '',
}
const style = {
    display: 'none',
}
const loginUserData = {
    userPassword: '',
    userEmail: '',
}
const loginUserData2 = {
    userPassword: 'Jenny Flowers',
    userEmail: '1234556@3',
}
const userData2 = {
    userFullname: 'Jenny Flowers',
    userPassword: '1234556@3',
    department: 'Sales',
    userEmail: 'jenny@mail.com',
    userPhonenumber: '+2347681223987',
}
const buttonAttributes = {
    type: 'submit',
    value: 'Sign up',
    btnClass: 'auth-submit-btn'
}
const userProps = {
    success: true,
    updated: true,
    getRequests: () => { 
        return 'requests'
     },
    closeModal: () => { },
    newRequest: () => {},
    exitModal: () => { },
    createRequest: () => { },
    handleInput: () => { },
    showDetailsModal: () => { },
    request: {
        requestId: 0,
        requestedBy: 'Jenny',
        requestLevel: 'Critical',
        description: 'descritpion',
        department: 'department',
        requestStatus: 'Pending',
        requestDate: '2018-03-18'
    },
    requests: [
        {
            requestId: 0,
            requestedBy: 'Jenny',
            requestLevel: 'Critical',
            description: 'descritpion',
            department: 'department',
            requestStatus: 'Pending',
            requestDate: '2018-03-18'
        },
        {
            requestId: 0,
            requestedBy: 'Jenny',
            requestLevel: 'Critical',
            description: 'descritpion',
            department: 'department',
            requestStatus: 'Pending',
            requestDate: '2018-03-18'
        },
        {
            requestId: 0,
            requestedBy: 'Jenny',
            requestLevel: 'Critical',
            description: 'descritpion',
            department: 'department',
            requestStatus: 'Pending',
            requestDate: '2018-03-18'
        },
    ],
    errorText: '',
    requestRowClass: 'request-top-row',
    textMarginClass: 'text-margin1',
    textInfoClass: 'text-info',
    headerClass: 'header',
    hideModal: true,
    UserRequestTableColumns: [
        {
            columnType: 'Request Type',
            columnClass: ''
        },
        {
            columnType: 'Description',
            columnClass: ''
        },
        {
            columnType: 'Department',
            columnClass: 'column-display'
        },
        {
            columnType: 'Request Level',
            columnClass: 'column-display'
        },
        {
            columnType: 'Request Date',
            columnClass: 'column-display'
        },
        {
            columnType: 'Status',
            columnClass: 'column-display'
        },
        {
            columnType: 'Details',
            columnClass: ''
        },
    ],
    style: {
        display: 'none'
    },
    displayStyle: {
        display: 'none'
    },
    requestData: {
        requestType: '',
        requestLevel: '',
        description: ''
    },
    updateData: {
        requestId: 0,
        requestTypeDetails: '',
        requestLevelDetails: '',
        descriptionDetails: ''
    },
}
const props = {
    logout: () => { return 'logged out' },
    errorText: '',
    headerText: 'Sign up',
    inputClass: 'auth-input-class',
    formType: 'Sign up',
    departments: [
        'Marketing', 'Sales',
        'Technology', 'Human Resource',
    ],
    userData: {
        userFullname: '',
        userPassword: '',
        department: '',
        userEmail: '',
        userPhonenumber: '',
    },
    inputTypes: [
        {
            type: 'text',
            id: 'userFullname',
            name: 'userFullname',
            placeholder: 'Full Name*',
            pattern: '^[A-Za-z\\s]{3,40}$',
            title: 'Full Name must be alphabets only with min of 3 characters'

        },
        {
            type: 'email',
            id: 'userEmail',
            name: 'email',
            placeholder: 'Email*',
        },
        {
            type: 'text',
            id: 'userPhonenumber',
            name: 'phonenumber',
            placeholder: '+2348146614527*',
            pattern: '\\+234+[0-9]{10,10}$',
            title: 'Phone Number Entered is not valid'
        },
        {
            type: 'password',
            id: 'userPassword',
            name: 'password',
            placeholder: 'Password*',
            pattern: '^[a-zA-Z0-9#*/_@]{8,12}$',
            title: 'Password Entered does not match specified pattern'
        }
    ],
    buttonAttributes: {
        type: 'submit',
        value: 'Sign up',
        btnClass: 'auth-submit-btn'
    }

}
const userRole = 'User'
export default {
    signupInfo,
    userData,
    userData2,
    signup,
    event,
    buttonAttributes,
    handleInput,
    props,
    token,
    logout,
    userRole,
    loginUserData,
    login,
    loginUserData2,
    style,
    userProps,
    loginInfo,
    createInfo,
    getRequestsInfo,
    updateInfo
};