import menus from "../data/Menu-detail.json";

export function getMenuList (){
    return menus;
}

export function getMenuDetail(id){
    return menus.filter(menu => menu.id === parseInt(id))[1];
}