import React from 'react'

const Component1 = (props) => {
function call_parent()
{
  console.log(getMethods(props))
  props.handleAdd()
}
function getMethods(obj)
{
    var res = [];
    for(var m in obj) {
        if(typeof obj[m] == "function") {
            res.push(m)
        }
    }
    return res;
}

  return (
  <component1>
    <button onClick={call_parent}>Add </button>
  </component1>
  )
}

export default Component1
