"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const About = () => {

    const router = useRouter();

    return (
        <div style={{
            textAlign: "center",
            margin: "1.2rem 0"
        }}>
            <h1>
                About Page
            </h1>

            <button
                style={{
                    padding: "1rem",
                    background: "blue",
                    color: "white",
                    margin: "1rem",
                    cursor: "pointer"
                }}
                onClick={() => router.push('/')}
            >
                Back To Home Page
            </button>
        </div>
    )
};

export default About;