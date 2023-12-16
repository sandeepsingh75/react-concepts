import React from 'react';

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            name:'sandeep singh',
            email:'san@gmail.com',
            count:1
        }
    }
    updatestate()
    {
        this.setState({
            name:'sanjay'
        })
    }
    add(){
        this.setState({
            count: this.state.count+1,
        })
    }
    sub(){
        this.setState({
            count: this.state.count-1,
        })
    }
    render(){
        return(
            <div>
                <h3> name: {this.state.name} </h3>
                <h3> email: {this.state.email} </h3>
                <h3> count: {this.state.count} </h3>
                <button onClick={()=>this.updatestate()}> Update Name</button>
                <button onClick={()=> this.add()} > count increment </button>
                <button onClick={()=> this.sub()} > count decrement </button>
            </div>
        )
    }
}

export default Home;