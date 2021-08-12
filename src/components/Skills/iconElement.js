import React from 'react'
import {IconWrap3,Icon4} from '../Extras/InfoElements'
import {FaDatabase, FaPython,FaReact} from 'react-icons/fa'
import {SiJavascript,SiCplusplus,SiTensorflow} from 'react-icons/si'
import {useSpring,animated} from 'react-spring'
import useIsInViewport from 'use-is-in-viewport'

export const IconWrap = (lightBg) => {
    const [isInViewport1, targetRef1] = useIsInViewport({
        modBottom: '-50px',
        modTop:'-150px',
        modLeft: '400px',
    })

    const [isInViewport2, targetRef2] = useIsInViewport({
        modBottom: '-50px',
        modTop:'-150px',
        modLeft: '400px',
    })

    const [isInViewport3, targetRef3] = useIsInViewport({
        modBottom: '-50px',
        modTop:'-150px',
        modLeft: '400px',
    })
    const [isInViewport4, targetRef4] = useIsInViewport({
        modBottom: '-50px',
        modTop:'-150px',
        modLeft: '400px',
    })
    const [isInViewport5, targetRef5] = useIsInViewport({
        modBottom: '-50px',
        modTop:'-150px',
        modLeft: '400px',
    })
    const [isInViewport6, targetRef6] = useIsInViewport({
        modBottom: '-50px',
        modTop:'-150px',
        modLeft: '400px',
    })

    const animation1 = useSpring({
        config:{
            duration:350
        },
        opacity: isInViewport1 ? 1 : 0,
        transform: isInViewport1? `translateX(0%)`:`translateX(-100%)`
    })

    const animation2 = useSpring({
        config:{
            duration:350
        },
        opacity: isInViewport2 ? 1 : 0,
        transform: isInViewport2? `translateX(0%)`:`translateX(-100%)`
    })

    const animation3 = useSpring({
        config:{
            duration:350
        },
        opacity: isInViewport3 ? 1 : 0,
        transform: isInViewport3? `translateX(0%)`:`translateX(-100%)`
    })

    const animation4 = useSpring({
        config:{
            duration:350
        },
        opacity: isInViewport4 ? 1 : 0,
        transform: isInViewport4? `translateX(0%)`:`translateX(-100%)`
    })

    const animation5 = useSpring({
        config:{
            duration:350
        },
        opacity: isInViewport5 ? 1 : 0,
        transform: isInViewport5? `translateX(0%)`:`translateX(-100%)`
    })
    const animation6 = useSpring({
        config:{
            duration:350
        },
        opacity: isInViewport6 ? 1 : 0,
        transform: isInViewport6? `translateX(0%)`:`translateX(-100%)`
    })

    
    return (
        <IconWrap3>
            <animated.div ref={targetRef1} style={animation1}>
                <Icon4 lightBg={lightBg}><span style={{color: '#044F88',padding:30,'fontWeight':'500'}}>C++</span><SiCplusplus/></Icon4>
            </animated.div>
            <animated.div ref={targetRef2} style={animation2}>
                <Icon4  lightBg={lightBg}><span style={{color:'#d9c645',padding:30,'fontWeight':'500'}}>JavaScript</span><SiJavascript/></Icon4>
            </animated.div>
            <animated.div ref={targetRef3} style={animation3}>
                <Icon4  lightBg={lightBg}><span style={{color:'#61dbfb',padding:30,'fontWeight':'500'}}>React</span><FaReact/></Icon4>
            </animated.div>
            <animated.div ref={targetRef4}style={animation4}>
                <Icon4  lightBg={lightBg}><span style={{color:'#edb634',padding:30,'fontWeight':'500'}}>Python</span><FaPython/></Icon4>
            </animated.div>
            <animated.div ref={targetRef5} style={animation5}>
                <Icon4  lightBg={lightBg}><span style={{color:'#e88b10',padding:30,'fontWeight':'500'}}>Tensorflow</span><SiTensorflow/></Icon4>
            </animated.div>
            <animated.div ref={targetRef6} style={animation6}>
                <Icon4  lightBg={lightBg}><span style={{color:'#00758F',padding:30,'fontWeight':'500'}}>SQL</span><FaDatabase/></Icon4>
            </animated.div>
        </IconWrap3 >
    )
}

export default IconWrap
