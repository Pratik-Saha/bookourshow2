import React from 'react'
import axios from 'axios'

class ShowEmployee extends React.Component{
    constructor(){
        super()
        this.state = {
            department: '',
            empId: '',
            empIds: [],
            found: false,
            employee: {}
        }
    }

    handleChange = (e) => {
        if(e.target.name == "department"){
            if(e.target.value == "HR"){
                this.setState({
                    [e.target.name]: e.target.value,
                    empIds: [].concat([1,2,3,4,5])
                })
            }
            else{
                this.setState({
                    [e.target.name]: e.target.value,
                    empIds: [].concat([6,7,8,9,10])
                })
            }
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        const empId = this.state.empId
        axios.get(`https://reqres.in/api/users/${empId}`)
            .then((response) => {
                const employee = response.data
                console.log(employee.data.avatar)
                this.setState((prevState) => {
                    return{
                        found: true,
                        employee: employee.data
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleClear = (e) => {
        e.preventDefault()
        this.setState({
            department: '',
            empId: '',
            empIds: [],
            found: false,
            employee: {}
        })
    }
    render(){
        return(
            <div>
                <form>
                    <label htmlFor="department">Department</label>
                    <select id="department" value={this.state.department} name="department" onChange={this.handleChange}>
                    <option value="">------select------</option>
                    <option value="HR">HR</option>
                    <option value="Engineers">Engineers</option>
                    </select> <br /><br />

                    <label htmlFor="empId">Employee ID</label>
                    <select id="empId" value={this.state.empId} name="empId" onChange={this.handleChange}>
                        <option value="">------select------</option>
                        {
                            this.state.empIds.map((empId) => {
                                return  <option key={empId} value={empId}>{empId}</option>
                            })
                        }
                    </select> <br /><br />

                    <button onClick = {this.handleClick}>Get Details</button>    <button onClick={this.handleClear}>Clear</button>
                </form> <br />
                {
                    this.state.found && (
                        <div>
                            <img src= {this.state.employee.avatar} /> <br />
                            <p>Id: {this.state.employee.id} </p>
                            <p>Name: {this.state.employee.first_name + ' ' + this.state.employee.last_name} </p>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ShowEmployee
