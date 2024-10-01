const Oderstatus = ( {cart }) => {

    return(
        <>
            <h1>주문 확인</h1>
            <div>
                {cart.length > 0 ? (cart.map(menu => (
                    <div key={menu.id}>
                       <li>{menu.name} - \{menu.price}</li>
                    </div>
                ))
            ) : (
            <span>선택한 커피가 없습니다.</span>
                )}
            </div>
        </>
    );
};

export default Oderstatus;