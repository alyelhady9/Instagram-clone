

// "use client"
// import { useState } from 'react';
// import Image from 'next/image';
// import { FaFacebookSquare } from "react-icons/fa";
// import logo from '../../../public/Instagram_logo.svg.png';
// import { FaX } from 'react-icons/fa6';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleAuthModal } from '../features/AuthModalSlice';
// import { login } from '../features/AuthSlice';
// function Authmodal() {
//     const [hasAccount, setHasAccount] = useState(true);
//     const toggleHasAccount = () => setHasAccount(!hasAccount);
   
//     const authModal = useSelector((state) => state.authModal.isOpen);
//     const dispatch = useDispatch();
    

//     const handleToggleModal = (e) => {
//         // Stop event propagation to prevent it from bubbling up to the backdrop
//         // This is useful for clicks that should only affect the button itself.
//         e.stopPropagation();
//         dispatch(toggleAuthModal());
//     }



//     const [user , setUser] = useState ("")


//     const handleLogin = () => { 
//         e.preventDefault()
//         dispatch(login(user.user))

//         handleToggleModal()
//         setUser("")
//     }

//     return (
//         <>
//             {authModal && (
//                 <div onClick={handleToggleModal} className='fixed inset-0 z-30 bg-black/70 flex items-center justify-center'>
                    
//                     {/* Close button that is part of the modal backdrop */}
//                     <button
//                         onClick={handleToggleModal}
//                         className='fixed top-4 right-4 z-40 cursor-pointer text-white p-2 rounded-full hover:bg-gray-700 transition-colors'
//                         aria-label="Close"
//                     >
//                         <FaX size={20} />
//                     </button>

//                     {/* Main Modal Content */}
//                     <div onClick={(e) => e.stopPropagation()} className='flex flex-col items-center p-8 bg-white border border-gray-300 rounded-sm shadow-md max-w-sm w-full'>
//                         {/* Instagram Logo */}
//                         <div className="mb-4">
//                             <Image
//                                 src={logo}
//                                 alt="Instagram"
//                                 width={175}
//                                 height={51}
//                                 priority={true}
//                             />
//                         </div>

//                         {/* Sign up message */}
//                         <p className='text-center text-gray-500 font-semibold mb-4 leading-5'>
//                             Sign up to see photos and videos from your friends.
//                         </p>

//                         {/* Facebook Button */}
//                         <button className='flex items-center justify-center w-full bg-blue-500 text-white rounded-md py-1.5 px-4 mb-4 font-semibold hover:bg-blue-600 transition-colors'>
//                             <FaFacebookSquare className="mr-2" size={20} />
//                             <span>Log in with Facebook</span>
//                         </button>

//                         {/* OR Separator */}
//                         <div className='flex items-center w-full mb-4'>
//                             <div className='flex-grow border-t border-gray-300'></div>
//                             <span className='px-4 text-gray-500 font-semibold text-sm'>OR</span>
//                             <div className='flex-grow border-t border-gray-300'></div>
//                         </div>

//                         {/* Form Inputs */}
//                         <form className='w-full'>
//                             {!hasAccount && (
//                                 <>
//                                     <input
//                                         type="text"
//                                         placeholder="Mobile Number or Email"
//                                         className='w-full px-2 py-2 mb-2 text-sm border border-gray-300 rounded-sm bg-gray-50 placeholder-gray-400 focus:ring-0 focus:border-gray-400'
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="Full Name"
//                                         className='w-full px-2 py-2 mb-2 text-sm border border-gray-300 rounded-sm bg-gray-50 placeholder-gray-400 focus:ring-0 focus:border-gray-400'
//                                     />
//                                 </>
//                             )}
//                             <input
//                                 value={user}
//                                 onChange={(e) => setUser(e.target.value)}
//                                 type="text"
//                                 placeholder="Username"
//                                 className='w-full px-2 py-2 mb-2 text-sm border border-gray-300 rounded-sm bg-gray-50 placeholder-gray-400 focus:ring-0 focus:border-gray-400'
//                             />
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 className='w-full px-2 py-2 mb-2 text-sm border border-gray-300 rounded-sm bg-gray-50 placeholder-gray-400 focus:ring-0 focus:border-gray-400'
//                             />

//                             {/* Sign up button */}
//                             <button
//                                 type="submit"
//                                 onSubmit={handleLogin}
//                                 className='w-full bg-blue-500 text-white rounded-md py-1.5 font-semibold text-sm hover:bg-blue-600 transition-colors'
//                             >
//                                 Sign up
//                             </button>
//                         </form>

//                         {/* Terms and Policy Text */}
//                         <p className='text-center text-xs text-gray-400 my-4 px-4'>
//                             By signing up, you agree to our <a href="#" className='font-semibold text-blue-800'>Terms</a>, <a href="#" className='font-semibold text-blue-800'>Data Policy</a> and <a href="#" className='font-semibold text-blue-800'>Cookies Policy</a>.
//                         </p>

//                         {/* "Have an account?" section */}
//                         <div className='w-full border-t border-gray-300 mt-4 pt-4 text-center'>
//                             {!hasAccount ? (
//                                 <p className='text-sm'>
//                                     Have an account? <span onClick={toggleHasAccount} className='text-blue-500 font-semibold cursor-pointer'>Log in</span>
//                                 </p>
//                             ) : (
//                                 <p className='text-sm'>
//                                     Don't have an account? <span onClick={toggleHasAccount} className='text-blue-500 font-semibold cursor-pointer'>Sign up</span>
//                                 </p>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default Authmodal;


