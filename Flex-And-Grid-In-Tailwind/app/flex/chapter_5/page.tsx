import { FC } from 'react';

const page: FC = () => {
    return (
        <div>
            <div className="wrap flex justify-center flex-col-reverse">
                <a href="#" className="link login-link">Login</a>
                <a href="#" className="link signup-link">Create account</a>
            </div>

            <div className="card flex flex-col justify-between items-start">
                <img src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg" alt=""/>
                    <p>
                        I just finished my trial period and was so amazed with the support and good results that I purchased the Pro version for my business.
                    </p>
                    <span>John Doe</span>
            </div>
        </div>
    )
};

export default page;