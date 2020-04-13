import React, { useState } from 'react';
import UserDetail from './UserDetail';
import FlagCard from './FlagCard';

const Searchbar = (users) => {
    //Handle search
    const [email, setEmail] = useState("");
    const [hasResult, setHasResult] = useState(false);
    const [user, setUser] = useState(null);
    
    const searchEmail = (event) => {
        console.log('You searched for ' + email);
        event.preventDefault();

        const selectedUser = users.users.filter(user => user.email === email);
 
        if(selectedUser.length){
            setHasResult(true);
            setUser(selectedUser);
        }
    }

    return (
        <>
            <form className="ui form" onSubmit = {searchEmail}>
                <div className="field">
                    <label>User Search</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
            </form>
            {hasResult && (
                <>
                <UserDetail user = {user} />
				<FlagCard user = {user} />
                </>
            )}
            {!hasResult && (
                'No results!'
            )}
        </>
    );
}

export default Searchbar;