import React from "react";

export function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center ${className}`}>
            <img src='/OneEighty_Logo.svg' alt='OneEighty' className='h-8' />
        </div>
    );
}
