let story = `In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.`;

story = story.toLowerCase();
const wordCounts = {};

function cleanStory(story) {
  //function clean and split the story to arry
  const specialChars = [",", ".", "'", '"', "?", "!", ";"];
  let newstory = story;
  for (let char of specialChars) {
    console.log(char);
    newstory = newstory.replaceAll(char, ``);
  }
  const splitStory = newstory.split(" ");
  return splitStory;
}

const newStory = cleanStory(story);
console.log(newStory);

function countOfWords(newStory) {
  for (let word of newStory) {
    if (wordCounts[word] > 0) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
}

countOfWords(newStory);
console.log(wordCounts);
