import React, {Component} from "react";
import request from 'superagent';
import PropTypes from 'prop-types';

class SizeChooser extends Component {
    constructor() {
        super();
        this.state = {
            sizes: [],
            currentSize: null,
            yardCount: 1
        }
    }

    componentWillMount() {
        request
            .get("/sizes.json")
            .then(res => {
                this.setState({
                    sizes: res.body.sizes,
                    currentSize: res.body.sizes[0]
                }, () => {
                    this
                        .props
                        .onChoose(this.state.sizes[0].dimensions);
                })
            })
    }

    getDimensions() {
        const { currentSize, yardCount } = this.state;
        if (currentSize.name === "Yard") {
            return [currentSize.dimensions[0], currentSize.dimensions[1] * yardCount]
        } else {
            return currentSize.dimensions;
        }
    }

    onChooseEvent(event) {
        const sizeId = parseInt(event.target.value, 10);
        const size = this
            .state
            .sizes
            .find(size => size.id === sizeId)

        this.setState({
            currentSize: size
        }, () => {
            this
                .props
                .onChoose(this.getDimensions())
        });
    }

    onChangeYardEvent(event) {
        this.setState({
            yardCount: event.target.value
        }, () => {
            this
                .props
                .onChoose(this.getDimensions())
        })
    }

    render() {
        const {sizes, currentSize} = this.state;
        let quantitySelector;

        if (currentSize && currentSize.name === "Yard") {
            quantitySelector = (
                <div>
                    <label>Number of yards</label>
                    <input
                        type="number"
                        value={this.state.yardCount}
                        onChange={event => this.onChangeYardEvent(event)}/>
                </div>
            );
        }

        return (
            <div className="SizeChooser">
                <label>Size</label>
                <select onChange={event => this.onChooseEvent(event)}>
                    {sizes.map(size => {
                        return <option key={size.id} value={size.id}>{size.name}</option>;
                    })}
                </select>
                {quantitySelector}
            </div>
        )
    }

}

SizeChooser.propTypes = {
    onChoose: PropTypes.func.isRequired
}

export default SizeChooser;