"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import logo from '../../../public/Instagram_logo.svg.png';
import { FaX } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAuthModal } from '../features/AuthModalSlice';
import { login } from '../features/AuthSlice';

function Authmodal() {
    const [hasAccount, setHasAccount] = useState(true);
    const toggleHasAccount = () => setHasAccount(!hasAccount);
    
    // Corrected state for inputs. Renamed `user` to `username` to avoid confusion.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const authModal = useSelector((state) => state.authModal.isOpen);
    const dispatch = useDispatch();
    const userFromStore = useSelector((state) => state.auth.user); // Added a new name to avoid conflict with local state

    const handleToggleModal = (e) => {
        e.stopPropagation();
        dispatch(toggleAuthModal());
    }

    const handleLogin = (e) => {
        e.preventDefault(); // This is crucial to prevent the page from refreshing on form submit
        
        // --- CORRECTED: Create an object with the data from your local state
        // This is the payload your Redux reducer expects
        const userData = { username: username, password: password };
        
        // Dispatch the login action with the userData object
        dispatch(login(userData));
        
        // Close the modal
        handleToggleModal(e); // Pass the event object here
        
        // Clear the local state inputs
        setUsername("");
        setPassword("");
    }

    // A console log to check the state from the store
    console.log("User from Redux store:", userFromStore);

    return (
        <>
            {authModal && (
                <div onClick={handleToggleModal} className='fixed inset-0 z-30 bg-black/70 flex items-center justify-center'>
                    <button
                        onClick={handleToggleModal}
                        className='fixed top-4 right-4 z-40 cursor-pointer text-white p-2 rounded-full hover:bg-gray-700 transition-colors'
                        aria-label="Close"
                    >
                        <FaX size={20} />
                    </button>

                    <div onClick={(e) => e.stopPropagation()} className='flex flex-col items-center p-8 bg-white border border-gray-300 rounded-sm shadow-md max-w-sm w-full'>
                        {/* Instagram Logo */}
                        <div className="mb-4">
                            <Image
                                src={logo}
                                alt="Instagram"
                                width={175}
                                height={51}
                                priority={true}
                            />
                        </div>

                        {/* Sign up message */}
                        <p className='text-center text-gray-500 font-semibold mb-4 leading-5'>
                            Sign up to see photos and videos from your friends.
                        </p>

                        {/* Facebook Button */}
                        <button className='flex items-center justify-center w-full bg-blue-500 text-white rounded-md py-1.5 px-4 mb-4 font-semibold hover:bg-blue-600 transition-colors'>
                            <FaFacebookSquare className="mr-2" size={20} />
                            <span>Log in with Facebook</span>
                        </button>

                        {/* OR Separator */}
                        <div className='flex items-center w-full mb-4'>
                            <div className='flex-grow border-t border-gray-300'></div>
                            <span className='px-4 text-gray-500 font-semibold text-sm'>OR</span>
                            <div className='flex-grow border-t border-gray-300'></div>
                        </div>

                        {/* Form Inputs */}
                        {/* --- CORRECTED: onSubmit handler is now on the form tag --- */}
                        <form className='w-full' onSubmit={handleLogin}>
                            {!hasAccount && (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Mobile Number or Email"
                                        className='w-full px-2 py-2 mb-2 text-sm border border-gray-300 rounded-sm bg-gray-50 placeholder-gray-400 focus:ring-0 focus:border-gray-400'
                                    />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className='w-full px-2 py-2 mb-2 text-sm border border-gray-300 rounded-sm bg-gray-50 placeholder-gray-400 focus:ring-0 focus:border-gray-400'
                                    />
                                </>
                            )}
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="Username"
                                className='w-full px-2 py-2 mb-2 text-sm border border-gray-300 rounded-sm bg-gray-50 placeholder-gray-400 focus:ring-0 focus:border-gray-400'
                            />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                className='w-full px-2 py-2 mb-2 text-sm border border-gray-300 rounded-sm bg-gray-50 placeholder-gray-400 focus:ring-0 focus:border-gray-400'
                            />

                            {/* Sign up button */}
                            {/* --- CORRECTED: Removed the onSubmit handler from the button --- */}
                            <button
                                type="submit"
                                className='w-full bg-blue-500 text-white rounded-md py-1.5 font-semibold text-sm hover:bg-blue-600 transition-colors'
                            >
                                Sign up
                            </button>
                        </form>

                        {/* Terms and Policy Text */}
                        <p className='text-center text-xs text-gray-400 my-4 px-4'>
                            By signing up, you agree to our <a href="#" className='font-semibold text-blue-800'>Terms</a>, <a href="#" className='font-semibold text-blue-800'>Data Policy</a> and <a href="#" className='font-semibold text-blue-800'>Cookies Policy</a>.
                        </p>

                        {/* "Have an account?" section */}
                        <div className='w-full border-t border-gray-300 mt-4 pt-4 text-center'>
                            {!hasAccount ? (
                                <p className='text-sm'>
                                    Have an account? <span onClick={toggleHasAccount} className='text-blue-500 font-semibold cursor-pointer'>Log in</span>
                                </p>
                            ) : (
                                <p className='text-sm'>
                                    Don't have an account? <span onClick={toggleHasAccount} className='text-blue-500 font-semibold cursor-pointer'>Sign up</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Authmodal;