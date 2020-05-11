# Final-Deliverable
### Team members: Shicheng Huo/Xinjia Pang<br/>
### project name: Polyomino Match(This game needs to play remotely and requires to have two computers)
### The address for the game:https://game.xinjiapang.com/ (Remember to count 3/2/1 and press the start button together. Hope you enjoy the game with your friend. Otherwise the time count down function might not be active :))
### By entering the game with the link above, you will be the host of the game. You can share the room ID to your friend or the URL(right click=>copy link=>paste to your friend).
---
### Summary
 
This project wants to encourage people to communicate and interact with each other through games that required collaboration and walking around the crowd. Today, with the rapid development of technology, we can see that in the cafe, in the bus stations, and in many places, most people choose to use mobile phones to browse information and meet people through the internet. However, in the same space, people have many opportunities to know each other. 

The project tries to provide a fun channel for people to meet with others. Users will be assigned a random blocks composition once they stand in the heated area. The block compositions can be combined with another person into a new shape. With the block they had, they need to find others who has a match block compositions with them.

The objective of the project is to make the prototype as close to reality as possible.

---
## Game mechanism

Each player have 6 gestures they can use to call out the corresponding Tetris shape. In order to win the game, two player need to be collaborative and try to match the central goal shape together! :)
![Image description](https://github.com/shichenghuo/Final-Deliverable/blob/master/Game%20Guide-01.png)

---
## Components
### Part 1--Opening Page
The opening page is created in codesanbox. Focus Practice: HTML/CSS. => CLICK THE LINK BELOW TO VIEW THE CODE<br/>
![Image description](https://github.com/shichenghuo/Final-Deliverable/blob/master/Opening%20Pgae.png)
https://codesandbox.io/s/cp2-final-rfs2x?file=/src/styles.css
### Part 2--The Game
The game we first created in P5.js and moves to server. Focus Practice: Based on Pose Net to build a 2 player game & Classification.=> CLICK THE LINK BELOW TO VIEW THE CODE(The game request to access your webcam)<br/>
![Image description](https://github.com/shichenghuo/Final-Deliverable/blob/master/Game.png)
https://github.com/shichenghuo/Final-Deliverable/blob/master/The%20Game(Code)/public/sketch.js
### Part 3--Connect the game to server(make it online)
Running game in the server. Host player can share the link to the other player to join. They can use their individual computer to play the game.<br/>
![Image description](https://github.com/shichenghuo/Final-Deliverable/blob/master/Explain%20part%203-01.png)
### Reference
-https://github.com/zamfi/TwoPlayer<br/>
-https://www.youtube.com/watch?v=FYgYyq-xqAw&t=1131s<br/>
-https://codepen.io/fossheim/pen/ExjdLRp<br/>


