import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import styled from "styled-components";

function Footer() {
  return (
    <div>
        <footer>
            <div class="footer-content">
                <h3>Cocktail  House</h3>
                <p>Make new and tasty drinks with confidence</p>
                <ul>
                    <Button>
                        <FaGithub />
                    </Button>
                    <Button>
                        <FaInstagram />
                    </Button>
                    <Button>
                        <FaLinkedin />
                    </Button>
                    <Button>
                        <FaTwitter />
                    </Button>
                </ul>
                <p>Copyright 2022 Nathanael Kim</p>
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

// .socials{
//     list-style: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .socials li{
//     margin: 0 10px;
//   }
  
//   .socials a{
//     text-decoration: none;
//     color: white;
//   }

export default Footer