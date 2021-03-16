import React from "react"
import Table from 'react-bootstrap/Table'

function Reports() {

    return (
        <Table striped bordered hover style={{width: "80%"}} className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>RO Number</th>
                    <th>Customer Name</th>
                    <th>Invoice Date</th>
                    <th>Total Sale Amount</th>
                    <th>Total Recommended Amount</th>
                    <th>Closing Ratio</th>
                    <th>Service Advisor</th>
                    <th>Lead Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>40000</td>
                    <td>Test User</td>
                    <td>2/23/2021</td>
                    <td>$5,000</td>
                    <td>$10,000</td>
                    <td>50%</td>
                    <td>Seth</td>
                    <td>Technician</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>40000</td>
                    <td>New User</td>
                    <td>2/23/2021</td>
                    <td>$1,000</td>
                    <td>$2,000</td>
                    <td>50%</td>
                    <td>Tad</td>
                    <td>GS</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>40000</td>
                    <td>Another User</td>
                    <td>2/23/2021</td>
                    <td>$2,500</td>
                    <td>$5,000</td>
                    <td>50%</td>
                    <td>Christina</td>
                    <td>Technician</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Reports