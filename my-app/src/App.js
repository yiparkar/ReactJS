import React, { Component } from 'react';
import './index.css';
import Person from './Person/Person';
class App extends Component
{
    state = {persons: [
        {name:"Yogesh" , age : "34"},
        {name:"Kumar" , age : "35"},
        {name:"Siv" , age : "30"}
    ]}
    switchHandler = (newName) =>
    {
        //console.log('was clicked!');
        this.setState({
            persons: [
                {name:"Yogesh Iparkar" , age : "34"},
                {name: newName , age : "35"},
                {name:"Siv" , age : "10"}
            ]
        })
    }
    nameChangeHandler = (event) =>
    {
        this.setState({
            persons: [
                {name:"Yogesh Iparkar" , age : "34"},
                {name: event.target.value , age : "35"},
                {name:"Siv" , age : "10"}
            ]
        })
    }
    render(){
    return(
        <div >
            <h1>React App</h1>
            <button onClick={this.switchHandler.bind(this,'Kumar')}>Switch name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                click={this.switchHandler.bind(this,'Praveen')}
                changehandler = {this.nameChangeHandler}
            />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies : Racing</Person>
        </div>
    );
}
}
export default App;