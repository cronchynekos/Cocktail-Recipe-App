import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import styled from "styled-components";

function Footer() {
  return (
    <div>
        <footer>
            <div class="footer-content">
                <h3>Cocktail  House</h3>
                <p>Make new and tasty drinks with confidence!</p>
                <ul>
            <a href="https://github.com/cronchynekos" target="_blank" rel="noreferrer">
                <Button>
                <FaGithub/>
                </Button>
            </a>
            <a href="https://www.instagram.com/nathankimy/?hl=en" target="_blank" rel="noreferrer">
                <Button>
                    <FaInstagram />
                </Button>
            </a>
            <a href="https://www.linkedin.com/in/nathanael-kim-800448170/" target="_blank" rel="noreferrer">
                <Button>
                    <FaLinkedin />
                </Button>
            </a>
                </ul>
                <p>© Copyright 2022 Nathanael Kim</p>
            </div>
        </footer>
    </div>
  )
}

const Button = styled.button`
    color: white;
    background: none;
    border: none;
    text-decoration: none;
    margin: 0 10px;
    &:hover {
    filter: brightness(1.2);
    }
    svg{
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        margin-top: 1.5rem;
    }
`

export default Footer