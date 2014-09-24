class Module1Controller {

    myvalue: string
    
    constructor() {
      this.myvalue = 'Hi!'
    }

    click(text: String = 'clicked'): void {
      this.myvalue = "I'm " + text;
    }

}

export = Module1Controller;