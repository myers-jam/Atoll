import { withRouter } from 'react-router-dom';
import './section6.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';


function Section6() {
    
    const containerRef = useRef(null)

    const [divVisible, setDivVisible] = useState(false);

    const featuresAnimation = {
        initial: {
            x: -800,
            transition: { duration: 1 }
        },
        visible: {
            x: 0,
            transition: { 
                duration: 1,
                type: "spring"
            }

        }
    }


    const options = {
        threshold: .5          // what fraction of the element that needs to be seen to trigger the animation
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
        <div className='section-6'>
            <div className='black-bar' ref={containerRef}>
                <AnimatePresence>
                    <motion.p id='features' initial={"initial"} animate={divVisible ? "visible" : "initial"} variants={featuresAnimation}>FEATURES:</motion.p>
                </AnimatePresence>
            </div>
        </div>
    )
}




export default withRouter(Section6);