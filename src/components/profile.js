import React, {useState, useRef} from "react"
import JoditEditor from 'jodit-react'

const Profile = () => {
const editor = useRef(null)
const [content, setContent] = useState('')
const [title, setTitle] = useState('')
const [description,setDescription] = useState('')
const [thumbnail, setThumbnail] = useState('')

const config = {
  readonly: false // all options from https://xdsoft.net/jodit/doc/
}

const handleSubmit = async () => {
  const obj = {
    content: content,
    title: title,
    description: description,
    thumbnail: thumbnail};
  const json = await JSON.stringify(obj);
  try {
  await fetch('http://localhost:4000/blog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: json
  })} catch (e){
    console.log(e);
  }
  console.log('done');
}

return (
  <div className="container">
    <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}}>
      <div className='row d-flex flex-column p-4'>
        <label for='title'>Tytuł</label>
        <input type='text' id='title' name='title' value={title} onChange={e => {setTitle(e.target.value)}}></input>
        <label for='thumbnail'>Miniaturka(link URL)</label>
        <input type='textarea' id='thumbnail' name='thumbnail' value={thumbnail} onChange={e => {setThumbnail(e.target.value)}}></input>
      </div>
      <div className='row d-flex flex-column p-4'>
        <label for='description'>Opis</label>
        <textarea name='description' value={description} onChange={e => {setDescription(e.target.value)}}></textarea>
      </div>
      {typeof window !=='undefined' ? <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={newContent => {setContent(newContent); console.log(newContent)}}
        onChange={newContent => {}}
        /> : <div></div>}
    <br></br>
    <br></br>
    <br></br>
    <div className="row d-flex flex-column align-items-end">
        <button className="p-2 border-secondary rounded bg-white text-primary" type="submit">SUBMIT</button>
    </div>
    </form>
  </div>
      );
}
export default Profile