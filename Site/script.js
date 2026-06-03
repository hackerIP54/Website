function counter(id, start, end, speed) {

    let current = start;

    const timer = setInterval(() => {

        current += Math.ceil((end - start) / 100);

        if(current >= end){
            current = end;
            clearInterval(timer);
        }

        document.getElementById(id).innerText =
            current.toLocaleString();

    }, speed);
}

counter("visits", 0, 1245873, 20);
counter("players", 0, 5382, 20);
counter("robux", 0, 95843, 20);

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});
