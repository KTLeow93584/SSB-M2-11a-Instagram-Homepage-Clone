import { createContext, useContext } from 'react';

import { PROFILE_DATA } from '../data.js';

const ProfileContext = createContext(null);
export function GetProfileContext() {
    return useContext(ProfileContext);
}

export function ProfileContextProvider({ children }) {
    return (
        <ProfileContext.Provider value={{ userProfile: PROFILE_DATA, postCategories: Object.keys(PROFILE_DATA.posts) }}>
            {children}
        </ProfileContext.Provider>
    );
}