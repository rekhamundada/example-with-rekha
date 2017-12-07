import React from 'react'
import ReactDOM from 'react-dom'
class Counter extends React.Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }
  render (){
    return (
      <div>
        <h3>Counter here</h3>
      </div>
    )
  }
}

const SecondMessage = (props) => {
  console.log('props on second msg',props)
  return (
    <div>
      <h1>This is other message</h1>
      <p>{props.otherMessage}</p>
      <h1> This is my favorite puppy</h1>
      <p>{props.favoritePuppy}</p>
    </div>
  )
}

const Main = function(props){
console.log('1st msg',props)
  return (
    <div>
      <h1>{props.message}</h1>
      <SecondMessage  favoritePuppy={"cody"}
      otherMessage={props.otherMessage}/>
      <Counter/>

    </div>
  )
}

ReactDOM.render(
  <Main message={'Hello props!!!!!!!'}
   otherMessage ={'Hello we are props'}/>,
  document.getElementById('app')
)
