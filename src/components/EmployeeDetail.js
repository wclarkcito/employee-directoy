

import React, { Component } from 'react'

export default class EmployeeDetail extends Component {
    render(props) {
        return (
            <tr>
                {/* .map on state results output a row in table(component) */}
                <td><img src={this.props.thumbnail} alt="thumbnail" /> </td>
                <td>{this.props.first}</td>
                <td>{this.props.last}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.email}</td>
                <td>{this.props.location}</td>
            </tr>


        )
    }
}
