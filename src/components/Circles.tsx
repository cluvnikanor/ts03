import blue from '../circleIcons/circle-blue.png'
import pink from '../circleIcons/circle-pink.png'
import yellow from '../circleIcons/circle-yellow.png'
import green from '../circleIcons/circle-green.png'
import LineTo from 'react-lineto';
import CircleButton from './CircleButton';


function Circles() {
    const style = {
        delay: 0,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderWidth: 3,
        orientation: 'h'
    };
    return (
        <>
            <CircleButton
                className='A'
                color={blue}
                title="פרטים"
                left={'70px'}
                top={'70px'} />

            <CircleButton
                className='B'
                color={pink}
                title="פרטים"
                left={'70px'}
                top={'370px'} />

            <CircleButton
                className='C'
                color={green}
                title="פרטים"
                left={'270px'}
                top={'300px'} />

            <LineTo
                from="A"
                to="B"
                fromAnchor="bottom"
                toAnchor="top"
                {...style}
            />

            <LineTo 
                from="A"
                to="C"
                fromAnchor="right"
                toAnchor="top"
                {...style}
            />
        </>
    )
}

export default Circles