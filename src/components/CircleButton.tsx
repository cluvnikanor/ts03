import './Circle.css'

function CircleButton(props: {
    className:string,
    color: string,
    title: string
    left: string
    top: string
    ;
}) {
    return (
        <>
            <button
                style={{
                    position: "absolute",
                    left: props.left,
                    top: props.top,
                }}
                type="button"
                className={props.className}
                data-toggle="tooltip" data-placement="right"
                title={props.title}
            >
                <img src={props.color} alt="circle" />
            </button>
        </>
    )
}
export default CircleButton;