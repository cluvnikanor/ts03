import { FaPlusCircle } from "react-icons/fa"
import './Circle.css'
import { CircleButtonProps } from './CircleButtonProps';

function CircleButton(props: CircleButtonProps) {
    const { className, color, left, top, title, isActive } = props;
    let backgroundColor = isActive? color: 'grey'
    return (
        <>
            <button
                style={{
                    backgroundColor: backgroundColor,
                    position: "absolute",/*DW*/
                    left: left,
                    top: top,
                }}
                type="button"
                className={className}
                data-toggle="tooltip" data-placement="right"
                title={title}
            >
                <FaPlusCircle color={color} size="40px"/>
            </button>
        </>
    )
}
export default CircleButton;