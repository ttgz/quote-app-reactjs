import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
 
import { useNavigate } from 'react-router-dom';
import './App.css'
function Search(props) {
    const {keyword,setKeyword} = props;
    const navigate = useNavigate();

    const search = (event) =>{
        setKeyword(event.target.value);
    }
    const submit = (e)=>{
        e.preventDefault();   
        navigate('/search',{state:{keyword}});
    }
    
    return (
        <div>
               
            <form className="search-bar" action="search">
                  
            <input type=""  id="name" placeholder="Tìm kiếm lời khuyên" value={keyword} onChange={search}/>
            <button type="submit" onClick={submit}> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
        </div>
        
    )
}

export default Search;