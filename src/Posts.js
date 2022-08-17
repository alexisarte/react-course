import { VscBug } from 'react-icons/vsc';

export const Posts = () => {
  return <button onClick={() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }}>
    <VscBug />
    Traer datos
  </button>
}