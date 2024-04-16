import axios from 'axios'

const  searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=rOa-eiOw5uhWOfZ86AxXbNJOOd5z9Z_BfMURGRzVBcY'

    const response = await axios.get(url, {
        params: {
            query: 'cars'
        }
    })
    console.log(response)
}

export default searchImage