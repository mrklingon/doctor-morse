function playCode (text: string) {
    for (let index = 0; index <= text.length; index++) {
        chr = text.charAt(index)
        if (chr == ".") {
            music.playTone(523, music.beat(BeatFraction.Eighth))
        }
        if (chr == "-") {
            music.playTone(131, music.beat(BeatFraction.Half))
        }
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showString(code)
    playCode(code)
    basic.showString("" + (alphabet[morse.indexOf(code)]))
    Cword = "" + Cword + code + "  "
    Word = "" + Word + alphabet[morse.indexOf(code)]
    code = ""
})
input.onButtonPressed(Button.AB, function () {
    if (state == 2) {
        basic.showString("" + (hemhaw[randint(0, hemhaw.length - 1)]))
        basic.showString(Word)
        basic.showString(name)
        basic.showString("" + (answers[randint(0, answers.length - 1)]))
        state = 1
    }
    if (state == 1) {
        basic.showString("" + (questions[randint(0, questions.length - 1)]))
        state = 2
    }
    if (state == 0) {
        name = Word
        basic.showString("Nice to meet you," + name)
        basic.showString("" + (questions[randint(0, questions.length)]))
        state = 2
    }
    basic.showString(Cword)
    basic.pause(100)
    basic.showString(Word)
    Cword = ""
    Word = ""
})
input.onGesture(Gesture.Shake, function () {
    Word = ""
    Cword = ""
    code = ""
})
let timed = 0
let name = ""
let chr = ""
let alphabet: string[] = []
let morse: string[] = []
let state = 0
let questions: string[] = []
let answers: string[] = []
let hemhaw: string[] = []
let code = ""
let Cword = ""
let Word = ""
Word = ""
Cword = ""
code = ""
hemhaw = ["Hmm,", "Ah,", "Oh,"]
answers = ["I see.", "Okay.", "That's interesting."]
questions = ["What is the weather today?", "How are you feeling?", "What is your favorite book??", "Do you have a hobby?", "Can you swim?"]
state = 0
basic.showString("Hi, I'm Morse! What is your name?")
morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
basic.forever(function () {
    timed = 0
    while (input.buttonIsPressed(Button.B)) {
        timed += 1
        basic.pause(25)
    }
    if (timed < 33 && timed > 0) {
        basic.showString(".")
        music.playTone(523, music.beat(BeatFraction.Eighth))
        code = "" + code + "."
    }
    if (timed > 33 && timed > 0) {
        basic.showString("-")
        code = "" + code + "-"
        music.playTone(131, music.beat(BeatFraction.Half))
    }
    basic.pause(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
