import axios from 'axios'

const  searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=rOa-eiOw5uhWOfZ86AxXbNJOOd5z9Z_BfMURGRzVBcY'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })
    console.log(term)
    console.log(response)

    return response.data.results
}
export default searchImage