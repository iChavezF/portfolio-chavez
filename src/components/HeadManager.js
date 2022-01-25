import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";

export const HeadManager = (prop) => {
    const helmetContext = {};

    return (
        <HelmetProvider context={helmetContext}>
            <>
                <Helmet>
                    <title>jeckefe | {prop.title}</title>
                </Helmet>
            </>
        </HelmetProvider>
    )
};
