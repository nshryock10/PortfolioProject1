//Program to generate a random mad lib with different sentences, verbs, nouns, and adjectives 
//Protfolio Project 1 using Java Script and Node.js
//Author: Nick Shryock
//Start Date: Jan. 18, 2021

//Create an object with sentences that have properties for the nuber of nouns, verbs, adjectives required for the sentence
//Within the message object, have another property for each of the other sentence parameters
const messages = {
    sentences: ['Yesterday I ate *noun* while I was *verb*ing in my *adjective* outfit!',
    'It is very *adjective* out today. I think I will *verb* with *noun*.',
    'I am writing a story about a *adjective* *noun* that can *verb* in space!'],
    nouns: ['dog', 'friend', 'banana', 'umbrella', 'tree', 'pizza', 'shoe', 'taco', 'mouse'],
    verbs: ['run', 'bike', 'sing', 'shout', 'crawl', 'walk', 'drive', 'climb', 'hike', 'surf'],
    adjectives: ['funny', 'hyper', 'colorful', 'happy', 'enormous', 'jolly', 'plump', 'mysterious', 'adventurous', 'shaggy'],
    findIndex(sentence) {
        //This method will find the index of each noun, verb, and adjective. It will replace the word before finding the the next parameter
        //Object stores the starting index and the word type
        const newWord = {nounIndex: 0,
                verbIndex: 0, 
                adjecIndex: 0};
        for(let i = 0; i < sentence.length; i++){
            if(sentence[i] === '*'){
                if(sentence.substring((i+1), (i+5)) === 'noun'){
                    newWord.nounIndex = i;
                }else if(sentence.substring((i+1), (i+5)) === 'verb'){
                    newWord.verbIndex = i;
                }else if(sentence.substring((i+1), (i+10)) === 'adjective'){
                    newWord.adjecIndex = i;
                }
            }
        }
        //Returns the new word object
        return newWord;
    },
    replaceWord(sentence, wordObj, word, type){
        //This method will replace the placeholder with the chosen word
        
        //Find the appropriate index start based on the type
        let sIndex = 0;
        let eIndex = 0;
        switch (type){
            case 'noun':
                sIndex = wordObj.nounIdex;
                eIndex = 6;
                break;
            case 'verb':
                sIndex = wordObj.verbIndex;
                eIndex = 6;
                break;
            case 'adjective':
                sIndex = word.adjecIndex;
                eIndex = 11;
                break;
            default:
                sIndex = 'Error';
                break;
        }

        //Repalce the word in the sentnece using the start and end index from above
        let newSent = sentence.replace('*' + type + '*', word);
        return newSent;
    },
    randomWord(type){
        //This method will generate a random word base on the type passed in
        const word = this[type][Math.floor(Math.random() * this[type].length)];
        return word;
    },
    generateMessage(){
        //This function will be put together the full sentence
        
        //Pull a random sentence
        const sent = this.randomWord('sentences');
        //Find index of each word in that sentence
        const wordIndex = this.findIndex(sent);
        //Pull a random noun and add to sentence
        const noun = this.randomWord('nouns');
        let newSent = this.replaceWord(sent, wordIndex, noun, 'noun');
        console.log(newSent);
        //Pull a random verb and add to sentence
        const verb = this.randomWord('verbs');
        newSent = this.replaceWord(newSent, wordIndex, verb, 'verb');
        console.log(newSent);
        //Pull a random adjective and add to sentence
        const adjective = this.randomWord('adjectives');
        newSent = this.replaceWord(newSent, wordIndex, adjective, 'adjective');
        
        //Print out the message
        console.log(newSent);
    }
}

//Create function to randomly chose the correct number of each element and string together

//Call the randomMessgaeGenerator function and print to the screen

messages.generateMessage();