import React from "react";

function Login() {
    return (

        <div className="container-login my-5">
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                    <h1 className="text">
                        Login to Your Account
                    </h1>

                    <form className=" login-text space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">UserName</label>
                            <input type="text" id="username" placeholder="Enter username" required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" placeholder="Enter your password"  required 
                               lassName="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>

                       {/* <p className="text-red-500 text-sm text-center"></p> */} 

                        <button className=" login-btn " type="submit"> Login </button>
                    </form>

                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <a href="/registration" className="text-blue-500 font-medium hover:underline">
                                User Registration
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;