function Pessoa() {
    this.idade = 0

    //const self = this
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa()