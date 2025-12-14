export default async function fetchData<T>(url:string):Promise<T>{
    try{
        let data = await fetch(url)
        return data.json()
    }
    catch(err){
        if(err instanceof Error){
            throw err
        }
        throw new Error("Unknown error")
    }
}