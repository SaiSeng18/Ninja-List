import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
    return (  
        <div className="bg-purple-500 w-full h-16 flex items-center justify-between">
            <div className="mx-5 px-3 py-2 flex items-center justify-center">
                <Image src="/logo.png" width={32} height={32} />
            </div>
            <div className="justify-between mx-5">
                <Link href="/"><a className="text-gray-900 hover:bg-purple-400 hover:text-white mx-3 px-3 py-2 rounded-md text-sm font-medium">Home </a></Link>
                <Link href="/admin"><a className="text-gray-900 hover:bg-purple-400 hover:text-white mx-3 px-3 py-2 rounded-md text-sm font-medium">Admin </a></Link>
                <Link href="/about"><a className="text-gray-900 hover:bg-purple-400 hover:text-white mx-3 px-3 py-2 rounded-md text-sm font-medium">About </a></Link>
                <Link href="/ninjas"><a className="text-gray-900 hover:bg-purple-400 hover:text-white mx-3 px-3 py-2 rounded-md text-sm font-medium">Ninja Listing </a></Link>
                <Link href="/shop"><a className="text-gray-900 hover:bg-purple-400 hover:text-white mx-3 px-3 py-2 rounded-md text-sm font-medium">Shop </a></Link>
            </div>
            
        </div>
    );
}

export default Navbar;