import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function QuoteListFav(props){
    const {quoteList, toggle} = props;
   
    
    return (
        <div className="list-quote">         
            { quoteList?(
                quoteList.map((quote,index) => (<div key={index}> <span>#{quote.id}</span>  <span>{quote.content} </span><FontAwesomeIcon onClick={()=>{toggle(quote.id)}}className="btn-del"icon={faX} style={{float:"right",margin:"1% 0"}}/> <hr/></div>  ))
            ):(
                <div> Danh sách yêu thích trống </div>
            )
                
            }
                     
        </div>
    )
}

export default QuoteListFav;