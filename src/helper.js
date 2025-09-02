export const formatDate= (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    
    return `${day}, ${month} ${year}`;
}


export const capitalise = (str) =>{
    if(!str) return 

    return str.charAt(0).toUpperCase() + str.slice(1)
}
