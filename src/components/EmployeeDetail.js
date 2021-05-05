

import React, { Component } from 'react'

export default class EmployeeDetail extends Component {
    render(props) {
        return (
            <tr>
                {/* .map on state results output a row in table(component) */}
                <td><img src={this.props.thumbnail} alt="thumbnail" /> </td>
                <td>{this.props.name}</td>
                <td>(323)534-4872)</td>
                <td>trowe@gmail.com</td>
                <td>Chicago</td>
            </tr>


        )
    }
}
