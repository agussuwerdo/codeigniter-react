// src/components/Body.tsx
import React from 'react';
import Loader from '../common/Loader';

interface BodyProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ isLoading, children }) => {
  return (
    <div className="relative">
      {isLoading && <Loader />} {/* Conditionally show loader if loading */}
      <div className={`${isLoading ? 'opacity-50' : ''}`}>
        {children} {/* Render the content */}
      </div>
    </div>
  );
};

export default Body;
