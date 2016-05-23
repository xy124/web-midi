# web-midi

Hosts a midi controller with REST API interface. So you can easily write a website that acts as a midi controller
and cab fire local midi events.


This allows you to easily use any device (like a tablet, smartphone, raspberry) that is able to run websites as a midi controller to control you live performance, make your music production even more effective or what else you can imagine!


## Fire midi command 128-2-50

### With params array from within jquery:

```js
$.get("raw",{"params[]":[128, 2, 50]});
```

### Simplified syntax for curl usage

```sh
curl 'http://127.0.0.1:3000/raw?a=128&b=2&c=50'
```


## Install

```sh
git clone
npm i
bower i
```

## Start
- `npm start`
- a standard 3x3 midi-controller pad is served at: 127.0.0.1:3000
  - clicking on the controls will send a note event on midi channel 1, velocity 50,
  specific note is dependent from chosen button (1-9)

## Contribution
- pull requests are heavily WELCOME! :)

## TODO
- make API functions for easier use of midi commands like noteon/off...
- change the default controller to something more fancy



## License
- MIT
