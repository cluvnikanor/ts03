import { Line } from 'react-lineto';
import CircleButton from './CircleButton';
import { CircleButtonProps } from './CircleButtonProps'
import { LineProps } from './LineProps';

function DrawMandala() {
    const style = {
        className: 'line',
        delay: 0,
        borderColor: "#ddd",
        borderWidth: 4,
        position: "relative",/*DW*/
    };

    const drawLine = (a: CircleButtonProps, b: CircleButtonProps, rad?: number) => {
        if (!rad) rad = 0;
        const x0 = parseInt(a.left) + rad;
        const y0 = parseInt(a.top) + rad;
        const x1 = parseInt(b.left) + rad;
        const y1 = parseInt(b.top) + rad;
        const length = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
        const dx = rad * (x1 - x0) / length;
        const dy = rad * (y1 - y0) / length;
        return (
            new LineProps(x0 + dx, y0 + dy, x1 - dx, y1 - dy,)
        )
    }

    const circles = [
        new CircleButtonProps('A', 'blue', '70px', '70px', 'פרטים',),
        new CircleButtonProps('B', 'pink', '70px', '370px', 'פרטים',),
        new CircleButtonProps('C', 'green', '270px', '300px', 'פרטים',),
    ]

    const lines = [
        drawLine(circles[0], circles[1], 64),
        drawLine(circles[2], circles[0], 64),
        drawLine(circles[1], circles[2], 64),
    ]

    return (
        <>
            {lines.map(i => (
                <Line
                    // key=
                    x0={i.x0}
                    y0={i.y0}
                    x1={i.x1}
                    y1={i.y1}
                    {...style}
                />
            ))}

            {circles.map(i => (
                <CircleButton
                    // key=
                    className={i.className}
                    color={i.color}
                    title={i.title}
                    left={i.left}
                    top={i.top}
                />
            ))}
        </>
    )
}

export default DrawMandala