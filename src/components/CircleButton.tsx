import './Circle.css'
import { CircleButtonProps } from './CircleButtonProps';

function CircleButton(props: CircleButtonProps) {
    const { className, color, left, top, title } = props;
    return (
        <>
            <button
                style={{
                    backgroundColor: color,
                    position: "absolute",
                    left: left,
                    top: top,
                }}
                // background-color= {props.color}
                type="button"
                className={className}
                data-toggle="tooltip" data-placement="right"
                title={title}
            >
            </button>
        </>
    )
}
export default CircleButton;