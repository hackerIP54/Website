
const userId = 3908742421;

// Fetch Followers
async function getFollowers(){
  try {
    const res = await fetch(
      `https://friends.roblox.com/v1/users/${userId}/followers/count`
    );

    const data = await res.json();

    document.getElementById("followers").innerText =
      data.count.toLocaleString();

    log("Followers: " + data.count);

  } catch (e){
    log("Error loading followers");
  }
}

// Fake stats (Visits / Players)
function fakeStats(){
  document.getElementById("visits").innerText =
    Math.floor(Math.random()*1000000).toLocaleString();

  document.getElementById("players").innerText =
    Math.floor(Math.random()*5000).toLocaleString();
}

// Log system
function log(text){
  const feed = document.getElementById("feed");
  const time = new Date().toLocaleTimeString();

  feed.innerHTML =
    `[${time}] ${text}<br>` + feed.innerHTML;
}

// Refresh button
document.getElementById("refresh")
  .addEventListener("click", () => {
    getFollowers();
    fakeStats();
  });

// LIVE LOOP
getFollowers();
fakeStats();

setInterval(() => {
  getFollowers();
  fakeStats();
}, 10000);
