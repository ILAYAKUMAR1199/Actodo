function Header(props){
    const name = props.name
    return(
        <div>
             <h1 className="text-3xl font-medium">Hello {name} !</h1>
             <p>I Help you manage your activities :)</p>

        </div>

    )
}
export default Header