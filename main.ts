input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
    if (a > 0) {
        a = a - 1
    }
    radio.sendString("" + convertToText(a) + "|" + convertToText(b))
    wys()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.clearScreen()
    if (b > 0) {
        b = b + -1
    }
    radio.sendString("" + convertToText(a) + "|" + convertToText(b))
    wys()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.clearScreen()
    if (a < 4) {
        a = a + 1
    }
    radio.sendString("" + convertToText(a) + "|" + convertToText(b))
    wys()
})
function pocisk () {
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    listax1 = receivedString.split("|")
    led.plotBrightness(a, b, 8)
    wys()
})
function wys () {
    led.plotBrightness(parseFloat(listax1[0]), parseFloat(listax1[1]), 255)
    led.plotBrightness(a, b, 4)
}
input.onGesture(Gesture.LogoUp, function () {
    basic.clearScreen()
    if (b < 4) {
        b = b + 1
    }
    radio.sendString("" + convertToText(a) + "|" + convertToText(b))
    wys()
})
let listax1: string[] = []
let b = 0
let a = 0
a = 0
b = 0
listax1 = "-1|-1".split("|")
led.plotBrightness(a, b, 4)
radio.setGroup(1)
radio.sendString("" + convertToText(a) + "|" + convertToText(b))
