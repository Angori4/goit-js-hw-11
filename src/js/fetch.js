import axios from "axios";

async function pixabayAPI(inputValue, page, perPage) {
 
  const response = await axios.get(`https://pixabay.com/api/?key=33044994-c2ced58164f7879a8375986b7=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
    return response.data;
}

export { pixabayAPI };