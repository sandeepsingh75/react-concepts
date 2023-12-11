import React from "react";

export default class Profile1 extends React.Component
{
    render()
    {
        return(
            <div>
                <h1> Hello props </h1>
                <h2> name:{this.props.name} </h2>
                <h2> marks:{this.props.mark} </h2>
            </div>
        )
    }
}