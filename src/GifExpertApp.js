import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    // const categories = ['One punch', 'Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState(['One punch'])

//    const handleAdd = () => {
//         setCategories(cats => [...cats, 'X men'])
//    }

    return (
        <div>
            <h2>Gif expert app</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid 
                    key={category}
                    category={category}
                    />
                ))}
            </ol>
        </div>
    )
    
}

export default GifExpertApp;