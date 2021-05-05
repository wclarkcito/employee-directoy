import API from '../utils/API';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeDetail from './EmployeeDetail'

export default class Employee extends Component {

    state = {
        search: "",
        results: [],
        queryResults: []
    }

    componentDidMount() {
        console.log("component mounted")
        this.userInitialize()
    }

    userInitialize = () => {
        API.getUsers()
            .then(res => {
                console.log(res)
                let apiResults = res.data.results;
                console.log(apiResults);
                // apiResults = apiResults.map(item => ({
                //     id: item.id,
                //     name: item.name.first + item.name.last


                // }))
                this.setState({ results: apiResults })
                this.setState({ queryResults: apiResults })
            })
    }

    searchEmployees = search => {
        const query = search.toLowerCase();
        if (!query) {
            this.setState({ queryResults: this.state.results })
        } else {
            let apiResults = this.state.results;
            apiResults = apiResults.filter(item => item.name.toLowerCase().includes(query))
        }
    }



    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>Employee Directory</h1>
                </div>
                <table>
                    <tr>
                        <th>img</th>
                        <th>name</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>location</th>
                    </tr>
                    {this.state.results.map((employee) => { return <EmployeeDetail name={employee.name.first} thumbnail={employee.picture.thumbnail} email={employee.email} phone={employee.cell} /> })}
                    {/* <tr> */}
                    {/* .map on state results output a row in table(component) */}
                    {/* <td>img</td>
                        <td>Bill</td>
                        <td>(323)534-4872)</td>
                        <td>trowe@gmail.com</td>
                        <td>Chicago</td>
                    </tr> */}
                </table>



            </div>
        )
    }
}
