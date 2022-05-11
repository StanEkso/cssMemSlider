const memes = [
    {
        name: '1+2 = 3.0000000000004',
        url: './images/1.jpg'
    },
    {
        name: 'Жак Фреско?',
        url: './images/2.jpg'
    },
    {
        name: 'Подумайте...',
        url: './images/3.jpeg'
    }
]

const root = document.querySelector('.slider')
class Slider {
    #node;
    #items;
    #controls;
    #length;
    #data;
    #position;
    #captions;
    constructor(root, data) {
        this.#node = root;
        this.#items = this.#node.querySelector('.slider__items');
        this.#captions = this.#node.querySelector('.slider__captions')
        this.#controls = this.#node.querySelector('.slider__controls');
        this.#data = data;
        this.#length = data.length;
        this.#data.forEach(mem => {
            this.#createMem(mem);
        })
        for (let i = 0; i < this.#length; i++) {
            this.#controls.append(this.#createControl(i));
        }
        this.#setCurrentSlide(0)
    } 
    #setCurrentSlide(number) {
        const exist = document.querySelector('.slider__control._active');
        if (exist) exist.classList.remove('_active');

        this.#position = number;
        console.log(this.#controls.querySelectorAll('.slider__control'))
        this.#controls.querySelectorAll('.slider__control')[this.#position].classList.add('_active')
        this.#captions.style.transform = `translate(-${this.#position*100}%,0)`
        this.#items.style.transform = `translate(-${this.#position*100}%,0)`
    }
    #createControl(index) {
        const control = document.createElement('div');
        control.classList.add('slider__control')
        const span = document.createElement('span');
        control.append(span);
        control.addEventListener('click', () => this.#setCurrentSlide(index))
        return control
    }
    #createMem(object) {
       const imageContainer = document.createElement('div');
       imageContainer.classList.add('slider-item__image')
       const img = document.createElement('img');
       img.src = object.url;
        imageContainer.append(img);
        this.#items.append(imageContainer);
       const caption = document.createElement('div');
       caption.textContent = object.name;
       caption.classList.add('slider-item__caption')
       this.#captions.append(caption);
    }
}
const sl = new Slider(root, memes)