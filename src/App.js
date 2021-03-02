import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css"
import {BsFillTrashFill} from "react-icons/bs";
import DatePicker from 'react-datepicker'






class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

      input:[],
      list:"",
      strikethrough:[],
      isChecked:0,
      date: new Date(),
      datedata:[],
      currentDate :new Date().toDateString(),
      flag: false

    }
    this.handleChange = this.handleChange.bind(this);

}






handlecal=() =>{
  this.setState({input:[...this.state.input,this.state.list+".       Due date:" + this.state.date.toDateString()],list:""})
  this.setState({datedata:[...this.state.datedata,this.state.date]})



}
handleChange(date) {
  this.setState({
    date: date
  })

    this.state.input.map((itm ,i)=>
 {if (this.state.currentDate < this.state.date.toDateString() ) {
  this.state.input[i]= <label className="duedate">{itm}  Due Date is Passed</label>


    }})



}
delete = (index) => {
  this.setState({input:[...this.state.input.slice(0,index),...this.state.input.slice(index + 1)]})
}
onChange=date => {
  this.setState({date})

}
checkitem=(index) => {

  this.setState({isChecked: index})

  this.state.input.map((it ,i)=>
  {if (i === index) {
    this.state.input[index]= <a>{it}</a>

     }})

}

render(){

return(<div>
<h1>To Do List</h1>

<input type="text" spellcheck="false"className="inp-txt" value={this.state.list} onChange={(evt) => {this.setState({list:evt.target.value})}} placeholder="Add Task" />


<input type="submit" value="+" className="sub-but" onClick={() => {this.handlecal()}} /><br />
<h6 className="select">Select Due Date</h6>
<DatePicker placeholder="hi" className="date"  selected={ this.state.date} minDate={new Date()}   onChange={ this.handleChange }name="startDate"dateFormat="MM/dd/yyyy"/>

<div id="out1">
<ul>
{this.state.input.map((item,index) => <li className="listt"key={index}> <input id="cbox3" onChange={() => {this.checkitem(index)}} type="checkbox" />{item}<BsFillTrashFill className="icn"onClick={() =>{this.delete(index)}} /></li>)}

</ul>
</div>
</div>);
}


}
export default App;
