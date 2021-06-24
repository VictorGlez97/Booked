import React, { useEffect, useRef, useState } from 'react'

export default function useFetch( url, request ) {
    
    const isMounted = useRef(true)

    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }

    }, []);

    useEffect(() => {
        
        setstate({ data: null, loading: true, error: null });

        fetch( url, {
            method: 'POST',
            body: request,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( resp => resp.json() )
        .then( data => {

            if ( isMounted.current ){
                setstate({
                    loading: false,
                    error: null,
                    data
                });
            } else {
                console.log('NO ESTA MONTADO')
            }        

        })
        .catch( () => {

            setstate({
                data: null,
                loading: false,
                error: 'No se pudo cargar la info',
            })

        })

    }, [ url ]);

    return state;

}