import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { FacebookIcon, FacebookShareButton } from 'react-share';


function Card(props) {
    const { quoteList, toggle } = props;

    const random = () => {
        const index = Math.floor(Math.random() * quoteList.length);
        return quoteList[index] ? quoteList[index] : { id: 0, content: "Chưa có lời khuyên", isLike: false };
    }
    const [quote, setQuote] = useState(() => {
        return random();
    });
    
    const display = () => {
        if (document.getElementById('display').style.display === "none")
            document.getElementById('display').style.display = "block";
        else
            document.getElementById('display').style.display = "none";
    }

    return (
        <div className="card">
            <FontAwesomeIcon onClick={() => { toggle(quote.id) }} className="font-awesome" icon={quote.isLike ? faHeartSolid : faHeart} style={{ color: "#63E6BE", }} />
            <p>ADVICE #{quote.id}</p>
            <p>"{quote.content}"</p>
            <img src="./pattern-divider-desktop.svg" alt="" />
            <span id="btn" > <img src="./icon-dice.svg" alt="" onClick={() => { setQuote(random) }} />
                
            </span>
            <FontAwesomeIcon id="fb"icon={faShareNodes} style={{ position: "absolute", top: "90%", left:"80%",color: "#63E6BE" }} onClick={display} />
                <FacebookShareButton style={{ position: "absolute", top:"75%", left:"85%",display: "none" }} id="display"
                    url={"http://localhost:3000/"}
                    hashtag={quote.content}
                >
                    <FacebookIcon round  size={38} id="display-share" />
                </FacebookShareButton>

        </div>
    )
}
 
export default Card;