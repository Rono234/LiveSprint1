function revealAnimal(animal) {
        const animalContainer = document.getElementById(`${animal}Container`);
        animalContainer.hidden = false;
      }

        function hideAnimal(animal) {
            const animalContainer = document.getElementById(`${animal}Container`);
            animalContainer.hidden = true;
        }

        document.getElementById("reveal_CatButton").addEventListener("click", () => {
            revealAnimal("cat");
        });
        document.getElementById("reveal_DogButton").addEventListener("click", () => {
            revealAnimal("dog");
        });
        document.getElementById("reveal_CowButton").addEventListener("click", () => {
            revealAnimal("cow");
        });

        const hideButtons = document.querySelectorAll("#hide_Button");
        hideButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const animalContainer = button.parentElement;
                animalContainer.hidden = true;
            });
        });