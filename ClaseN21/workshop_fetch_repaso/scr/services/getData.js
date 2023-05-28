/// Conexion de la API

const baseURL = 'https://rickandmortyapi.com/api';


/**
* Funcion asincrona que realiza una peticion a la API con el fin de traer la data de un personaje en particular
@param id -numero de character que necesitamos

*/

const getCharacter = async (id) =>{
    const rest = await fetch(`${baseURL}/character/${id}`);
    const data = await res.json();

    return data;
}


/** 
 *  Funcion asincrona q realiza una peticion a la API con la informacion de los personajes solicitida


@param page 


*/

const getCharacters = async (page) => {
    const res = await fetch(`${baseURL}/character/?page=${page}`);
    const data = await res.json();

    return data;
}

export { getCharacters, getCharacter};
