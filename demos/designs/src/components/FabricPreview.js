import React, {Component} from "react";
import PropTypes from 'prop-types';

const DPI = 150,
CANVAS_WIDTH = 500;

class FabricPreview extends Component {
    componentWillUpdate(nextProps, nextState) {
        // clear canvas
        // https://medium.com/gitconnected/componentdidmakesense-react-lifecycle-explanation-393dcb19e459

        if (this.canvas && this.context) {
            this
                .context
                .clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // after render draw on canvas
        const {image, dimensions} = this.props;

        if (image && dimensions) {
            const img = new Image();
            img.addEventListener('load', () => {
                let {width, height} = img;
                let imgWidthIn = width / DPI;
                let imgHeightIn = height / DPI;
                let inchPixels = CANVAS_WIDTH / dimensions[0];
                let tileWidth = Math.ceil(inchPixels * imgWidthIn);
                let tileHeight = Math.ceil(inchPixels * imgHeightIn);
                let tileX = Math.ceil(CANVAS_WIDTH / tileWidth);
                let tileY = Math.ceil(DPI * dimensions[1] / tileHeight);
                for (let x = 0; x < tileX; x++) {
                    for (let y = 0; y < tileY; y++) {
                        this
                            .context
                            .drawImage(img, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
                    }
                }
            }, false);
            img.src = image;
        }
    }

    render() {
        if (!(this.props.image && this.props.dimensions)) {
            return <div></div>;
        }

        const {dimensions} = this.props;
        const width = CANVAS_WIDTH;
        const height = width / dimensions[0] *  dimensions[1];

        return (
            <div className="FabricPreview">
                <canvas
                    width={width}
                    height={height}
                    ref={canvas => {
                    if (canvas) {
                        this.canvas = canvas;
                        this.context = canvas.getContext('2d');
                    }
                }}></canvas>
            </div>
        )
    }
}

FabricPreview.propTypes = {
    image: PropTypes.string.isRequired,
    dimensions: PropTypes.arrayOf(PropTypes.number)
}

export default FabricPreview;
