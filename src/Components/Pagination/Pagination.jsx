import React from "react";
import style from "./Pagination.module.css"

const Pagination = ({ cardsxPage, dogs, pagina, currentPage, setCurrentPage }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(dogs / cardsxPage); i++) {
        pageNumber.push(i)
    }


    const handlerLeft = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1)
    }

    const handlerRigth = () => {
        if (currentPage >= Math.ceil(dogs / cardsxPage)) return;
        setCurrentPage(currentPage + 1)
    }


    return (



        <div className={style.container}>
            <button onClick={handlerLeft} 
            
            style={{
                height: '22px',
                width: '40px',
                marginInlineEnd: '5px',
                marginInlineStart: '15px'
            }} > ← </button>
            {pageNumber.map(num => {
                return <button style={{
                    height: '35px',
                    width: '30px',
                    marginInline: '1.2px',
                    marginInlineEnd: '5px',
                    marginInlineStart: '5px',
                    background: num === currentPage ? 'gray' : 'white',
                    borderRadius: '10px'
                }}
                    key={num} onClick={() => pagina(num)}>{num}</button>
            })}
            <button onClick={handlerRigth}
            style={{
                height: '22px',
                width: '40px',
                marginInlineEnd: '15px',
                marginInlineStart: '5px'
            }} >→</button>
        </div>
    )
}

export default Pagination;