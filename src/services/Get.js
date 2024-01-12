// services/Get.js

import axios from 'axios';

const getPosts = async () => {
  try {
    const response = await axios.get('https://school.joorchin.co/wp-json/wp/v2/course?_embed');

    if (!response || !response.data) {
      throw new Error('No data received');
    }

    const posts = response.data;
    console.log('WordPress Posts:', posts);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
};

export default getPosts;
