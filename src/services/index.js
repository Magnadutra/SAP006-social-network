// COLEÇÃO DE POSTS
export const collectionPosts = () => firebase.firestore().collection('posts');
// CRIAÇÃO DE POSTS
export const criarPost = (text) => {
  // USUÁRIO
  const usuario = firebase.auth().currentUser;

  const post = {
    user_id: usuario.uid,
    mensagem: text.value,
    data: new Date(),
    like: [],
    comentario: [],
  };

  return collectionPosts().add(post);
};
export const usuario = firebase.auth().currentUser;
// delete posts
export const delPost = (idPost) => firebase.firestore().collection('posts').doc(idPost).delete();
// edit posts
//     .add(postagem)
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//         msg.value = '';
//     })

//     //tratar erros do firebase
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });

// addPostMsg.innerHTML = addPost;

//   });
