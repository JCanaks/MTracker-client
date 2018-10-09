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

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
+ ".eyJlbWFpbCI6ImphY2tpZWdvb2R5QG1haWwuY2"
+ "9tIiwidXNlcklkIjoyMiwidXNlckZ1bGxuYW1lIjoi"
+ "SmFja3kgR29vZHkiLCJkZXBhcnRtZW50IjoiVGVjaG5"
+ "vbG9neSIsImlhdCI6MTUzOTAwMDEzNSwiZXhwIjoxNTM5"
+ "MDEwOTM1fQ.5yKQckWiP857_AP3Ve8EXSxQB0QuLtKfLS3k2jdV0lg";

const signup = () => {};
const handleInput = () => {};
const login =() =>{};
const logout =() =>{};
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
const props = {
    logout: () =>{ return 'logged out'},
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
    loginUserData2
};