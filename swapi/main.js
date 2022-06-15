const resBtn = document.querySelector("#res-button");
const body = document.querySelector("body");

// function

function clickBtn() {
  // console.log('button clicked');
  axios.get("https://swapi.dev/api/planets/?search=Alderaan").then((res) => {
    console.log(res.data);
    const residents = res.data.results[0].residents;
    for (let i = 0; i < residents.length; i++) {
      console.log(residents[i]);
      axios.get(residents[i]).then((res) => {
        console.log(res.data);
        let b = document.createElement("h2");
        b.textContent = res.data.name;
        console.log(res.data.name)
        body.append(b);
      });
    }
  });
}

// event listeners
resBtn.addEventListener("click", clickBtn);
