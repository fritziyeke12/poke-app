
export async function getPoke(){
    try{
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        return await res.json()
    }catch(error){
        console.error(error);
    }
}
