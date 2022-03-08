// imageService
import axios from 'axios'


export function getPicture() {
    const random_num = getRandomNum()
    const request = axios.get(` https://picsum.photos/id/${random_num}/info`)
    return request.then(response => response.data)
}
export function getSmallPicture(){
    // needs work
    const random_num = getRandomNum()
    const request = axios.get(` https://picsum.photos/id/${random_num}/200`)
    return request.then(response => response.data)
}

const getRandomNum = () => {
    return Math.floor(Math.random() * 100);    
}



// export default {
//   getPicture,
//   getSmallPicture,
// }
