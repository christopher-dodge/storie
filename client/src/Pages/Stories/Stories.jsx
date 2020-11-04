import React, {useState, useEffect} from 'react';
import API from '../../utils/API';
import StorieCard from '../../Components/StorieCard';

export default function Stories() {
  useEffect(() => {
    getAllStories();
  }, []);

  const [stories, setStories] = useState([]);

  const getAllStories = async () => {
    const apiResultObject = await API.getStories();
    const allFoundStories = apiResultObject.data;
    
    console.log(allFoundStories);
    setStories(allFoundStories);
  }

  return (
    <div>
      <h1>Lots of Stories go here</h1>
      {stories.map((storie, index) => (
          <StorieCard key={index} storie={storie}/>
      ))}
    </div>
  )
}
