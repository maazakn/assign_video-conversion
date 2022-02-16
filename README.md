## INTRODUCTION

​
Project made with Express JS (A Node.js framework) and Mongodb used as database.
​

## GETTING STARTED

Guidelines that will get you a copy of the project up and running on your local machine.
​

### SOFTWARE AND TOOLS

​
Node
NPM
IDE (Visual Studio Code)
FFmpeg (for video conversion)
​
​

### INSTALLING

​
A step by step that tell you how to get a development env running

- GIT Clone: To get a clone of this repository on your machine use HTTP/SSH option.

- Run **npm install** to Install the dependencies in the local node_modules folder. By default, **npm install** will install all modules listed as dependencies in **package.json**.

- Run **npm run dev** to start a server and client. Navigate to http://localhost:3000/.
  ​
- After downloading FFmpeg on your local machine, follow the below steps,
  1.  open FFmpeg folder, then bin folder
  2.  in bin folder there will be Three files ffmpeg.exe, ffprobe.exe, ffplay.exe
  3.  you are required to set these files path in the backend server.js file
  4.  set paths in these function,
      ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");
      ffmpeg.setFfprobePath("C:/ffmpeg/bin/ffprobe.exe");
      ffmpeg.setFlvtoolPath("C:/ffmpeg/bin/ffplay.exe");
