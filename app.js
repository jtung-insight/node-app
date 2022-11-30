const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Argo CD! Is this really working? Lets try again! We go again!! And again!! ETA?'))
app.listen(3000, () => console.log('Server ready'))