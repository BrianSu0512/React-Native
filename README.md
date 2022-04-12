This app "MEMORIES" is used to help different age ranges people to remember a special moment.
The app is designed for the IOS platform, especially on iPhone 13.

All of the compulsory files, which include appScreen, components, database and image, are in APP folder repository.

config folder is to store the posts and users array and some functions, which will users to modify their data.

Navigation folder involves an AppNavigator file, which allows the user to switch between the screens.

Components folder contains a number of components, which help us to build the screen.

AppScreen folder includes the different pages of screens.

WelcomeScreen can be regarded as a home screen, which provides two options to the user. (log in or register)

LoginScreen can allow users to log in to the app with their personal email and password and there has a function to verify the log in detail.
(user1 with image, email:b@gmail.com", password:1234)
(user2 not image), email:j@gmail.com", password:2345)

RegisterScreeen can allow users to apply for a personal account by filling out the form.

MemoriesScreen after user login, the user will see six different categories, addPosts icon on the right-hand corner and a user image or user icon will show on the left-hand corner depending on having an image or not.

when the user clicks on one of the categories, the user will find out the post with corresponding categories.
when the user clicks on addPosts icon, the user will go to NewPostsScreen.
when the user clicks on the user image or user icon, the system will show the alarm and click whether the user wants to log out or not. (if yes, back to WelcomeScreen, if not, stay on the page you are)

NewPostsScreen allows the user to create new posts by filling out the form.

AccountScreen allows the user to delete the post and there only shows the post with corresponding categories, which the user selects at MemoriesScreen.

MoreInfScreen will display more detail than AccountScreen. For example, location categories, description, and summary.
