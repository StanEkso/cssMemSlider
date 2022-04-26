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
    constructor(root, data) {
        this.#node = root;
        this.#items = this.#node.querySelector('.slider__items');
        this.#controls = this.#node.querySelector('.slider__controls');
        this.#data = data;
        this.#length = data.length;
        this.#data.forEach(mem => {
            this.#items.append(this.#createMem(mem))
        })
        for (let i = 0; i < this.#length; i++) {
            this.#controls.append(this.#createControl(i));
        }
        this.#position = 0;
    } 
    setCurrentSlide(number) {
        this.#position = number;
        this.#items.style.transform = `translate(-${100*this.#position}%,0)`
    }
    #createControl(index) {
        const control = document.createElement('div');
        control.classList.add('slider__control')
        const span = document.createElement('span');
        control.append(span);
        return control
    }
    #createMem(object) {
        let container = document.createElement('div');
        container.classList.add('slider-item')
        let mem = document.createElement('div');

        mem.classList.add('slider-item__image')
        let img = document.createElement('img');
        img.src = object.url;
        mem.append(img);

        container.append(mem);

        const text = document.createElement('div');
        text.classList.add('slider-item__text');
        text.textContent = object.name;
        container.append(text)
        return container;
    }
}
const sl = new Slider(root, memes)