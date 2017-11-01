import React, {Component} from "react";
import request from 'superagent';
import PropTypes from 'prop-types';

class DesignChooser extends Component {
    constructor() {
        super();
        this.state = {
            designs: []
        }
    }

    componentWillMount() {
        request
            .get('/designs.json')
            .then(res => {
                this.setState({designs: res.body.designs}, () => {
                    this.props.onChoose(this.state.designs[0])
                })
            })
    }

    render() {
        const { onChoose } = this.props;
        return (
            <div className="DesignChooser">
                {this.state.designs.map((design, idx) => {
                    return (<div className="design" key={design.id} onClick={event => onChoose(design)}>
                        <img src={`/img/designs/${design.image}`} alt={design.name} />
                    </div>)
                })}
            </div>
        );
    }
}

DesignChooser.propTypes = {
    onChoose: PropTypes.func.isRequired
}

export default DesignChooser;
