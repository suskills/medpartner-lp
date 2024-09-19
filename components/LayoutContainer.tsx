// components/LayoutContainer.js
import React from 'react';

const LayoutContainer = ({ children }) => {
  return (
    <div className="container mx-auto px-4 pl-12">
      {children}
    </div>
  );
};

export default LayoutContainer;
