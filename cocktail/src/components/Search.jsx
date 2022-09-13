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
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.2rem;
        color: white;
        padding: 1rem 2rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 20%;
        transition: width .5s ease-in-out;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
        font-size: 1rem;
    }
    input: hover {
        width: 100%;
    }
`







export default Search