import React, { useEffect, useState, } from "react";
import { addUsers, getUsers, } from "../Services/UserService";


function UserRegistration() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(data => {
                setUsers(data);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        addUsers({
            
            userName: e.target.userName.value,
            password: e.target.Password.value,
            role: e.target.Role.value
        })
            .then(data => data)
    }


    //===========================================
    return (
        <div className='container border border-primary border-3 p-3 my-3'>

            <h1 className='bg-primary p-3 text-white text-center'>User Registration</h1>

            <form onSubmit={submitHandler}>
                {/* User Id */}
                <div className="mb-3">
                    <label for="userId" className="form-label">User Id</label>
                    <input type="text" className="form-control" id="userId" name="userId" placeholder="Enter user id" />
                </div>

                {/* User Name */}
                <div className="mb-3">
                    <label for="fullname" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="fullname" name="userName" placeholder="Enter user name" required />
                </div>

                {/*Password*/}
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="Password" placeholder="Create a password" required />
                </div>

                {/*Role */}
                <div className="mb-3">
                    <label for="role" className="form-label">Role</label>
                    <input type="text" className="form-control" id="role" name="Role" required />

                </div>

                {/* Submit Button  */}
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    )
}

export default UserRegistration;