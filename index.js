/**
 * QUESTION 1
 * Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
Handle of author
content, 
An image link posted by the author of the post
Number of views, 
Number of likes, 

 *  */
// ANSWER TO QUESTION 1

function InstagramPost(handleOfAuthor, postContent, image_link, noOfViews, noOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.postContent = postContent;
    this.image_link = image_link;
    this.numberOfViews = noOfViews;
    this.numberOfLikes = noOfLikes;
}

/**
 * QUESTION 2 
 * Create 2 Instagram post objects from the constructor function you created above
 */
// ANSWER TO QUESTION 2

let Instagram1 = new InstagramPost ("medschool_life", "a video of a medical student watching their first orthopedic surgery", "https://www.instagram.com/reel/CpC9gXyNDmW/?utm_source=ig_web_copy_link", "over 20k views", "24457 likes currently")
let Instagram2 = new InstagramPost ("neloznails", "a video a freshly done stiletto red and white nails on a hand", "https://www.instagram.com/reel/Co99JxjgazE/?utm_source=ig_web_copy_link", "over 30 views", "30 likes currently")