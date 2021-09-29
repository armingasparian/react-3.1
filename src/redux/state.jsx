import {rerenderEntireTree} from '../render';

let state = {
    profilePage: {
        posts: [
          { id: 1, message: "Hello, I am Tina!", likecount: 15 },
          { id: 2, message: "Hi, it's my first post", likecount: 23 }
        ],
        newPostText: "Hello, it's me!!!"
    },
    dialogsPage: {
        messages: [
          { message: "Hi" },
          { message: "How is your React?" },
          { message: "Hello" },
          { message: "It's my birthday" },
          { message: "I have finished the school" },
          { message: "Congratulations" }
        ],
        dialogs: [
          { id: 1, name: "Dimich" },
          { id: 2, name: "Andrey" },
          { id: 3, name: "Sveta" },
          { id: 4, name: "Sasha" },
          { id: 5, name: "Victor" },
          { id: 6, name: "Valera" }
        ]
    } 
}

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likecount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;