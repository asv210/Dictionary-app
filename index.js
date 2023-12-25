const express=require('express');
const app= express();
const port=3000;
const axios=require("axios").default;
app.get('/',(req,res)=>{
    return res.sendFile("/index.html",{root:__dirname})
})
app.get("/searchword", async (req, res) => {
  console.log(req.query.entry); // Use req.query.entry instead of req.params.entry
  await axios
    .request({
      method: "GET",
      url: `https://api.dictionaryapi.dev/api/v2/entries/en/${req.query.entry}`,
      
    })
    .then(function (resp) {
      // console.log(resp.data);
      res.send(resp.data);
    })
    .catch(function (err) {
      console.error(err);
    });
});




app.listen(port,()=>{
    console.log(`listening ${port}`);
})