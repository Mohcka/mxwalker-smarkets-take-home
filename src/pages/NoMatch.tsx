import React from 'react';
import { RouteProps } from 'react-router-dom';

const NoMatch: React.FC<RouteProps> = () => (
    <div>
        <h2>404 - Page not found</h2>
    </div>
);

export default NoMatch;