const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("input#searchByID");
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Movie not found!"); // Handle 404 or other errors
              }
              return response.json();
        })
        .then((data) => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        }).catch((error) => {
            const message = document.querySelector("#errorMessage");
            message.innerText = error.message;
            message.style.color = "red";
          });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);