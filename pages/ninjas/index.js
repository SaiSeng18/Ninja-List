import Link from "next/link";
import { motion } from "framer-motion";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <motion.div
        exit={{ opacity: 0 }} 
        initial={{  y: 60,  opacity: 0}} 
        animate={{y: 0,opacity: 1,transition: {  duration: .6,  ease: [0.6, -0.85, 0.01, 0.99],}}}
        className="bg-gray-100 w-full min-h-screen rounded-md mx-auto">
            <h1 className="text-2xl font-bold p-5">Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={"/ninjas/" + ninja.id}  key={ninja.id}>
                    <div className="bg-gray-100 text-gray-700 filter drop-shadow-3xl border-l-4 hover:border-blue-500 hover:bg-blue-100 rounded-md p-5 m-3">
                        <a>
                            <h3>{ ninja.name }</h3>
                        </a>
                    </div>
                </Link>
            ))}
        </motion.div>
    );
}

export default Ninjas;