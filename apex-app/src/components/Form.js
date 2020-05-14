import React, {useState} from 'react'

const Form = (props) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <form>
      <label>GamerTag</label>
      <br />
      <input type="text" onChange={handleChange} />
      <button type="submit" onSubmit={handleSubmit}>SUBMIT</button>
    </form>
  )
}

export default Form