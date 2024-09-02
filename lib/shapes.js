class Background {
  constructor(color = "") {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error("Render method should be implemented in the subclass");
  }
}

class Circle extends Background {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Background {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Background {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}

class Hexagon extends Background {
  render() {
    return `<polygon points="150,25 244,75 244,175 150,225 56,175 56,75" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square, Hexagon };
