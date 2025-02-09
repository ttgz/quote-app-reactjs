import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
function QuoteList(props){
    const {quoteList, delelteQuote} = props;
   
    function fibonaci(n){
        if(n<=1)
            return n;
        return fibonaci(n-1) + fibonaci(n-2);
    }

    useMemo(()=>{
        const result = fibonaci(25);
        return result;
    },[fibonaci])
    
    return (
        <div className="list-quote">         
            { quoteList?(
                quoteList.map((quote,index) => (<div key={index}> <span>#{quote.id}</span>  <span>{quote.content} </span> <FontAwesomeIcon onClick={()=>{delelteQuote(quote.id)}}className="btn-del"icon={faX} style={{float:"right",margin:"1% 0"}}/> <hr/></div>  ))
            ):(
                <div> Danh sách trống </div>
            )
                
            }
                     
        </div>
    )
}

export default QuoteList;