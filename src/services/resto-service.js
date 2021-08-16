export default class RestoService{
    url = 'http://localhost:3000/';
    async getListItem(){
        const res = await fetch(this.url+"menu");
        if(!res.ok){
            throw new Error (`couldn't fetch error: ${res.status}`);
        }
        const items = await res.json();
        return await items;
    }
    async postCartList(data){
        console.log(data);
        const res = await fetch(this.url+"cart",{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                'content-type':'application/json'
            }
        });
        if(!res.ok){
            throw new Error (`couldn't fetch error: ${res.status}`);
        }
        const items = await res.json();
        return await items;
    }
}