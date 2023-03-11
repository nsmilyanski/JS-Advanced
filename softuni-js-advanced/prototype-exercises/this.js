function getThis(obj) {
    let a = Object.getPrototypeOf(this);
    return this;
  }
  

  console.log(getThis({}))