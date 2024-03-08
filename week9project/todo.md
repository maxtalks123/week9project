    As a user, I am able to sign up for an account and create a user profile
    As a user, I am able to log in and out of my account
    As a user, I am able to create posts on my profile timeline
    As a user, I am able to see all posts by all users on a global timeline

    What I am going to do:
    - Create table of users with fields of user id, biography, location
    - create table of posts with fields of post_id, post title, post content, foreign key of user id, likes
    - create junction table Liked posts with user id, post_id, liked_post
    - SELECT * FROM posts where user.id = post.id and map through to display posts.
    - User page
    - create profile with liked posts, amount of followers, posts
    - create form with username, biography, location
