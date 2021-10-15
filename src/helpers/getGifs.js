
export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=gFvXbiD6hcGW63vrvaVGCnUYmllz6bHI`;
    const res = await fetch(url);
    const {data} = await res.json();
    console.log(data)
    const gifs = data.map(({id, title, images}) => {
        return {
            id,
            title,
            url: images.downsized_medium.url
        }
    })
    console.log(gifs)
    return gifs;
   
}