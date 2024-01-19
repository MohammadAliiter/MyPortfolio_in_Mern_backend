require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDb = require("./utils/db")
const router = require("./routes/route")

app.use(cors());
app.use(express.json());

  app.use("/api/auth", router)




const PORT = process.env.PORT || 3001;
// Start the server
connectDb().then(()=>{    
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
})
