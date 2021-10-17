import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router =  useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, []);

    return (  
        <div className="bg-gray-100 w-1/2 items-center rounded-md p-5 m-10 mx-auto">
            <div className="text-2xl font-bold my-3">Oops...</div>
            <div className="my-3">That Page Cannot Be Found</div>
            <div className="my-3">Go Back to the <Link href="/"><a className="text-blue-600">Home Page</a></Link> </div>
        </div>
    );
}

export default NotFound;