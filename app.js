const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food" , "Cook Food" , "Eat Food"];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res)
{
    // res.send("Hello World");
    let today = new Date();
    // Method 1
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("eng-US", options);
    res.render("list",
        {
            kindOfDay: day,
            newListItems:items
        });



    // Method 2
    // var currentDay = today.getDay();
    // var day = "";

    // switch (currentDay)
    // {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;

    //     default:
    //         console.log("Error, Current day is equal to "+currentDay);  
    //         break;
    // }
    // res.render("list", { kindOfDay: day });
});

app.post("/", function (req, res)
{
    var item = req.body.newItem;
    // console.log(item);
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function ()
{
    console.log("The server is live at port 3000");
})