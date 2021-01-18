import React, {Component} from 'react';
import Contracts from "./Contracts/Contracts";



class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <div>
                    <Contracts/>
                </div>
        )
    }

}

export default Contacts;