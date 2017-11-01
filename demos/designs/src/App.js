import React, {Component} from 'react';
import 'shoelace-css/dist/shoelace.css';
import './App.css';
import DesignChooser from './components/DesignChooser';
import SizeChooser from './components/SizeChooser';
import FabricPreview from './components/FabricPreview';

class App extends Component {
    constructor() {
        super();
        this.state = {
            design: null,
            dimensions: null
        }
    }

    render() {
        const { design, dimensions } = this.state;
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <DesignChooser onChoose={design => this.setState({design: design})}/>
                        </div>
                        <div className="col">
                            <SizeChooser onChoose={dimensions => this.setState({
                                dimensions: dimensions
                            })} />
                            </div>
                        <div className="col">
                            {design &&
                            <FabricPreview image={`/img/designs/${design.image}`} dimensions={dimensions} />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
