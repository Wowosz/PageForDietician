import React, {useState, useRef} from "react"
import JoditEditor from 'jodit-react'

const Profile = () => {
const editor = useRef(null)
const [content, setContent] = useState('')

const config = {
  readonly: false // all options from https://xdsoft.net/jodit/doc/
}

const handleSubmit = async (title, description, 
  thumbnail) => {
  fetch('localhost:7000/blog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {content: content, title: title }
  })
}

return (
  <div className="container">
    <form>
      <div className='row d-flex flex-column p-4'>
        <label for='title'>Tytuł</label>
        <input type='text' id='title' name='title'></input>
        <label for='thumbnail'>Miniaturka</label>
        <input type='textarea' id='thumbnail' name='thumbnail'></input>
      </div>
      <div className='row d-flex flex-column p-4'>
        <label for='description'>Opis</label>
        <textarea name='description'></textarea>
      </div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={newContent => {setContent(newContent); console.log(newContent)}}
        onChange={newContent => {}}
        />
    </form>
    <br></br>
    <br></br>
    <br></br>
    <div className="row">

    </div>
  </div>
      );
}
export default Profile