import axios from 'axios';

import p1p1 from '../assets/Posts/post1/1.jpg'
import p2p1 from '../assets/Posts/post2/1.jpg'

import p3p1 from '../assets/Posts/post3/1.jpg'
import p3p2 from '../assets/Posts/post3/1.1.jpg'
import p3p3 from '../assets/Posts/post3/1.2.jpg'

import p4p1 from '../assets/Posts/post4/1.jpg'
import p5p1 from '../assets/Posts/post5/1.jpg'
import p6p1 from '../assets/Posts/post6/1.jpg'
import p7p1 from '../assets/Posts/post7/1.jpg'
import p8p1 from '../assets/Posts/post8/1.jpg'
import p9p1 from '../assets/Posts/post9/1.jpg'
import p10p1 from '../assets/Posts/post10/1.jpg'
import p11p1 from '../assets/Posts/post11/1.jpg'
import p12p1 from '../assets/Posts/post12/1.jpg'
import p13p1 from '../assets/Posts/post13/1.jpg'
import p14p1 from '../assets/Posts/post14/1.jpg'
import p15p1 from '../assets/Posts/post15/1.jpg'
import p16p1 from '../assets/Posts/post16/1.jpg'
import p17p1 from '../assets/Posts/post17/1.jpg'
import p18p1 from '../assets/Posts/post18/1.jpg'
import p19p1 from '../assets/Posts/post19/1.jpg'

import p20p1 from '../assets/Posts/post20/1.jpg'
import p20p2 from '../assets/Posts/post20/1.1.jpg'

import p21p1 from '../assets/Posts/post21/1.jpg'
import p22p1 from '../assets/Posts/post22/1.jpg'
import p23p1 from '../assets/Posts/post23/1.jpg'
import p24p1 from '../assets/Posts/post24/1.jpg'
import p25p1 from '../assets/Posts/post25/1.jpg'
import p26p1 from '../assets/Posts/post26/1.jpg'
import p27p1 from '../assets/Posts/post27/1.jpg'
import p28p1 from '../assets/Posts/post28/1.jpg'
import p29p1 from '../assets/Posts/post29/1.jpg'
import p30p1 from '../assets/Posts/post30/1.jpg'
import p31p1 from '../assets/Posts/post31/1.jpg'
import p32p1 from '../assets/Posts/post32/1.jpg'

import p33p1 from '../assets/Posts/post33/1.jpg'
import p33p2 from '../assets/Posts/post33/1.1.jpg'
import p33p3 from '../assets/Posts/post33/1.2.jpg'

import p34p1 from '../assets/Posts/post34/1.jpg'
import p35p1 from '../assets/Posts/post35/1.jpg'
import p36p1 from '../assets/Posts/post36/1.jpg'
import p37p1 from '../assets/Posts/post37/1.jpg'
import p38p1 from '../assets/Posts/post38/1.jpg'
import p39p1 from '../assets/Posts/post39/1.jpg'
import p40p1 from '../assets/Posts/post40/1.jpg'
import p41p1 from '../assets/Posts/post41/1.jpg'
import p42p1 from '../assets/Posts/post42/1.jpg'
import p43p1 from '../assets/Posts/post43/1.jpg'
import p44p1 from '../assets/Posts/post44/1.jpg'
import p45p1 from '../assets/Posts/post45/1.jpg'
import p46p1 from '../assets/Posts/post46/1.jpg'
import p47p1 from '../assets/Posts/post47/1.jpg'
import p48p1 from '../assets/Posts/post48/1.jpg'
import p49p1 from '../assets/Posts/post49/1.jpg'
import p50p1 from '../assets/Posts/post50/1.jpg'
import p51p1 from '../assets/Posts/post51/1.jpg'
import p52p1 from '../assets/Posts/post52/1.jpg'
import p53p1 from '../assets/Posts/post53/1.jpg'
import p54p1 from '../assets/Posts/post54/1.jpg'
import p55p1 from '../assets/Posts/post55/1.jpg'
import p56p1 from '../assets/Posts/post56/1.jpg'
import p57p1 from '../assets/Posts/post57/1.jpg'
import p58p1 from '../assets/Posts/post58/1.jpg'
import p59p1 from '../assets/Posts/post59/1.jpg'
import p60p1 from '../assets/Posts/post60/1.jpg'






