const handleFetch = (url) => {
    return fetch(url).then((res) => res.json())
}
export default handleFetch;