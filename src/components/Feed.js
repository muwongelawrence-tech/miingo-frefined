import React from 'react';
import Addfriends from './Addfriends';
import InputBox from './InputBox';
import Posts from './Posts';

function Feed() {
    return (

        <div className = "h-screen  pb-56  flex-grow  mt-2 overflow-y-auto scrollbar-hide ">
            <div className = " space-y-7 px-2 ">
                 <InputBox/>
                 <Posts />
                 {/* <Addfriends /> */}
            </div>
        </div>
    );
}

export default Feed;
