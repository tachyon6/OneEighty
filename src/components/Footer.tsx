import React from "react";

export default function Footer() {
    return (
        <footer className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center text-gray-500 text-sm space-y-1">
                    <p className="font-semibold">BOLTLAB</p>
                    <p>290-15-02231</p>
                    <p>문의 : <a href="mailto:tachyon@boltlab.co" className="hover:text-gray-700">tachyon@boltlab.co</a></p>
                </div>
            </div>
        </footer>
    );
} 