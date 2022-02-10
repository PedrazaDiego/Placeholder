import React from 'react';

export default function User(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label> First Name</label> <br />

                <input type='text' placeholder={`${props.userState.user.first_name} (required)`} name='first_name' required></input>
                <br />

                <label> Username</label> <br />
                <input type='text' placeholder={`${props.userState.user.username} (required)`} name='username' required></input><br />

                <label>Email</label> <br />
                <input type='email' placeholder={`${props.userState.user.email} (required)`} name='email' required></input><br />

                <label>Password</label>
                <br />
                <input type='password' placeholder='required! ' name='password' required></input> <br />

                <label> About </label>
                <br />

                <textarea type='text' placeholder={`${props.userState.user.about}`} name='about' />
                <div>
                    <input type='submit' className='button'></input> <input type='submit' value='Cancel' onClick={props.handleCancel} className='button'></input>
                </div>

            </form>

            <button className='button' onClick={props.renderDelete}>
                Delete Account
            </button>
        </div>
    )
}