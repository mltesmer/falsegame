input.onButtonPressed(Button.A, function () {
    music.playMelody("A C E B C E A D ", 120)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.showString("Well done :)")
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 C5 C5 C C C C C ", 112)
    basic.showString("Sorry wrong :(")
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
})
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
basic.showString("Hello!")
basic.showString("True or False?")
basic.showString("Was Minecraft made 18 November 2011?")
basic.showString("a is true and b is false")
