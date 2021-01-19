//Program to generate a random mad lib with different sentences, verbs, nouns, and adjectives 
//Protfolio Project 1 using Java Script and Node.js
//Author: Nick Shryock
//Start Date: Jan. 18, 2021

//Object with sentences, nouns, verbs, and adjectives to use
//Includes methods to pull random parameters and put together in a sentence
const messages = {
    sentences: ['Yesterday I ate *noun* while I was *verb*ing in my *adjective* outfit!',
    'It is very *adjective* out today. I think I will *verb* with *noun*.',
    'I am writing a story about a *adjective* *noun* that can *verb* in space!'],
    nouns: ['dog', 'friend', 'banana', 'umbrella', 'tree', 'pizza', 'shoe', 'taco', 'mouse'],
    verbs: ['run', 'bike', 'sing', 'shout', 'crawl', 'walk', 'drive', 'climb', 'hike', 'surf'],
    adjectives: ['funny', 'hyper', 'colorful', 'happy', 'enormous', 'jolly', 'plump', 'mysterious', 'adventurous', 'shaggy'],

    replaceWord(sentence, word, type){
        //Repalce the word in the sentence using the replace function
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

        //Pull a random noun and add to sentence
        const noun = this.randomWord('nouns');
        let newSent = this.replaceWord(sent, noun, 'noun');

        //Pull a random verb and add to sentence
        const verb = this.randomWord('verbs');
        newSent = this.replaceWord(newSent, verb, 'verb');
  
        //Pull a random adjective and add to sentence
        const adjective = this.randomWord('adjectives');
        newSent = this.replaceWord(newSent, adjective, 'adjective');
        
        //Print out the message
        console.log(newSent);
    }
}

//Call the randomMessgaeGenerator function and print to the screen
messages.generateMessage();