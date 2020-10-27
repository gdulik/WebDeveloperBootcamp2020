const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function(e) {
  e.preventDefault();
  // const usernameInput = document.querySelectorAll("input")[0];
  // const tweetInput = document.querySelectorAll("input")[1];
  // console.log(`${usernameInput.value} says: ${tweetInput.value}`);

  const usernameInput = this.elements.username;
  const tweetInput = this.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  
  usernameInput.value = "";
  tweetInput.value = "";
  // const newTweet = document.createElement("li");
  // newTweet.innerHTML = `<b>${username}</b> - ${tweet}`;
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`);
  tweetsContainer.append(newTweet);
}