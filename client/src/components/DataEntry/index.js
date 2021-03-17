import React, { Component } from "react"
import { ListGroup } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ReportDataService from '../../services/report.service'

export default class DataEntry extends Component {
    constructor(props) {
        super(props)
        this.onChangeRoNumber = this.onChangeRoNumber.bind(this)
        this.onChangeCustomerName = this.onChangeCustomerName.bind(this)
        this.onChangeInvoiceDate = this.onChangeInvoiceDate.bind(this)
        this.onChangeTotalSale = this.onChangeTotalSale.bind(this)
        this.onChangeTotalRec = this.onChangeTotalRec.bind(this)
        this.onChangeAdvisor = this.onChangeAdvisor.bind(this)
        this.onChangeLeadType = this.onChangeLeadType.bind(this)
        this.submitBtn = this.submitBtn.bind(this)
        
        this.state = {
            id: null,
            roNumber: "",
            customerName: "",
            invoiceDate: "",
            totalSale: "",
            totalRec: "",
            advisor: "",
            leadType: ""

    }
    // console.log("state", state)
    }
    onChangeRoNumber(e) {
        this.setState({
            roNumber: e.target.value
        });
    }
    onChangeCustomerName(e) {
        this.setState({
            customerName: e.target.value
        });
    }
    onChangeInvoiceDate(e) {
        this.setState({
            invoiceDate: e.target.value
        });
    }
    onChangeTotalSale(e) {
        this.setState({
            totalSale: e.target.value
        });
    }
    onChangeTotalRec(e) {
        this.setState({
            totalRec: e.target.value
        });
    }
    onChangeAdvisor(e) {
        this.setState({
            advisor: e.target.value
        });
    }
    onChangeLeadType(e) {
        this.setState({
            leadType: e.target.value
        });
    }
    submitBtn() {
        let data = {
            roNumber: this.state.roNumber,
            customerName: this.state.customerName,
            invoiceDate: this.state.invoiceDate,
            totalSale: this.state.totalSale,
            totalRec: this.state.totalRec,
            advisor: this.state.advisor,
            leadType: this.state.leadType
        }

        console.log("data sent to post", data)
        ReportDataService.create(data) 
          .then(response => {
              this.setState({
                roNumber: response.data.roNumber,
                customerName: response.data.customerName,
                invoiceDate: response.data.invoiceDate,
                totalSale: response.data.totalSale,
                totalRec: response.data.totalRec,
                advisor: response.data.advisor,
                leadType: response.data.leadType
              })
              console.log(response.data)
          })
          .catch(err => console.log(err))
    }

    
    render() {
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
                        <ListGroup.Item><input type="text" style={{ width: "100%", border: "0" }} value={this.state.roNumber} onChange={this.onChangeRoNumber} name="ro-number"></input></ListGroup.Item>
                        <Card.Header>
                            Customer Name
                       </Card.Header>
                        <ListGroup.Item><input type="text" style={{ width: "100%", border: "0" }} value={this.state.customerName} onChange={this.onChangeCustomerName} name="customer-name"></input></ListGroup.Item>
                        <Card.Header>
                            Invoice Date
                       </Card.Header>
                        <ListGroup.Item><input type="text" style={{ width: "100%", border: "0" }} value={this.state.invoiceDate} onChange={this.onChangeInvoiceDate} name="invoice-date"></input></ListGroup.Item>
                        <Card.Header>
                            Total Sale Amount
                       </Card.Header>
                        <ListGroup.Item><input type="text" style={{ width: "100%", border: "0" }} value={this.state.totalSale} onChange={this.onChangeTotalSale} name="total-sale"></input></ListGroup.Item>
                        <Card.Header>
                            Total Recommended Amount
                       </Card.Header>
                        <ListGroup.Item><input type="text" style={{ width: "100%", border: "0" }} value={this.state.totalRec} onChange={this.onChangeTotalRec} name="total-rec"></input></ListGroup.Item>
                        <Card.Header>
                            Service Advisor
                       </Card.Header>
                        <ListGroup.Item>
                            <select name="advisor" style={{ width: "100%", border: "0" }} value={this.state.advisor} onChange={this.onChangeAdvisor} name="advisor">
                                <option value="Seth">Seth</option>
                                <option value="Tad">Tad</option>
                                <option value="Christina">Christina</option>
                            </select>
                        </ListGroup.Item>
                        <Card.Header>
                            Repair Type
                       </Card.Header>
                        <ListGroup.Item>
                            <select name="lead" style={{ width: "100%", border: "0" }} value={this.state.leadType} onChange={this.onChangeLeadType} name="lead-type">
                                <option value="technician">Technician</option>
                                <option value="general-service">General Service</option>
                            </select>
                        </ListGroup.Item>
                    </ListGroup>
                    <br />
                    <Button variant="primary" onClick={this.submitBtn}>Submit</Button>
                    <Button variant="danger">Cancel</Button>
                </Card>
            </div>
        )
    }
}
