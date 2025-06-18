import React from 'react';

const Alert = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-4 border rounded-lg ${className}`} role="alert">
    {children}
  </div>
);

const AlertDescription = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`text-sm ${className}`}>{children}</div>
);

export { Alert, AlertDescription };
