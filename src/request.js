export class Request{
    constructor(url){
        this.url=url;

    }

    async Get(){
        const response=await fetch(this.url);
        const responsedata=await response.json();

        return responsedata;


    }

    async Post(data){
        const response=await fetch(this.url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });

        const responsedta=await response.json();
        return responsedta;
    }

    async Put(id,data){
        const response=await fetch(this.url+"/"+id,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });

        const responsedta=await response.json();
        return responsedta;
    }

    async Delete(id){
        const response=await fetch(this.url+"/"+id,{
            method: 'DELETE',
        });

        return "veri silindi";
    }
}