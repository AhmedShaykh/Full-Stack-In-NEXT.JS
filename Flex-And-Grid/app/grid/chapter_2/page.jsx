import React from 'react';

const page = () => {
    return (
        <div className="max-w-none w-auto min-h-screen grid grid-rows-[auto,1fr,auto]">
            <header className="p-8 bg-blue-500">
                <h2 className="font-bold text-2xl">Header</h2>
            </header>
            <div className="p-8">
                <h1 className="font-bold text-3xl">Main Content</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis repellat, cum ratione fugit dolorum sequi dolores odit commodi cupiditate ab excepturi deserunt laborum saepe, praesentium id deleniti aperiam eaque.</p>
                <p className="mt-4">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
            </div>
            <footer className="p-8 bg-blue-500">
                <h2 className="font-bold text-2xl">Footer</h2>
            </footer>
        </div>
    )
};

export default page;