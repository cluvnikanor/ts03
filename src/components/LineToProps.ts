export class LineToProps {
    from = "A"
    to = "B"
    fromAnchor = "bottom"
    toAnchor = "top"

    constructor(
        from: string,
        to: string,
        fromAnchor: string,
        toAnchor: string,
    ) {
        this.from = from;
        this.to = to;
        this.fromAnchor = fromAnchor;
        this.toAnchor = toAnchor;
    }
}