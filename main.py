def on_gesture_tilt_right():
    global a
    radio.send_string("")
    radio.send_number(a)
    radio.send_number(b)
    a = a + 1
    basic.show_number(a)
    basic.show_number(b)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_button_pressed_a():
    radio.send_number(5)
input.on_button_pressed(Button.A, on_button_pressed_a)

def pocisk():
    basic.show_icon(IconNames.TARGET)
    basic.show_icon(IconNames.DIAMOND)
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)

def on_received_string(receivedString):
    pocisk()
radio.on_received_string(on_received_string)

def ruch2():
    pass

def on_gesture_logo_up():
    global b
    radio.send_number(a)
    radio.send_number(b)
    b = b + 1
    basic.show_number(a)
    basic.show_number(b)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

b = 0
a = 0
a = 0
b = 0
radio.set_group(1)