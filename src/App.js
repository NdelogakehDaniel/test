import React from 'react';
import ReactDOM from "react-dom"
import './App.css';
import Header from "./Header"
import Footer from "./Footer"

let image="6.jpg"
let img=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
let Top=""
let Bot=""
let i=0
class App extends React.Component{
  constructor(){
    super()
    this.state={
      Toptext:"",
      Bottomtext: "",
      writting: false,
      j:0
    }
    this.Edit=this.Edit.bind(this)
    this.Edit1=this.Edit1.bind(this)
    this.handleclick=this.handleclick.bind(this)
    this.Reset=this.Reset.bind(this)
  }

Edit(text){
  this.setState({
    Toptext: text
  })
}

Edit1(text){
  this.setState({
    Bottomtext: text
  })
}
handleclick() {
 
const date=new Date()
const second=date.getMinutes()

if(this.state.Bottomtext==="" || this.state.Toptext===""){
  image="6.jpg"
}else{
  i=Math.ceil(Math.random()*img.length%6)
image=img[i]
this.setState({writting:true})
Top=this.state.Toptext
Bot=this.state.Bottomtext
  
  this.setState((prev)=>{
    return{
    j: prev.j + 1
    }
  })
}
}

Reset(){
  image="6.jpg"
  this.setState({
    Toptext:"",
    Bottomtext:""
  })
  Top=""
  Bot=""
  i=Math.ceil(Math.random()*img.length%6)
}
  render(){
    return(
      <center>
<div className="main">
    <b>Welcome To My Meme Generator</b><br />
    <Header Toptext={this.state.Toptext}  Bottomtext={this.state.Bottomtext} Edit={this.Edit} Edit1={this.Edit1} />
    <input type="button" value="Generate meme" onClick={this.handleclick}/>
  <input type="button" value="Reset To Default" onClick={this.Reset}/><br />
  <Footer image={image} Top={Top} Bot={Bot} />
    <b id="text">You have already Generated : {this.state.j} Memes</b>
</div>
</center>
    )
  }
}

export default App;
