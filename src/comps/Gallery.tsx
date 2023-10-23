import { useEffect } from "react";
import { useState } from "react";

export function Gallery(){


    const [pokeData, setPokeData] = useState(null);
    const [pokeUrl, setPokeUrl] = useState(null);

    useEffect(() => {
        const getPokeName = async () => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
                const data = await res.json()
                console.log(data.results);
                setPokeData(data);
            } catch (error) {
                console.error();
            }
        };

        getPokeName();
    }, [])
        
    return (
        <>
            {pokeData ? (
                <div className="poke-gallery">
                {pokeData.results.map((poke, index) => (
                    <div className="card">
                        No. {index}: {poke.name}
                    </div>
                ))}
                </div>
                
            ) : (
                <p>Rendering...</p>
            )}
        </>
    )
}