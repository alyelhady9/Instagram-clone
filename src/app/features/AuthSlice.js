// import { createSlice } from "@reduxjs/toolkit";


// const AuthSlice = createSlice({
//     name: "auth",
//     initialState: {
//         isAuthenticated: false,
//         user: null,
//     },
//     reducers: {
//         login: (state, action) => {
//             state.isAuthenticated = true;
//             state.user = action.payload;
//         },
//         logout: (state) => {
//             state.isAuthenticated = false;
//             state.user = null;
//         },
//     },  
//  })

//  export const { login, logout } = AuthSlice.actions;
//  export default AuthSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

// A helper function to safely get data from localStorage
const getInitialState = () => {
    // Check if we are in the browser
    if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            return {
                isAuthenticated: true,
                user: JSON.parse(storedUser),
            };
        }
    }
    // Return the default initial state if no user is in localStorage or we are on the server
    return {
        isAuthenticated: false,
        user: null,
    };
};

const AuthSlice = createSlice({
    name: "auth",
    initialState: getInitialState(),
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            
            // Save the user data to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(action.payload));
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            
            // Clear the user data from localStorage
            if (typeof window !== 'undefined') {
                localStorage.removeItem('user');
            }
        },
        
    },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;