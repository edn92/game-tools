import { motion } from "motion/react";

function ButtonFormSubmit(props){
    return (
        <motion.button type='submit' whileTap={{y:1}}>{props.text}</motion.button>
    );
}

export default ButtonFormSubmit;