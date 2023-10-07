import React , {Component} from "react";

import './formcompo.css';
import Heading from "./heading";
 
class FormCompo extends Component{
    dis=true;
    constructor(){
        super();
        this.state = {
            name : '',
            dept : '',
            rating : '',
            StuData : []
        }
    }
    handleChange = (event) => {
        console.log(event);
        this.setState({[event.target.name] : event.target.value})
    }
    handleSubmit = () => {
        console.log(this.state);
        const tempObj = {
            name : this.state.name,
            dept : this.state.dept,
            rating : this.state.rating
        }
            this.state.StuData.push(tempObj)
            this.setState({StuData : this.state.StuData})
            
        }
    render(){
        return(
            <>
            <center>
                <Heading />
            <label>Name :</label>
            <input type="text" name="name"  onChange={this.handleChange}></input>
            <br></br>
            <label>Department :</label>
            <input type="text" name="dept"  onChange={this.handleChange}></input>
            <br></br>
            <label>Rating :</label>
            <input type="number" name="rating"  onChange={this.handleChange}></input>
            <br></br>
            <input type="button" onClick={this.handleSubmit} value='submit' style={{backgroundColor:'skyblue' ,fontSize:'28px', marginTop:'40px'}}/>
            </center>
            
            <div className="container">
                {this.state.StuData.map((item, index) => {
                    console.log(item);
                    return(
                        <div key={index} className="content">
                            <p >Name: {item.name} | Department: {item.dept} | Rating: {item.rating}</p>
                        </div>
                    )
                })}
            </div>
            </>
        )
    }
}
export default FormCompo