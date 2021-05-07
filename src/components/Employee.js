import API from '../utils/API';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeDetail from './EmployeeDetail';



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
        if (query) {
            let apiResults = this.state.results;
            apiResults = apiResults.filter(item => item.name.first.toLowerCase().includes(query))
            this.setState({ queryResults: apiResults })
        } else {
            this.setState({ queryResults: this.state.results })
        }
    }

    handleSearch = (event) => {
        console.log(event.target.value)
        this.setState({ search: event.target.value })

    }

    // componentDidUpdate() {
    //     if (this.state.search) {
    //         this.searchEmployees(this.state.search)

    //     }
    // }
    sortFirst = () => {
        let sortArray = this.state.queryResults
        sortArray.sort((a, b) => {
            let fa = a.name.first.toLowerCase(),
                fb = b.name.first.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        this.setState({ queryResults: sortArray })

    }
    render() {
        return (
            <div>



                <div className="jumbotron">
                    <h1>Employee Directory</h1>
                </div>
                <input type="text" onChange={this.handleSearch} value={this.state.search} />
                <table>
                    <tr>
                        <th>img</th>
                        <th onClick={this.sortFirst}>first</th>
                        <th>last</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>city</th>

                        <th>state</th>
                    </tr>
                    {this.state.queryResults.map((employee) => {

                        return <EmployeeDetail first={employee.name.first}
                            last={employee.name.last}
                            thumbnail={employee.picture.thumbnail}
                            email={employee.email}
                            phone={employee.cell}
                            city={employee.location.city}
                            state={employee.location.state}
                        />
                    })}

                </table>



            </div>
        )
    }
}
