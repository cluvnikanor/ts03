import blueCircle from '../circleIcons/blueCircle.png'


function Circles() {
    return (
        <>
            <button
                type="button"
                className="btn btn-link"
                data-toggle="tooltip" data-placement="right"
                title="מדריכה"
            >
                <img src={blueCircle} alt="blue circle" />
            </button>
        </>
    )
}

export default Circles