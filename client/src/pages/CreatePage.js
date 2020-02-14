import React, {useState, useContext} from 'react';
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';
import {useHistory} from 'react-router-dom';

const CreatePage = () => {
  const auth = useContext(AuthContext);
  const {request} = useHttp()
  const [link, setLink] = useState();
  const history = useHistory();
  const pressHandler = async (e) => {
    if(e.key === 'Enter') {
      try {
        const data =await request('/api/link/generate', 'POST', {from:link}, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/detail/${data.link._id}`)
      } catch (e) {

      }
    }
  }
  return (
    <div className="row">
      <div className="col s8 offset-s2">
        <div className="input-field">
          <input
            placeholder="Вставьте ссылку"
            id="link"
            type="text"
            className="primary-input"
            name="links"
            value={link}
            onChange={(e)=>setLink(e.target.value)}
            onKeyPress={pressHandler}
            />
        </div>
      </div>
    </div>
  )
}

export default CreatePage;
