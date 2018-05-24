function makeStory() {

    // get form values
    var adjective1 = document.getElementById('adjective1').value;

    var verb1 = document.getElementById('verb1').value;

    var verb2 = document.getElementById('verb2').value;

    var propername = document.getElementById('propername').value;

    var lenghoftime = document.getElementById('lenghoftime').value;

    var bodypart  = document.getElementById('bodypart').value;

    var interjection = document.getElementById('interjection').value;

    var superlative = document.getElementById('superlative').value;

    var place= document.getElementById('place').value;

    var adverb = document.getElementById('adverb').value;

    var noun1 = document.getElementById('noun1').value;

    var food = document.getElementById('food').value;

    var pluralanimal = document.getElementById('pluralanimal').value;

    var noun2 = document.getElementById('noun2').value;

    var number = document.getElementById('number').value;

    var verb3 = document.getElementById('verb3').value;

   var adjective2 = document.getElementById('adjective2').value;

   var saltutation = document.getElementById('saltutation').value;







    // Set title of story.
    var title = "Epic Summer Love Story";


    // Build story.
    var story = "It was a " + adjective1 + ", summer afternoon when he " + verb1 + " by me. " + " My eyes " +
    verb2 + " as my heartbeat fluttered. In that instant I knew " + propername + " and I would love each other for " + lenghoftime +
     " . He looked deep at my " + bodypart + " and said " + interjection  + ", you are the " + superlative + "girl I have ever met. " + "We sat in the " + place + " and stared at each other for hours. As his hand " +
    adverb + " touched my hand, sparks flew. " + "We talked about " + noun1 + " and other important details of our lives. He loved " +
    food + " and " + pluralanimal + " almost as much as I loved him. He offered to show me his " + noun2 + " collection. " + "For " + number +
    " days we talked and" + verb3 + "The warm summer days turned " + adjective2 + " and he had to leave. I did not even get to say " + saltutation;




    // Display story.
    document.getElementById('story').innerHTML = story;
    document.getElementById('title').innerHTML = title;


}
