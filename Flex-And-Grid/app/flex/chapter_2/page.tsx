import { FC } from 'react';

const page: FC = () => {
    return (
        <div className="wrapper">
            <div className="menu flex justify-evenly">
                <a href="#" className="active">Profile</a>
                <a href="#">Notifications</a>
                <a href="#">Payments</a>
                <a href="#">Settings</a>
            </div>
        </div>
    )
};

export default page;