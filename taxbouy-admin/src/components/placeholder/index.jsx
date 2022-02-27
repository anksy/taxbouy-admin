import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

export default function Placeholder({ children, isLoading }) {
    return (
        <ReactPlaceholder showLoadingAnimation rows={4} ready={!isLoading}>
            {children}
        </ReactPlaceholder>
    );
}