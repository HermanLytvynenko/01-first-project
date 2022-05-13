import React from "react";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i.imgur.com/tqBPqsR.png',
                isFollowed: true,
                fullName: 'Dmitry',
                status: "I'm a Boss",
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://i.imgur.com/tqBPqsR.png',
                isFollowed: false,
                fullName: 'Herman',
                status: "Learn REACT now =)",
                location: {city: 'Rivne', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://i.imgur.com/tqBPqsR.png',
                isFollowed: false,
                fullName: 'Denis',
                status: "Crypto lover <3",
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://i.imgur.com/tqBPqsR.png',
                isFollowed: true,
                fullName: 'Alex',
                status: "Hi!!! Guys!",
                location: {city: 'Poznan', country: 'Poland'}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="User`s photo!"/>
                        </div>
                        <div>
                            { u.isFollowed
                                ?  <button onClick={ () => { props.unfollow(u.id) } }>UnFollow</button>
                                :  <button onClick={ () => { props.follow(u.id) } }>Follow</button> }
                         </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                    </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;