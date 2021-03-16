import React from "react"
import { ListGroup } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function DataEntry() {

    return (
        <div className="card">
            <Card style={{ width: "60%" }} className="text-center">
                <Card.Header as="h1">
                    Enter Information Below:
               </Card.Header>
                <ListGroup>
                    <Card.Header>
                        RO Number
                   </Card.Header>
                    <ListGroup.Item><input type="text" style={{ width: "100%", border: "0" }}></input></ListGroup.Item>
                    <Card.Header>
                        Customer Name
                   </Card.Header>
                    <ListGroup.Item><input type="text" style={{ width: "100%", border: "0" }}></input></ListGroup.Item>
                    <Card.Header>
                        Invoice Date
                   </Card.Header>
                    <ListGroup.Item><input type="text" style={{ width: "100%", border: "0" }}></input></ListGroup.Item>
                    <Card.Header>
                        Total Sale Amount
                   </Card.Header>
                    <ListGroup.Item><input type="text" style={{ width: "100%", border: "0" }}></input></ListGroup.Item>
                    <Card.Header>
                        Total Recommended Amount
                   </Card.Header>
                    <ListGroup.Item><input type="text" style={{ width: "100%", border: "0" }}></input></ListGroup.Item>
                    <Card.Header>
                        Service Advisor
                   </Card.Header>
                    <ListGroup.Item>
                        <select name="advisor" style={{ width: "100%", border: "0" }}>
                            <option value="Seth">Seth</option>
                            <option value="Tad">Tad</option>
                            <option value="Christina">Christina</option>
                        </select>
                    </ListGroup.Item>
                    <Card.Header>
                        Repair Type
                   </Card.Header>
                    <ListGroup.Item>
                        <select name="lead" style={{ width: "100%", border: "0" }}>
                            <option value="technician">Technician</option>
                            <option value="general-service">General Service</option>
                        </select>
                    </ListGroup.Item> 
                </ListGroup>
                <br />
                <Button variant="primary">Submit</Button>
                <Button variant="danger">Cancel</Button>
            </Card>
        </div>
    )
}

export default DataEntry