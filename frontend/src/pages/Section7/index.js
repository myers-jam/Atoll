import { withRouter } from 'react-router-dom';
import './section7.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';

function Section7() {

    const containerRef = useRef(null)

    const [divVisible, setDivVisible] = useState(false);

    const container = {
        initial: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { 
                staggerChildren: .2
            }
        }
    }

    const item = {
        initial: {opacity: 0},
        visible: {opacity: 1}
    }

    const options = {
        threshold: .1
    }
    
    const callbackFunction = (entries) => {
        const [entry] = entries
        if (!divVisible) setDivVisible(entry.isIntersecting)
        //console.log("IT'S VISIBLE YO!")
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }

    }, [containerRef, options])
    

    return (
        <div className='section-7'>
            <div className='list' ref={containerRef}>
                <AnimatePresence>
                <motion.ul variants={container} initial={"initial"} animate={divVisible ? 'visible' : 'initial'}>
                    <motion.li variants={item}>Dynamic Wind</motion.li>
                    <motion.li variants={item}>Random Object Spawns</motion.li>
                    <motion.li variants={item}>Item Interaction</motion.li>
                    <motion.li variants={item}>Challenges</motion.li>
                    <motion.li variants={item}>Animations</motion.li>
                    <motion.li variants={item}>Checkpoint System</motion.li>
                    <motion.li variants={item}>Developer made Assets (Everything)</motion.li>
                </motion.ul>
                </AnimatePresence>
            </div>
            
        </div>
    )
}


export default withRouter(Section7);