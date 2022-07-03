export const getGifs = async( category ) =>{
    const api_key = "W9OnF7XqJGVH8jY1ka6nAMzGXapKQzUm";
    const limite = 12;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${category}&limit=${limite}`;

    const respuesta = await fetch(url);

    const {data} = await respuesta.json();

    const data_gifs = data.map( curr =>{
      if(Object.keys(curr).length !== 0){
          return {
              id: curr.id,
              title: curr.title || `${category} gif`,
              url: curr.images.downsized_medium.url
          };
      }
        
    });

    return data_gifs;
};