import { FC } from 'react';

const page: FC = () => {
    return (
        <>
            <div className="container flex justify-around flex-wrap">
                <div className="team-profile">
                    <img src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="team-img" />
                    <h3>Alexa Kardi</h3>
                    <p>Founder and CEO</p>
                </div>
                <div className="team-profile">
                    <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="team-img" />
                    <h3>Tavell Monroe</h3>
                    <p>Web Developer</p>
                </div>
                <div className="team-profile">
                    <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="team-img" />
                    <h3>Adale Smith</h3>
                    <p>Marketing Specialist</p>
                </div>
                <div className="team-profile">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300" className="team-img" />
                    <h3>Thomas Mason</h3>
                    <p>UX Designer</p>
                </div>
            </div>

            <div className="wrapper">
                <h2>Top Clients</h2>
                <div className="logos flex flex-wrap">
                    <img src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_200/v1628614672/logos/safe_x5alme.png" />
                    <img src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_300/v1628614672/logos/circleai_dm9slt.png" />
                    <img src="https://res.cloudinary.com/thirus/image/upload/v1628617465/logos/onpoint_bikaaj.png" />
                    <img src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_180/v1628617514/logos/Thirus_Logo_Tentative_twhvic.png" />
                </div>
            </div>
        </>
    )
};

export default page;