
import './App.css';
import Search from './Search';
import Nav from './Nav';
import { useState, useEffect } from 'react';

function App() {
  //function lưu danh sách lời khuyên vào local storage
  function saveToLocalStorage() {
    //danh sách lời khuyên để lưu vào local storage
    const data = [
      { id: 1, content: 'Hành động sẽ tốt hơn lời nói', isLike: true },
      { id: 2, content: 'Đừng ngại nói lời cảm ơn', isLike: true },
      { id: 3, content: 'Đừng bao giờ đổ lỗi cho ba mẹ, bạn phải tự chịu trách nhiệm hoàn toàn cho cuộc đời mình', isLike: true },
      { id: 4, content: 'Sống thì phải có kế hoạch, mục tiêu rõ ràng. Đừng ậm ờ thế nào cũng được', isLike: false },
      { id: 5, content: 'Nhất định phải có kỷ luật bản thân', isLike: false },
      { id: 6, content: 'Hãy bung hết sức mình mà làm, không thành công thì cũng thành nhân', isLike: false },
      { id: 7, content: 'Biết lắng nghe là biểu hiện cua rsự tôn trọng và học hỏi', isLike: false },
      { id: 8, content: 'Kiên nhẫn là dấu hiệu của sự thông minh và trưởng thành', isLike: false },
      { id: 9, content: 'Luôn học hỏi và phát triển bản thân không ngừng nghỉ', isLike: false },
      { id: 10, content: 'Trí tuệ không chỉ là kiến thức mà  còn là khả năng ứng dụng kiến thức đó một cách hiệu quả', isLike: true },
      { id: 11, content: 'Hành động của bạn nói lên nhiều điều hơn lời nói của bạn', isLike: true },
      { id: 12, content: 'Học cách nói những gì cần nói. Suy nghĩ tất cả những gì bạn nói nhưng đừng nói tất cả những gì bạn nghĩ', isLike: false }
    ]
    localStorage.setItem("quote-list", JSON.stringify(data));
  }


  const [quoteList, setQuoteList] = useState(() => {
    let data = JSON.parse(localStorage.getItem("quote-list"));
    if (data === null || data.length===0) {
      saveToLocalStorage();
      data = JSON.parse(localStorage.getItem("quote-list"));
    }
    return data ? data : [];
  })



  useEffect(() => {
    localStorage.setItem("quote-list", JSON.stringify(quoteList));
  }, [quoteList]);

  const [keyword, setKeyword] = useState('');

  return (
    <div className="container">
      <Search keyword={keyword} setKeyword={setKeyword} />
      <Nav quoteList={quoteList} setQuoteList={setQuoteList} keyword={keyword} />
    </div>
  );
}

export default App;
