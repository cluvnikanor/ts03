import Button from 'react-bootstrap/esm/Button'
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger'
import Tooltip from 'react-bootstrap/esm/Tooltip'
import { Placement } from 'react-bootstrap/esm/types'
import Image from 'react-bootstrap/Image'

function Shapes() {
  return (
    <>
      <figure  className='jf'>
        <svg className="bd-placeholder-img rounded-circle"
          width="75" height="75"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Completely round image: 75x75">
          <title>Completely round image</title>
          <rect width="100%" height="100%" fill="#868e96" />
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
        </svg>
      </figure>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement as Placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary">Tooltip on {placement}</Button>
        </OverlayTrigger>
      ))}
      <div className="bd-example bd-example-images">
        <svg className="bd-placeholder-img rounded"
          width="75" height="75" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice" focusable="false"
          role="img" aria-label="Example rounded image: 75x75">
          <title>Example rounded image</title>
          <rect width="100%" height="100%" fill="#868e96" />
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
        </svg>
        <svg className="bd-placeholder-img rounded-top"
          width="75" height="75" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice" focusable="false"
          role="img" aria-label="Example top rounded image: 75x75">
          <title>Example top rounded image</title>
          <rect width="100%" height="100%" fill="#868e96" />
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
        </svg>
        <svg className="bd-placeholder-img rounded-right"
          width="75" height="75" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice" focusable="false"
          role="img" aria-label="Example right rounded image: 75x75">
          <title>Example right rounded image</title>
          <rect width="100%" height="100%" fill="#868e96" />
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
        </svg>
        <svg className="bd-placeholder-img rounded-circle"
          width="75" height="75" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice" focusable="false"
          role="img" aria-label="Completely round image: 75x75"
        ><title>Completely round image</title>
          <rect width="100%" height="100%" fill="#868e96" />
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
        </svg>
        <svg className="bd-placeholder-img rounded-pill"
          width="150" height="75" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice" focusable="false"
          role="img" aria-label="Rounded pill image: 150x75">
          <title>Rounded pill image</title>
          <rect width="100%" height="100%" fill="#868e96" />
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">150x75</text>
        </svg>
        <svg className="bd-placeholder-img rounded-0"
          width="75" height="75" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice" focusable="false"
          role="img" aria-label="Example non-rounded image (overrides rounding applied elsewhere): 75x75">
          <title>Example non-rounded image (overrides rounding applied elsewhere)</title>
          <rect width="100%" height="100%" fill="#868e96" />
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
        </svg>
      </div>
    </>
  )
}

export default Shapes