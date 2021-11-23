import React, { useEffect, useState } from 'react';

export default function useEffectPage() {

    const [resourceType, setResourceType] = useState('?category=libros_programacion&criteria=most_viewed');
    const [items, setItems] = useState([]);

    // UseEffect executes function every change of array arguments:
    // useEffect(function, array_arguments (optional, can be empty array))
    // If no second argument is passed, only execute once
    // Excecutes return content when component willUnmount or 
    // before argument change.
    useEffect(() => {
        fetch(`https://www.etnassoft.com/api/v1/get/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    return (
        <>
            <div className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center pt-20">
                <button
                    className="btn text-2xl"
                    onClick={() => setResourceType('?category=libros_programacion&criteria=most_viewed')}>
                    Mas vistos
                </button>
                <button
                    className="btn text-2xl"
                    onClick={() => setResourceType('?any_tags=[html,css,javascript]&order=newest')}>
                    Mas recientes
                </button>
            </div>
            <ul className="my-10">
                {items.map((item, index) => {
                    return <li key={index} className="my-10 bg-gray-400">Titulo : {item.title}, Autor: {item.author}</li>
                })}
            </ul>
        </>

    )

}