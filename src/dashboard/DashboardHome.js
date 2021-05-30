import React, { Component } from 'react'
import NewForm from "./NewForm"

class DashboardHome extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hey!</h1>
                <NewForm />
            </div>
        )
    }
}

export default DashboardHome;
