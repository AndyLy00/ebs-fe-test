import React, {Component} from "react";
import {data} from "./data";

export default class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/products/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items:result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state
        if (error) {
            return <p> Error {error.message} </p>
        } else if (!isLoaded) {
            return  <p> Loading... </p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}