import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

const App = () => {
    //Generate user array
    const createUser = () => {
        return {
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            jobTitle: faker.name.jobTitle(),
            content: faker.random.words(25),
            countryCode: faker.address.countryCode()
        }
    };
    const createUsers = (numUsers = 10) => {
        return new Array(numUsers)
          .fill(undefined)
          .map(createUser);
    };
    let usersArr = createUsers(10);
    console.log(usersArr);

    return (
        <>
            <div className="ui segment">
                <SearchBar users = {usersArr} />
            </div>
        </>
    );
}

export default App;