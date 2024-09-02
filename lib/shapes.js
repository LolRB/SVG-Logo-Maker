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
    const newRadius = 80 * (4 / 3); 
    return `<circle cx="150" cy="100" r="${newRadius}" fill="${this.color}" />`;
  }
}

class Triangle extends Background {
  render() {
    const points = [
      [150 * (4 / 3), 18 * (4 / 3)],
      [244 * (4 / 3), 182 * (4 / 3)],
      [56 * (4 / 3), 182 * (4 / 3)],
    ];
    const pointsString = points.map((point) => point.join(",")).join(" ");
    return `<polygon points="${pointsString}" fill="${this.color}" />`;
  }
}

class Square extends Background {
  render() {
    const newX = 90 - 30; 
    const newY = 40 - 40; 
    const newWidth = 120 * (4 / 3); 
    const newHeight = 120 * (4 / 3);
    return `<rect x="${newX}" y="${newY}" width="${newWidth}" height="${newHeight}" fill="${this.color}" />`;
  }
}

class Hexagon extends Background {
  render() {
    const points = [
      [150 * (4 / 3), 25 * (4 / 3)],
      [244 * (4 / 3), 75 * (4 / 3)],
      [244 * (4 / 3), 175 * (4 / 3)],
      [150 * (4 / 3), 225 * (4 / 3)],
      [56 * (4 / 3), 175 * (4 / 3)],
      [56 * (4 / 3), 75 * (4 / 3)],
    ];
    const pointsString = points.map((point) => point.join(",")).join(" ");
    return `<polygon points="${pointsString}" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square, Hexagon };
