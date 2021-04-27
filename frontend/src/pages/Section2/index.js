import { withRouter } from 'react-router-dom';
import './section2.css';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';

function Section2() {

    
    const line1 ="'A first person platformer, made in Unreal.'"

    

    const containerRef = useRef(null)

    const [divVisible, setDivVisible] = useState(false);

    const container = {
        initial: {opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: .03,
            },
        },
    } 

    const item ={
        initial: {opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y:0,
        },
    }

    const options = {
        threshold: 1
    }

    const callbackFunction = (entries) => {
        const [entry] = entries
        if (!divVisible) setDivVisible(entry.isIntersecting)
        // console.log("IT'S VISIBLE YO!")
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }

    }, [containerRef, options])
   
    
    return (
        <div className='section-2'>
            <h1 className='title-text' id='section-2-title'>ATOLL</h1>
            
            <h2 id='custom-heading' className='custom-heading-module' ref={containerRef}>
                <AnimatePresence>
                <motion.letter variants={container} initial={"initial"} animate={divVisible ? 'visible' : 'initial'}>
                    <span className='word-container'>
                        <motion.ut class='ut-effect-letter' variants={item}>A</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}> </motion.ut>
                    </span>
                    {/* </motion.letter> */}
                {/* <motion.letter variants={container} initial={"initial"} animate={divVisible ? 'visible' : 'initial'}> */}
                    <span className='word-container'>
                        <motion.ut class='ut-effect-letter' variants={item}>F</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>I</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>R</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>S</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>T</motion.ut>
                        <motion.ut class='ut-effect-letter'> </motion.ut>
                    </span>
                    {/* </motion.letter> */}
                {/* <motion.letter variants={container} initial={"initial"} animate={divVisible ? 'visible' : 'initial'}> */}
                    <span className='word-container'>
                        <motion.ut class='ut-effect-letter' variants={item}>P</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>E</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>R</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>S</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>O</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>N</motion.ut>
                        <motion.ut class='ut-effect-letter'> </motion.ut>
                    </span>
                    {/* </motion.letter> */}
                {/* <motion.letter variants={container} initial={"initial"} animate={divVisible ? 'visible' : 'initial'}> */}
                    <span className='word-container'>
                        <motion.ut class='ut-effect-letter' variants={item}>P</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>L</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>A</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>T</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>F</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>O</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>R</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>M</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>E</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>R</motion.ut>
                        <motion.ut class='ut-effect-letter'> </motion.ut>
                    </span>
                    {/* </motion.letter> */}
                {/* <motion.letter variants={container} initial={"initial"} animate={divVisible ? 'visible' : 'initial'}> */}
                    <span cclassName='word-container'>
                        <motion.ut class='ut-effect-letter' variants={item}>M</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>A</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>D</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>E</motion.ut>
                        <motion.ut class='ut-effect-letter'> </motion.ut>
                    </span>
                    {/* </motion.letter> */}
                {/* <motion.letter variants={container} initial={"initial"} animate={divVisible ? 'visible' : 'initial'}> */}
                    <span className='word-container'>
                        <motion.ut class='ut-effect-letter' variants={item}>I</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>N</motion.ut>
                        <motion.ut class='ut-effect-letter'> </motion.ut>
                    </span>
                    {/* </motion.letter> */}
                {/* <motion.letter variants={container} initial={"initial"} animate={divVisible ? 'visible' : 'initial'}> */}
                    <span className='word-container'>
                        <motion.ut class='ut-effect-letter' variants={item}>U</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>N</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>R</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>E</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>A</motion.ut>
                        <motion.ut class='ut-effect-letter' variants={item}>L</motion.ut>
                    </span>
                    </motion.letter>
                </AnimatePresence>
            </h2>
        </div>
        
        )
    
}


export default withRouter(Section2);