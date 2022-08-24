# Controller

## About

In general, Controller is a control panel with the help of which we can manage animations made with GreenSock.


## Usage

Firstly we need to add this link to Index.html.

    <script src="https://anastasiya-nikalayeva.github.io/Controller/controller.js"></script>

Then we should initialise Controller in JS.

    const contr = new Controller({
        container: wrapper, 
        timeline: tl,
    })

In this initialisation we should define our container (of the creative). We need it in order to locate Controller correctly. Also we need to define a timeline. If we don’t define a timeline then globalTimeline will work for us (but with some limitations).

This example can be considered as quick start. But also we can tune the buttons of the Controller as we need. By default all the buttons have value ‘true’. We could change any of them to ‘false’ so these ones wouldn’t be displayed.

    play: false,
    pause: false,
    reverse: false,
    restart: false,
    fastSpeed: false,
    normalSpeed: false,
    range: false,
    hideControlls: false