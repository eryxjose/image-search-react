import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https:/api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zmGojx3b6tOahOHtwvMfKEuP519lNkoexe6lUpxk_KA'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;