const fetchUserAndComments = async () => {
  const usersResponse = await axios.get('https://dummyjson.com/users');
  const commentsResponse = await axios.get('https://dummyjson.com/comments');
  
  return { users: usersResponse.data.users, comments: commentsResponse.data.comments };
};


const captions = [
  "Just had the best cup of coffee! ☕",
  "Sunset views are always breathtaking. 🌅",
  "Enjoying a rainy day with a good book. 📚",
  "Can't wait for the weekend! 🚀",
  "Had a fantastic meal at this new restaurant. 🍽️",
  "Nature walks are my favorite way to relax. 🌲",
  "Trying out a new recipe tonight. 🥘",
  "Just finished a great workout session. 💪",
  "Caught up with friends over dinner. 🍽️🍻",
  "Exploring a new city today. 🗺️",
  "Reading up on some interesting tech news. 🌐",
  "Just took a nap and feeling refreshed. 🛌",
  "Enjoying a cup of tea in the park. 🍵🌳",
  "Met some awesome people at this event. 🎉",
  "Working on a new project, can't wait to share it. 🛠️",
  "Had a lovely day at the beach. 🏖️🌊"
];

export const photos = [
 [p1p1], 
 [p2p1], 
 [p3p1, p3p2, p3p3], 
 [p4p1], 
 [p5p1], 
 [p6p1], 
 [p7p1], 
 [p8p1], 
 [p9p1], 
 [p10p1], 
 [p11p1], 
 [p12p1], 
 [p13p1], 
 [p14p1], 
 [p15p1], 
 [p16p1], 
 [p17p1], 
 [p18p1], 
 [p19p1], 
 [p20p1, p20p2], 
 [p21p1], 
 [p22p1], 
 [p23p1], 
 [p24p1], 
 [p25p1], 
 [p26p1], 
 [p27p1], 
 [p28p1], 
 [p29p1], 
 [p30p1], 
 [p31p1], 
 [p32p1], 
 [p33p1, p33p2, p33p3], 
 [p34p1], 
 [p35p1], 
 [p36p1], 
 [p37p1], 
 [p38p1], 
 [p39p1], 
 [p40p1], 
 [p41p1], 
 [p42p1], 
 [p43p1], 
 [p44p1], 
 [p45p1], 
 [p46p1], 
 [p47p1], 
 [p48p1], 
 [p49p1], 
 [p50p1], 
 [p51p1], 
 [p52p1], 
 [p53p1], 
 [p54p1], 
 [p55p1], 
 [p56p1], 
 [p57p1], 
 [p58p1], 
 [p59p1], 
 [p60p1]
];



const generatePosts = (users, comments, captions, photos) => {
  const posts = Array.from({ length: captions.length }, (_, i) => {
    const generateTimestamp = (minutes) => {
        if (minutes < 60) {
            return `${minutes}m`; 
        } else if (minutes < 1440) {
            let hours = Math.floor(minutes / 60); 
            return `${hours}h`; 
        } else if (minutes < 10080) {
            let days = Math.floor(minutes / 1440); 
            return `${days}d`; 
        }
        else {
            let weeks = Math.floor(minutes / 10080); 
            return `${weeks}w`; 
        }
    };
    const randomUserIndex = Math.floor(Math.random() * users.length);
     const user = users[randomUserIndex];
    
    const randomNumberOfComments = Math.floor(Math.random() * comments.length);
    const postComments = Array.from({ length: randomNumberOfComments }, () => {
      const randomUserIndex = Math.floor(Math.random() * users.length);
      const user = users[randomUserIndex];
      
      const randomCommentIndex = Math.floor(Math.random() * comments.length);
      const comment = comments[randomCommentIndex];
      return {
        id: comment.id,
        body: comment.body,
        user: {
            name: user.username,
            photo: user.image,
        },

        timestamp:
        generateTimestamp(Math.floor(Math.random() * 200 + 1))
        
      };
    });



    return {
      id: i + 1,
      user: {
        name: user.username,
        photo: user.image, 
      },
      timestamp:
      generateTimestamp(Math.floor(Math.random() * 2000 + 1)),
      caption: captions[i], 
      photos: photos[i] ? photos[i].filter(photo => photo) : [], 
      likes: Math.floor(Math.random() * 1000), 
      comments: postComments,
    };
  });

  return posts;
};


const createPostsData = async () => {
  const { users, comments } = await fetchUserAndComments();
  const posts = generatePosts(users, comments, captions, photos);
  return posts;
};

export const posts = await createPostsData();