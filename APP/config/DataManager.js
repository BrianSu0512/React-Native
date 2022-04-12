export default class DataManager  {
    static myInstance = null;
    userID = "";

    posts =[
        {
            userid: "user1",
            id:1,
            name:"BestCoffee",
            location:"Chatswood",
            summary:"good coffee",
            description:"nice Staff and food",
            tag:"coffee",
            update:"1/4/2022",
            image:require("../assets/People.jpeg"),
            category:"Restaurant",

        },
        {
            userid: "user1",
            id:2,
            name:"BestBar",
            location:"Chatswood",
            summary:"good steak",
            description:"nice beer and food",
            tag:"beer",
            update:"2/4/2022",
            image:require("../assets/People.jpeg"),
            category:"Restaurant",
        }, {
            userid: "user2",
            id:1,
            name:"BestBar",
            location:"Chatswood",
            summary:"good steak",
            description:"nice beer and food",
            tag:"beer",
            update:"2/4/2022",
            image:require("../assets/People.jpeg"),
            category:"Restaurant",
    
        },
        
    ]

    users = [
        {
            id: "user1",
            name:"Billie Eilish",
            email: "b@gmail.com",
            password: "1234",
            image: require('../assets/icon.png'),
        },
        {
            id: "user2",
            name:"Jon Snow",
            email: "j@gmail.com",
            password: "2345",
            
        },
    ];

    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance =  new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id){
        this.userID = id;
    }

    getPosts(id){
        return this.posts.filter((post)=> post.userid === id);
    }

    addPost(post){
        this.posts.push(post);
    }

    deletePost(post){
        const newPosts=this.posts.filter (item => item.id !== post.id);
        
        return this.posts.splice(0,this.posts.length,...newPosts)
        
    }

    getUser(id){
        return this.users.filter((user)=> user.id === id);
    }

    addUser(user){
        this.users.push(user);
    }

    
   
}