
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState, Profiler } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { Routes, Route, Link } from 'react-router-dom';
import QuoteList from './QuoteList';
import QuoteListFav from './QuoteListFav';
import Card from './Card';
import CreateQuote from './CreateQuote';
import SearchResult from './SearchResult';

function Nav(props) {
    const { quoteList, setQuoteList } = props;

    const toggle = (id) => {
        let temp = [...quoteList];
        for (let i = 0; i < quoteList.length; i = i + 1) {
            if (temp[i].id === id) {
                temp[i].isLike = !temp[i].isLike;
                setQuoteList(temp);
                break;
            }
        }

    }
    const deleteQuote = (id) => {
        setQuoteList(() => {
            const list = quoteList.filter(quote => quote.id !== id)
            return list;
        })
    }
    const quoteFavoriteList = () => {
        const list = quoteList.filter(e => e.isLike === true);
        return list;
    }
    const listQuoteFav = quoteFavoriteList();

    const addQuote = (content) => {
        if (content === "")
            return;
        if (quoteList.length === 0)
            setQuoteList([...quoteList, { id: 1, content: content, isLike: false }]);
        setQuoteList([...quoteList, { id: quoteList[quoteList.length - 1].id + 1, content: content, isLike: false }]);
    }

    const [isShowPopup, setIsShowPopup] = useState(false)
    const [isShow, setIsShow] = useState(false);
    return (

        <div className="container">
            {
                isShowPopup && (
                    <CreateQuote addQuote={addQuote} setIsShowPopup={setIsShowPopup} />
                )
            }

            <div className="sidebar" style={{ zIndex: "1" }}>
                <FontAwesomeIcon onClick={() => { setIsShow(!isShow) }} icon={faBars} id="bar" style={{ color: "#ffffff", fontSize: "29px" }} />
                {
                    isShow && (
                        <ul className="sub-sidebar">
                            <li>
                                <Link to="/" onClick={() => { setIsShow(!isShow) }}> quote </Link>
                            </li>
                            <li>
                                <Link to="/list" onClick={() => { setIsShow(!isShow) }}>Xem danh sách lời khuyên </Link>
                            </li>
                            <li>
                                <Link to="/list-favorite" onClick={() => { setIsShow(!isShow) }}>Xem danh sách yêu thích </Link>
                            </li>
                            <li onClick={() => { setIsShowPopup(!isShowPopup); setIsShow(!isShow) }}>
                                Thêm lời khuyên
                            </li>
                        </ul>
                    )
                }
            </div>
            <Routes>
                <Route path="/" element={<Card quoteList={quoteList} toggle={toggle} />} />
                <Route path="/list" element={<Profiler id="quoteList"onRender={(id, phase, actualTime, baseTime, startTime, commitTime) => {
                    console.log(`render ${id} ${phase}: ${actualTime}ms`);}}> <QuoteList quoteList={quoteList} delelteQuote={deleteQuote} /> </Profiler>} />
            <Route path="/list-favorite" element={<QuoteListFav quoteList={listQuoteFav} toggle={toggle} />} />
            <Route path="/create-new-quote" element={<CreateQuote addQuote={addQuote} />} />
            <Route path="/search" element={<SearchResult quoteList={quoteList} />} />
        </Routes>
        </div >

    )
}

export default Nav;