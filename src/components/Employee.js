import API from '../utils/API';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Employee extends Component {

    state = {
        search: "",
        results: [],
        queryResults: []
    }

    componentDidMount() {

    }

    userInitialize = () => {
        API.getUsers()
            .then(res => {
                console.log(res)
                let apiResults = res.data.results;
                console.log(apiResults);
                apiResults = apiResults.map(item => ({
                    id: item.id,
                    name: item.name.first + item.name.last


                }))
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


            </div>
        )
    }
}
