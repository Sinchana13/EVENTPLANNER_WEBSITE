import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
class Signup extends Component{
    constructor(){
        super()
        this.state={
            fullName:'',   //set to null initially
            username:'',
            email:'',
            Occassion:'',
            Age:'',
            password:'',
            Phone_Number:'',
            Gender:''
        }
        this.changeFullName=this.changeFullName.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changeUsername=this.changeUsername.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.changeOccassion=this.changeOccassion.bind(this)
        this.changeAge=this.changeAge.bind(this)
        this.changePhone_Number=this.changePhone_Number.bind(this)
        this.changeGender=this.changeGender.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({   //this is to change the value of the full name
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changeOccassion(event){
        this.setState({
            Occassion:event.target.value
        })
    }
    changeAge(event){
        this.setState({
            Age:event.target.value
        })
    }
    changePhone_Number(event){
        this.setState({
            Phone_Number:event.target.value
        })
    }
    changeGender(event){
        this.setState({
            Gender:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()  //prevents the form acting in default way i.e refreshing complete thing when submitted
        const registered={
            fullName:this.state.fullName,
            username:this.state.username,
            email:this.state.email,
            Occassion:this.state.Occassion,
            Age:this.state.Age,
            password:this.state.password,
            Phone_Number:this.state.Phone_Number,
            Gender:this.state.Gender


        }

        axios.post('http://localhost:4000/app/signup',registered)
            .then(response=>console.log(response.data))
        this.setState({
            fullName:'',
            username:'',
            email:'',
            Occassion:'',
            Age:'',
            password:'',
            Phone_Number:'',
            Gender:''

            
        })
        alert("U will recieve call within 24hrs");
    }

    render(){
        return(
            <div style={{ 
                backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxIw0IqT4kX75jQat10Hi1zZc2DG3d8kwFw&usqp=CAU")` 
              }}>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}  //it is a method called here
                            value={this.state.fullName}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Username'
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />
                            
                            <input type='text'
                            placeholder='Saptapadi/Birthday'
                            pattern='Saptapadi|Birthday'
                            onChange={this.changeOccassion}
                            value={this.state.Occassion}
                            className='form-control form-group'
                            />

                            <input type='number'
                            placeholder='Age'
                            onChange={this.changeAge}
                            value={this.state.Age}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='tel'
                            pattern="[0-9]{10}"
                            placeholder='Phone_Number'
                            onChange={this.changePhone_Number}
                            value={this.state.Phone_Number}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Female/Male'
                            pattern='Female|Male'
                            onChange={this.changeGender}
                            value={this.state.Gender}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Signup;