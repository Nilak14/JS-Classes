const myList = document.querySelector('#myList');

class List {
    constructor(element) {
        this.listElement = element
        this.text = [];
    }

    static createList(text) {
        const li = document.createElement('li')
        li.innerText = text
        return li
    }

    update() {
        while (myList.firstChild) {
            myList.firstChild.remove();
        }

        this.text.forEach(text => {
            this.listElement.appendChild(List.createList(text))
        })
    }

    add(text) {
        this.text.push(text)
        this.update()
    }
}
const listBinding = new List(myList);
listBinding.add('nilak')
