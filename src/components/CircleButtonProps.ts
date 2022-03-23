export class CircleButtonProps {
    className: string = '';
    color: string = 'white';
    left: string = '0';
    top: string = '0';
    title: string = '';

    constructor(
        className: string,
        color: string,
        left: string,
        top: string,
        title: string,
    ) {
        this.className = className;
        this.color = color;
        this.left = left;
        this.top = top;
        this.title = title;
    }
}