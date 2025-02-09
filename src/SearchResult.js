import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";
function SearchResult(props){
    const {quoteList,delelteQuote} = props;
    const location = useLocation();
    const {keyword} = location.state;
    let isData = true;
    const filterQuotes = quoteList.filter((quote)=>{    
        return quote.content.toLowerCase().includes(keyword.toLowerCase());   
    })
    if(filterQuotes.length===0)
        isData =false;
    console.log(isData)
    return (
        <div className="list-quote">         
            { isData?(
                filterQuotes.map((quote,index) => (<div key={index}> <span>#{quote.id}</span>  <span>{quote.content} </span> <FontAwesomeIcon onClick={()=>{delelteQuote(quote.id)}}className="btn-del"icon={faX} style={{float:"right",margin:"1% 0"}}/> <hr/></div>  ))
            ):(
                <div> Không tìm thấy kết quả tìm kiếm </div>
            )
                
            }
                     
        </div>
    )
}

export default SearchResult;