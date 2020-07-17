class $ {
  constructor(str){
    this.elements = [];
    let firstChar = str[0];

    if (firstChar === '.') {
      let classes = document.getElementsByClassName(str.slice(1));
      this.elements = [...classes];
    } else if (firstChar === '#'){
      let id = document.getElementById(str.slice(1));
      this.elements.push(id);
    } else {
      let tags = document.getElementsByTagName(str);
      this.elements = [...tags];
    }
  }

  hide(){
    this.elements.forEach(el => {
      el.style.display = 'none';
    })
    return this;
  }

  show(){
    this.elements.forEach(el => {
      el.style.display = 'inherit';
    })
    return this;
  }

  addClassName(className){
    this.elements.forEach(el => {
      el.classList.add(className);
    })
    return this;
  }

  removeClassName(className){
    this.elements.forEach(el => {
      el.classList.remove(className);
    })
    return this;
  }

  text(string){
    this.elements.forEach(el => {
      el.innerText = string;
    })
    return this;
  }

  addChild(tag){
    this.elements.forEach(el => {
      let newEl = document.createElement(tag);
      el.appendChild(newEl);
    })
    return this;
  }

}

