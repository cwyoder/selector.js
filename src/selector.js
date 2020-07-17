function $ (string) {
  this.elements = [];

  const firstChar = string[0];
  const strSlice = string.slice(1);
  let arr = [];

  if (firstChar === '.') {
    let classes = document.getElementsByClassName(strSlice);
    classes = [...classes];
    this.elements = classes;
  }
  else if (firstChar === '#'){
    let id = document.getElementById(strSlice);
    this.elements.push(id);
  } else {
    let tags = document.getElementsByTagName(string);
    tags = [...tags];
    this.elements = tags;
  }
}

