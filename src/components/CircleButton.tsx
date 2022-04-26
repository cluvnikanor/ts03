import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"
import './Circle.css'
import { CircleButtonProps } from './CircleButtonProps';
import TakeRole from './TakeRole';


function CircleButton(props: CircleButtonProps) {
    const { className, color, left, top, title, isActive } = props;
    const [showRegistration, setShowRegistration] = useState(false)

    let backgroundColor = isActive ? color : 'grey';

    const handleClick = () => {
        setShowRegistration(prev => !prev);
    }

    return (
        <>
            <button
                style={{
                    backgroundColor: backgroundColor,
                    border: `5px solid ${color}`,
                    left: left,
                    top: top,
                }}
                type="button"
                className={className}
                data-toggle="tooltip" data-placement="right"
                title={title}
                onClick={handleClick}
            >
                {isActive || <FaPlusCircle color={color} size="40px" />}
            </button>
            {showRegistration &&
                <TakeRole title={title}
                />}
        </>
    )
}

export default CircleButton;