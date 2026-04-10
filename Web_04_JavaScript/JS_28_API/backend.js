 let catUrl = "https://catfact.ninja/fact";
    let dogUrl = "https://dog.ceo/api/breeds/image/random";

    let btn = document.querySelector(".btn");
    let para = document.querySelector(".para");

    btn.addEventListener("click", async () => {
      let fact = await getCatFact();
      para.innerText = fact;
    });

    async function getCatFact() {
      try {
        let ans = await axios.get(catUrl);
        return ans.data.fact;
      } catch (e) {
        return "No cat fact found.";
      }
    }

    let dogBtn = document.querySelector(".btn1");
    let dogImg = document.querySelector(".img1");

    dogBtn.addEventListener("click", async () => {
      let imgUrl = await getDogImage();
      dogImg.src = imgUrl;
    });

    async function getDogImage() {
      try {
        let ans = await axios.get(dogUrl);
        return ans.data.message; // <-- 'message' contains image URL
      } catch (e) {
        return "https://via.placeholder.com/300x200?text=No+Image+Found";
      }
    }