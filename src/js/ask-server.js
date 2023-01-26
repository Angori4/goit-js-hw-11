import axios from "axios";
import Notiflix from "notiflix";

const input = document.querySelector('input');
const btnLoadMore = document.querySelector('.load-more');

export default class NewAskServer {
  constructor(){
    this.page = 1;
    this.name = " ";
  }

  async fetchArticles() {
    this.BASEURL = 'https://pixabay.com/api/';
    this.name = input.value.trim();
    this.per_page = 40;
    this.numberCard = this.per_page;

  if (this.name.length === 0) {
    return;
  }
  try {
    const response = await axios.get(`${this.BASEURL}?key=33044994-c2ced58164f7879a8375986b7=${this.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.per_page}&page=${this.page}`);
    const totalHits = await response.data.totalHits;
    console.log(totalHits);
    this.incrementPage();
    if (this.numberCard > totalHits) {
      Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
      btnLoadMore.classList.replace('is-visible', 'is-hidden');

  }
    return response;
  } catch (error) {
    console.log(error);
  }
  }

  incrementPage() {
    this.page += 1;
  }
  
  resetPage() {
    this.page = 1;
  }

}