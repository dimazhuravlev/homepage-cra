import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'
import React, { PureComponent } from 'react'
import './style.css?CSSModulesDisable'

export class Magnifier extends PureComponent {
  static defaultProps = {
    // Image
    width: '100%',
    height: 'auto',
    className: '',

    // Zoom image
    zoomFactor: 1.5,

    // Magnifying glass
    mgWidth: 150,
    mgHeight: 150,
    mgBorderWidth: 2,
    mgShape: 'circle',
    mgShowOverflow: true,
    mgMouseOffsetX: 0,
    mgMouseOffsetY: 0,
    mgTouchOffsetX: -50,
    mgTouchOffsetY: -50,

    onLoad: () => {},
  }
  state = {
    showZoom: false,
    mgOffsetX: 0,
    mgOffsetY: 0,
    relX: 0,
    relY: 0,
  }

  calcImgBoundsDebounced
  imgBounds

  constructor(props) {
    super(props)

    // Function bindings
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseMove = throttle(this.onMouseMove.bind(this), 20, {
      trailing: false,
    })
    this.onMouseOut = this.onMouseOut.bind(this)
    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchMove = throttle(this.onTouchMove.bind(this), 20, {
      trailing: false,
    })
    this.onTouchEnd = this.onTouchEnd.bind(this)
    this.calcImgBounds = this.calcImgBounds.bind(this)
    this.calcImgBoundsDebounced = debounce(this.calcImgBounds, 200)
  }

  componentDidMount() {
    console.log(this.props.forwardRef)
    // Add mouse/touch event listeners to image element (assigned in render function)
    // `passive: false` prevents scrolling on touch move
    this.props.forwardRef.addEventListener('mouseenter', this.onMouseEnter, {
      passive: false,
    })
    this.props.forwardRef.addEventListener('mousemove', this.onMouseMove, {
      passive: false,
    })
    this.props.forwardRef.addEventListener('mouseout', this.onMouseOut, {
      passive: false,
    })
    this.props.forwardRef.addEventListener('touchstart', this.onTouchStart, {
      passive: false,
    })
    this.props.forwardRef.addEventListener('touchmove', this.onTouchMove, {
      passive: false,
    })
    this.props.forwardRef.addEventListener('touchend', this.onTouchEnd, {
      passive: false,
    })

    // Re-calculate image bounds on window resize
    window.addEventListener('resize', this.calcImgBoundsDebounced)
    // Re-calculate image bounds on scroll (useCapture: catch scroll events in entire DOM)
    window.addEventListener('scroll', this.calcImgBoundsDebounced, true)
  }

  componentWillUnmount() {
    // Remove all event listeners
    this.props.forwardRef.removeEventListener('mouseenter', this.onMouseEnter)
    this.props.forwardRef.removeEventListener('mousemove', this.onMouseMove)
    this.props.forwardRef.removeEventListener('mouseout', this.onMouseOut)
    this.props.forwardRef.removeEventListener('touchstart', this.onTouchStart)
    this.props.forwardRef.removeEventListener('touchmove', this.onTouchMove)
    this.props.forwardRef.removeEventListener('touchend', this.onTouchEnd)
    window.removeEventListener('resize', this.calcImgBoundsDebounced)
    window.removeEventListener('scroll', this.calcImgBoundsDebounced, true)
  }

  onMouseEnter() {
    this.calcImgBounds()
  }

  onMouseMove(e) {
    const { mgMouseOffsetX, mgMouseOffsetY } = this.props

    if (this.props.imgBounds) {
      const target = e.target
      const relX = (e.clientX - this.props.imgBounds.left) / target.clientWidth
      const relY = (e.clientY - this.props.imgBounds.top) / target.clientHeight

      this.setState({
        mgOffsetX: mgMouseOffsetX,
        mgOffsetY: mgMouseOffsetY,
        relX,
        relY,
        showZoom: true,
      })
    }
  }

  onMouseOut() {
    this.setState({
      showZoom: false,
    })
  }

  onTouchStart(e) {
    e.preventDefault() // Prevent mouse event from being fired

    this.calcImgBounds()
  }

  onTouchMove(e) {
    e.preventDefault() // Disable scroll on touch

    if (this.props.imgBounds) {
      const target = e.target
      const { mgTouchOffsetX, mgTouchOffsetY } = this.props
      const relX =
        (e.targetTouches[0].clientX - this.props.imgBounds.left) /
        target.clientWidth
      const relY =
        (e.targetTouches[0].clientY - this.props.imgBounds.top) /
        target.clientHeight

      // Only show magnifying glass if touch is inside image
      if (relX >= 0 && relY >= 0 && relX <= 1 && relY <= 1) {
        this.setState({
          mgOffsetX: mgTouchOffsetX,
          mgOffsetY: mgTouchOffsetY,
          relX,
          relY,
          showZoom: true,
        })
      } else {
        this.setState({
          showZoom: false,
        })
      }
    }
  }

  onTouchEnd() {
    this.setState({
      showZoom: false,
    })
  }

  calcImgBounds() {
    if (this.props.forwardRef) {
      this.props.imgBounds = this.props.forwardRef.getBoundingClientRect()
    }
  }

  render() {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      src,
      width,
      height,
      className,
      zoomImgSrc,
      zoomFactor,
      mgHeight,
      mgWidth,
      mgBorderWidth,
      mgMouseOffsetX,
      mgMouseOffsetY,
      mgTouchOffsetX,
      mgTouchOffsetY,
      mgShape,
      mgShowOverflow,
      ...otherProps
    } = this.props
    /* eslint-enable @typescript-eslint/no-unused-vars */
    const { mgOffsetX, mgOffsetY, relX, relY, showZoom } = this.state

    // Show/hide magnifying glass (opacity needed for transition)
    let mgClasses = 'magnifying-glass'
    if (showZoom) {
      mgClasses += ' visible'
    }
    if (mgShape === 'circle') {
      mgClasses += ' circle'
    }

    return (
      <div
        className={`magnifier ${className}`}
        style={{
          width,
          height,
          overflow: mgShowOverflow ? 'visible' : 'hidden',
        }}
      >
        <img // eslint-disable-line jsx-a11y/alt-text
          className="magnifier-image"
          src={src}
          width="100%"
          height="100%"
          {...otherProps}
          onLoad={e => {
            this.calcImgBounds()
            this.props.onLoad(e)
          }}
          ref={this.props.forwardRef}
        />
        {this.props.imgBounds && (
          <div
            className={mgClasses}
            style={{
              width: mgWidth,
              height: mgHeight,
              left: `calc(${relX * 100}% - ${mgWidth /
                2}px + ${mgOffsetX}px - ${mgBorderWidth}px)`,
              top: `calc(${relY * 100}% - ${mgHeight /
                2}px + ${mgOffsetY}px - ${mgBorderWidth}px)`,
              backgroundImage: `url("${zoomImgSrc || src}")`,
              backgroundPosition: `calc(${relX * 100}% + ${mgWidth /
                2}px - ${relX * mgWidth}px) calc(${relY * 100}% + ${mgHeight /
                2}px - ${relY * mgWidth}px)`,
              backgroundSize: `${zoomFactor *
                this.props.imgBounds.width}% ${zoomFactor *
                this.props.imgBounds.height}%`,
              borderWidth: mgBorderWidth,
            }}
          />
        )}
      </div>
    )
  }
}
