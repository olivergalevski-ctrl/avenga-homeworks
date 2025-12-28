function tellStory(arr) {
  const name = arr[0];
  const mood = arr[1];
  const activity = arr[2];

  return `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
}


const storyArray = ["Petar", "happy", "coding"];

console.log(tellStory(storyArray));

