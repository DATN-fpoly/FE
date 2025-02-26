import React, { lazy } from 'react';
import Loader from '~/utils/Loader';

// Client


// Admin


export const Suspense = ({ children }: { children: React.ReactNode }) => {
    return <React.Suspense fallback={<Loader />}>{children}</React.Suspense>;
};
