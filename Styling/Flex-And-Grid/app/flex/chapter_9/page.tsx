import React, { FC } from 'react';

const page: FC = () => {

    const container = `max-w-none w-80 bg-white my-20 mx-auto p-4 rounded-lg`;

    const count = `py-px px-2 bg-blue-50 text-blue-800 text-lg rounded`;

    return (
        <div>
            <div className={`${container} flex items-center`}>
                <i className="fa fa-bell mr-2"></i>
                <span className="text-lg">Notifications</span>
                <span className={`${count} ml-auto`}>2</span>
            </div>
        </div>
    )
}

export default page;