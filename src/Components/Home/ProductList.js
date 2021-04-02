import React, { Component } from "react";
import { Table, Button } from 'antd';
import axios from 'axios';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Chinese Score',
        dataIndex: 'chinese',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: 'Math Score',
        dataIndex: 'math',
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: 'English Score',
        dataIndex: 'english',
        sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
        },
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
    },
    {
        key: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
    },
    {
        key: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
    },
    {
        key: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
    },
];

class ProductList extends Component {

    state = {
        persons: []
    }


    onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {



        return (
            <>
                <Button>Submit</Button>


                <Table columns={columns} dataSource={data} onChange={this.onChange} />

                <table border="1">
                    <thead>
                        <tr>
                            <td>d</td>
                            <td>e</td>
                            <td>f</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.state.persons.map(person => <td>{person.name}</td>)}
                        </tr>
                    </tbody>
                </table>


                
            </>
        )
    }
}


export default ProductList;