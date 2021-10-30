import PropTypes from 'prop-types'
import {useTransition, animated} from '@react-spring/web'
import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = ({heroImgs}) => {

    const [index, set] = useState(0)
    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0 },
        enter: { opacity: 0.3 },
        leave: { opacity: 0 },
        config: { duration: 3000 },
    });
    useEffect(() => {
        const t = setInterval(() => set(state => (state + 1) % heroImgs.length), 4000)
        return () => clearTimeout(t)
    }, [])


    return (
        <div className="hero">
            <div className="hero-img">
                {
                    transitions((style, i) => (
                        <animated.img src={require("../assets/" + heroImgs[i].name).default} style={style} />
                    ))
                }
            </div>
            <div className="title">
                <h1>Dudisco</h1>
            </div>
        </div>
    )
}

//Hero.defaultProps = {
//    heroImgs: 'aa',
//}

//Hero.propTypes = {
//    heroImgs: PropTypes.string,
//}

export default Hero
