const express = require("express");
const connectDB = require("./config/conn");
const cityRoutes = require("./routes/cityRoutes");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const multer = require("multer");

// var progressStream = require("progress-stream");

const path = require("path");
const cors = require("cors");

const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");

ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");
ffmpeg.setFfprobePath("C:/ffmpeg/bin");
ffmpeg.setFlvtoolPath("C:/flvtool");
const app = express();
app.use(cors());
connectDB();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/city", cityRoutes);
app.use("/api/users", userRoutes);

// set storage engine
// const storage = multer.diskStorage({
//   destination: "./uploads",
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// }).single("myImage");

// const checkFileType = (file, cb) => {
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif/;
//   // check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb("Error : Images Only!");
//   }
// };

// app.get("/test", (req, res) => {
//   res.json({ name: "hina" });
// });

// app.post("/upload", (req, res) => {
//   console.log(req.file, req.body);
//   upload(req, res, (err) => {
//     if (err) {
//       console.log("error");
//     } else {
//       console.log("req,", req.file);
//       if (req.file === undefined) {
//         // res.render("index", { msg: "Error : No file selected" });
//       } else {
//         console.log("Done uploading");
//         // res.render("index", {
//         //   msg: "file uploaded",
//         //   file: `uploads/${req.file.filename}`,
//         // });
//       }
//     }
//     res.json("send");
//   });
// });


// const fileStorageEnginer = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./backend/upload");
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });
// const upload = multer({
//   //storage
//   storage: fileStorageEnginer,
// });


// app.post("/upload", function (req, res, next) {
  
//   // create an instance of progress stream of
//   var progress = progressStream({ length: "0" }); // Note that this length is set to '0'
//   req.pipe(progress);
//   progress.headers = req.headers;

//   // Get the true length of the uploaded file (for multipart)
//   progress.on("length", function nowIKnowMyLength(actualLength) {
//     console.log("actualLength: %s", actualLength);
//     progress.setLength(actualLength);
//   });

//   // get the upload progress
//   progress.on("progress", function (obj) {
//     console.log("progress: %s", obj.percentage);
//   });

//   // actual upload files
//   upload.single("logo")(progress, res, next);
 

// });

// app.post('/upload', function (req, res, next) {
//   res.send({ret_code: '0'});
// });

const fileStorageEnginer = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./backend/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  //storage
  storage: fileStorageEnginer,
});

app.post("/convert", upload.single("video"), (req, res) => {
  if (req.file) {
    let to = "mp4";
    let split = req.file.originalname.split(".")[0]
    let fileName = `${split}.${to}`;

      ffmpeg(req.file.path)
        .withOutputFormat(to)
        .on("end", function (stdout, stderr) {
       
          fs.unlink("./backend/uploads/" + req.file.filename, function (err) {
            if (err) throw err;
            console.log("File deleted");
            res.status(200).json({
              message:"uploaded successfully"
            })
          });
        })
        .on("error", function (err) {
         
          fs.unlink("./backend/uploads/" + req.file.filename, function (err) {
            if (err) throw err;
           

          });
          res.json({
           
            message:"success"
          })
        })
        .saveToFile("./backend/uploads/ " + fileName);

  }
});
app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
});
