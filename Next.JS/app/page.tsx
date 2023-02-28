import React, { FC } from 'react';
import Link from 'next/link';

const Home: FC = () => {
    return (
        <div style={{
            textAlign: "center",
            margin: "1.2rem 0"
        }}>
            <div>
                <h1>
                    Hello World
                </h1>

                <Link
                    style={{ margin: "2rem" }}
                    href='/about'
                >
                    <h4 style={{ color: "blue" }}>Go To About Page</h4>
                </Link>
            </div>
        </div>
    )
};

export default Home;