import { useState } from 'react';
import { AddCategory,GifGrid } from './components';



export const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['valorant']);
    const onAddCategory = (newCategory)=>{
        // console.log(evento);
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    };
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory = { (valor)=>{onAddCategory(valor) }}/>
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            {
                categories.map( curr =>{
                    return (
                        <GifGrid key={ curr } category={curr}/>
                    )
                } )
            }
        </>
    );
};