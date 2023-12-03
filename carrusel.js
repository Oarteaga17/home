let index = 0;


        function changeImage(change) {

            index += change;

            if (index < 0) {

                index = 2;

            } else if (index > 2) {

                index = 0;

            }

            updateCarousel();

        }

        function updateCarousel() {

            let images = document.querySelectorAll('.carousel img');

            for (let i = 0; i < images.length; i++) {

                images[i].style.display = 'none';

            }

            images[index].style.display = 'block';

        }

  