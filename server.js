const express = require('express');
const app = express();
const port = 3000;
const port =process.env.PORT || 3002;
         app.use(express.static('frontend'));      
app.listen(port, () => {
    console.log(`Success! Server is running on http://localhost:${port}`);
});
const port =process.env.PORT || 3000;