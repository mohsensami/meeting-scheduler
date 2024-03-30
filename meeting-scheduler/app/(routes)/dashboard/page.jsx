'use client';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';

const page = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <LogoutLink>logout</LogoutLink>
        </>
    );
};

export default page;
