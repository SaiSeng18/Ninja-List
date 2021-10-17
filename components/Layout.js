import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const stagger = {
    anitmate: {
        transition: {
            staggerChildren: 0.1,
        }
    }
}

const Layout = ({ children }) => {
    return (  
        <div className="w-full min-h-screen">
            <Navbar />
            <motion.div variants={stagger} className="bg-gray-200 w-full min-h-screen flex items-center justify-center p-5">
                {children}
            </motion.div>
            <Footer />
        </div>
    );
}

export default Layout;