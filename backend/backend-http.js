const express = require('express');
const cors = require('cors');
const app = express()
const port = 3000

let dataMsg = {
  id: 0,
  arrayId: [
    1,3,4,0,2
  ],
  title: "test",
  shortmsg: "Lorem ipsum dolor sit amet",
  paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
}

let listDataMsg = []

for (let i = 0; i < 100; i++) {
  dataMsg.id = i;
  listDataMsg.push(dataMsg);
}

app.use(cors());
app.get('/', (req, res) => {
  res.send(listDataMsg)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
