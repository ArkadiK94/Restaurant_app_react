export default class RestoService{
    url = 'http://localhost:3000/menu';
    async getListItem(){
        const res = await fetch(this.url);
        if(!res.ok){
            throw new Error (`couldn't fetch error: ${res.status}`);
        }
        const items = await res.json();
        return await items;
    }
}