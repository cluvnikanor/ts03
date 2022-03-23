import LineTo from 'react-lineto';
import CircleButton from './CircleButton';
import { CircleButtonProps } from './CircleButtonProps'
import { LineToProps } from './LineToProps';

function DrawCircles() {
    const style = {
        delay: 0,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderWidth: 4,
        orientation: 'h'
    };

    const circles = [
        new CircleButtonProps('A', 'blue', '70px', '70px', 'פרטים',),
        new CircleButtonProps('B', 'pink', '70px', '370px', 'פרטים',),
        new CircleButtonProps('C', 'green', '270px', '300px', 'פרטים',),
    ]

    const lines = [
        new LineToProps('A', 'B', 'bottom', 'top'),
        new LineToProps('A', 'C', 'right', 'top'),
    ]

    return (
        <>
            {lines.map(i => (
                <LineTo
                    from={i.from}
                    to={i.to}
                    fromAnchor={i.fromAnchor}
                    toAnchor={i.toAnchor}
                    {...style}
                />
            ))}
            
            {circles.map(i => (
                <CircleButton
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

export default DrawCircles