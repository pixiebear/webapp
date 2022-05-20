import '../assets/css/App.css';
import { motion } from 'framer-motion/dist/framer-motion';

function Staking() {

return (

    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  >
        <h1>Staking page</h1>
    </motion.div>

);


}


export default Staking;