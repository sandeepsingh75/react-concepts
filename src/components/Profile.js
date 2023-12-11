const Profile =()=>{
    const red=()=>{
        alert("click me text clicked")
    }
    return(
        <>
        <h1>Create Fat arrow function</h1>
        <h2 onClick={red}> click me </h2>
        </>
    )
}

export default Profile;