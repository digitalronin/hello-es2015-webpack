class Hello {
  constructor(config) {
    this.target = config.target;
  }

  run() {
    this.target.innerHTML = `
      <p>
        Hello from ES2015
      </p>
    `;
  }
}

export default Hello
