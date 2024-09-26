import {useEffect, useState, useReducer, useMemo} from "react";

const ItemList = () => {

        const [quantity, setQuantity] = useState(0);
        const products = [
            { name: "아이폰 16", category: "전자제품" },
            { name: "맥북 프로", category: "전자제품" },
            { name: "에어팟", category: "전자제품" },
            { name: "삼성 갤럭시", category: "전자제품" },
            { name: "나이키 운동화", category: "의류" },
            { name: "아디다스 티셔츠", category: "의류" },
            { name: "믹서기", category: "가전제품" },
            { name: "전자레인지", category: "가전제품" },
          ];

    const onClickHandler = () => {
        const changeItems = [products.category.concat(
           "전자제품"
        )];
    };

    const showList = useMemo(()=>{

        return products.map(list => {
            return category("전자제품");
         })
    },[products])


    return (        
        <>
        <h2>상품 목록</h2>
        <br/>
        <button>모든 카테고리</button>
        <button onClick={onClickHandler}>전자제품</button>
        <button>의류</button>
        <button>가전제품</button>

        <div>   

        <h2> 총 N개의 상품</h2>
        {showList.map((list, index) => {
            return(<li key={index}>{list}</li>)

        })}

        </div>


        </>
    );
};

export default ItemList;