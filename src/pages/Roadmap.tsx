import '../assets/css/App.css';
import { motion } from 'framer-motion/dist/framer-motion';


function Roadmap() {

return (
<>
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  >
    <h1>Roadmap PAGE </h1>
  </motion.div>

</>
);


}


export default Roadmap;