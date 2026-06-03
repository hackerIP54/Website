const userId = 3908742421; // <-- DEIN Roblox User ID

function el(id){
  return document.getElementById(id);
}

// Load Followers (REAL)
async function loadFollowers(){
  try {
    const res = await fetch(
      `https://friends.roblox.com/v1/users/${userId}/followers/count`
    );

    const data = await res.json();

    el("followers").innerText =
      data.count.toLocaleString();

  } catch (err){
    el("followers").innerText = "Error";
  }
}

// Load User Info (REAL)
async function loadUser(){
  try {
    const res = await fetch(
      `https://users.roblox.com/v1/users/${userId}`
    );

    const data = await res.json();

    el("username").innerText = data.name;
    el("displayName").innerText = data.displayName;
    el("userId").innerText = data.id;

  } catch (err){
    console.log("User load error");
  }
}

// Refresh Button
document.getElementById("refreshBtn")
.addEventListener("click", () => {
  loadFollowers();
  loadUser();
});

// INIT
loadFollowers();
loadUser();

// LIVE UPDATE
setInterval(() => {
  loadFollowers();
}, 10000);
