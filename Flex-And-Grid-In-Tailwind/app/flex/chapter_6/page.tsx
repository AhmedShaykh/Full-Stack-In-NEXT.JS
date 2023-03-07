import { FC } from 'react';

const page: FC = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container flex">
                    <input type="email" className="flex-grow" placeholder="Email Address" />
                    <button type="submit" className="button">Subscribe</button>
                </div>
            </div>

            <div className="container min-h-screen flex flex-col">
                <div className="main flex-1">
                    <h1>Main Content</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis repellat, cum ratione fugit dolorum sequi dolores odit commodi cupiditate ab excepturi deserunt laborum saepe, praesentium id deleniti aperiam eaque.
                    </p>
                    <p>
                        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                    </p>
                </div>

                <footer>
                    <h3>Footer</h3>
                </footer>
            </div>

            <div className="flex justify-center py-20 bg-slate-800">
                <ul className="flex">
                    <li className="flex-grow hover:flex-grow-[3]">Description</li>
                    <li className="flex-grow hover:flex-grow-[3]">Care Instructions</li>
                    <li className="flex-grow hover:flex-grow-[3]">Return Policy</li>
                </ul>
            </div>
        </>
    )
};

export default page;