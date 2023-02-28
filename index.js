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

/**
 * QUESTION 3
 * Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
ENG - 70
GOVT - 85
LIT - 82
CRK - 94

a.) Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
b.) Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

 */
//ANSWER TO ASSIGNMENT 3a.
function createPerson(name, age, location){
    return {
        person_name: name,
        person_age: age,
        persons_location: location
    }
}

let person1 = createPerson("Musa", "19", "Lekki Lagos")

//ANSWER TO ASSIGNMENT 3b.
function createJambScores(eng, govt, lit, crk) {
    return {
        English: eng,
        Government: govt,
        Literature_in_English: lit,
        Christian_religious_knowledge: crk,
    }
}

let person1_scores = createJambScores ("70", "85", "82", "94")
person1.scores = person1_scores


/**
 * QUESTION 4.
 * What are the different ways you can clone an object? Give examples for each of them.
 */
// ANSWER TO ASSIGNMENT 4.

function music(artist, title, yearReleased) {
    return{
        artist: artist,
        title: title,
        yearReleased: yearReleased,
    }
}

const firstSong = music("Ariana Grande", "Sweetener", 2018)

// Method 1 - Using the JSON.parse(JSON.strigify())
//Example.

const secondSong = JSON.parse(JSON.stringify(firstSong));

secondSong.title = "7 Rings";
secondSong.yearReleased = 2019;

/**
 * Method 2 - using the spread method (...)
 */
const thirdSong = {...firstSong}
thirdSong.title = "No tears left to cry"

/**
 * Method 3 - using the Object.assign() method
 */

const fourthSong = Object.assign({}, thirdSong)
fourthSong.title = "Right there";
fourthSong.yearReleased = 2013;