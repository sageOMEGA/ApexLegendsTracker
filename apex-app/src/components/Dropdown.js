import React, {useState} from 'react'

const Dropdown = (props) => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {  
    e.preventDefault();
    setContent(e.target.value);
    // console.log(e.target.value);
  }

  return(
    <div>
      <label>Platform</label>
      <br />
      <select onChange={handleChange}>
        <option value="origin">Origin</option>
        <option value="psn">PlayStation</option>
        <option value="xbl">XBox</option>
      </select>
      <br />
    </div>    
  )
}

export default Dropdown