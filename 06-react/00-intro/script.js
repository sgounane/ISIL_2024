let stl={
    backgroundColor:"orange",
    border:"1px solid black",
    padding:"10px",
    margin:"10px"
}
let app=React.createElement("h1",{style:stl},"Bonjour tous!!!!");
const root=document.querySelector("#root")
ReactDOM.render(app,root)