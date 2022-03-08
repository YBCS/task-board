// imageService
import axios from 'axios'


const getPicture = () => {
    const random_num = getRandomNum()
    const request = axios.get(` https://picsum.photos/id/${random_num}/info`)
    return request.then(response => response.data)
}
const getSmallPicture = () => {
    // needs work
    const random_num = getRandomNum()
    const request = axios.get(` https://picsum.photos/id/${random_num}/200`)
    return request.then(response => response.data)
}

const getRandomNum = () => {
    return Math.floor(Math.random() * 100);    
}



export default {
  getPicture,
  getSmallPicture,
}
