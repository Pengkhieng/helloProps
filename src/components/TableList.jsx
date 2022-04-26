import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import MyComponent from "./MyComponent";

export default class TableList extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Coca Cola",
          isSelect: false,
        },
        {
          id: 2,
          name: "Pepsi",
          isSelect: false,
        },
        {
          id: 3,
          name: "Sting",
          isSelect: false,
        },
        {
          id: 4,
          name: "Milk",
          isSelect: true,
        },
      ],
    };
  }
  handleClick = (A) => {
    var f = [...this.state.data];
    f[A].isSelect =! f[A].isSelect
    this.setState ({f})
  }
  render() {
      
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((a, i) => (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>
                  <Button onClick={()=>this.handleClick(i)} variant={a.isSelect ? "success" : "danger"} >{a.isSelect ? "Selected" : "UnSeleted"}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <MyComponent b={this.state.data} />
      </div>
    );
  }
}
