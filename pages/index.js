import Head from 'next/head'
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function Home() {
  return (

    <motion.div 
    exit={{ opacity: 0 }} 
    initial={{  y: 60,  opacity: 0}} 
    animate={{ y: 0,opacity: 1,transition: {  duration: .6,  ease: [0.6, -0.85, 0.01, 0.99],} }}>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="bg-gray-100 min-w-screen min-h-screen items-center rounded-md p-5 mx-auto">
        <h1 className="text-2xl font-bold my-3">Home</h1>
        <p className="my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est incidunt error facere ut quo tempore mollitia culpa, deserunt aspernatur laborum voluptatum et cum praesentium. In quaerat culpa ipsa placeat sit?</p>
        <p className="my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est incidunt error facere ut quo tempore mollitia culpa, deserunt aspernatur laborum voluptatum et cum praesentium. In quaerat culpa ipsa placeat sit?</p>
        <Link href="/ninjas">
          <a className="bg-purple-500 hover:ring-2 text-white px-3 py-2 rounded-md text-sm font-medium mx-auto my-3">See Ninja Listing</a>
        </Link>
      </div>
    </motion.div>
    

    
  )
}
