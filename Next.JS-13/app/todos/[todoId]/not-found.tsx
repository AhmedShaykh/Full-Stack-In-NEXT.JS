import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl">
                <span className="font-bold">404</span>{" "}
                | This page could not be found.
            </h1>

            <Link href="/todos">
                <p className="font-medium text-xl pt-8 text-blue-700 pointer">
                    Back To Todos Page
                </p>
            </Link>
        </div>
    )
};

export default NotFound;