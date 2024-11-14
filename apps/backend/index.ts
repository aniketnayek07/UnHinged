const express =  require('express');

const app = express();
let PORT = 3000;


// app.get ('/', (req, res) => {
//     res.send("hello world")
// });

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});
