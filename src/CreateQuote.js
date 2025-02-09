import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function CreateQuote(props) {
    const { addQuote,setIsShowPopup } = props;
    const [content, setContent] = useState("");

    return (
        <div className="card" style={{ position: "fixed", left: "35%", width: "30%", backgroundColor: "rgb(57,90,90)",zIndex:"1"}}>
            <FontAwesomeIcon id="bar" onClick={()=>{setIsShowPopup(false)}} icon={faX} style={{ color: "#fff", marginLeft: "89%", marginTop: "2%" }} />
            <p style={{ color: "rgb(82,255,168)", fontSize: "28px" }}>Thêm lời khuyên</p>
            <form>
                <div className="input-add" style={{ width: "100%" }}>
                    <input type="text" onChange={(event) => { setContent(event.target.value) }} />
                </div>
                <button type="submit" onClick={() => { addQuote(content) }} className="btn-add">Thêm</button>
            </form>
        </div>
    )
}

export default CreateQuote;