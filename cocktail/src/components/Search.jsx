import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';



function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    };

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
        <input 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input}/>
        </div>
    </FormStyle>
  )
}


const FormStyle = styled.form`
    margin-left: auto;
    margin-right: 0;
    div{
        position: relative;
        width: 100%;
        transform: translate(0px);
    }
    input{
        border: none;
        background: white;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        color: black;
        padding: .50rem 3rem;
        outline: none;
        width: 100%;
        outline: .3px solid black;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: black;
        font-size: 1rem;
    }
`







export default Search