import React, { useState, useEffect } from 'react';

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);
    useEffect(() => {
        const updateScrollCompletion=()=>{
            const currentProgress=window.scrollY;//Lấy vị trí hiện tại của thanh cuộc dọc tính từ đầu trang
            const scrollHeight=document.body.scrollHeight-window.innerHeight;// Chiều cao toàn bộ nội dung trang - Lấy chiều cao của cửa sổ trình duyệt
            if (scrollHeight)// Là phần còn lại có thể cuộc được của trang
            {
                setCompletion(Number(((currentProgress/scrollHeight)*100).toFixed(2))); // Tính phần trăm hoàn thành khi cuộn
            }
        };
        //event
        window.addEventListener('scroll', updateScrollCompletion);
        //clear event   
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    },[]);
    return completion;
}
export default useScrollProgress;