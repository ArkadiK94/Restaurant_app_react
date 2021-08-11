export default class RestoService{
    async getListItem(){
        const res = await fetch('http://localhost:3000/menu');
        if(!res.ok){
            throw new Error (`couldn't fetch error: ${res.status}`);
        }
        const items = await res.json();
        return items;
    }
}