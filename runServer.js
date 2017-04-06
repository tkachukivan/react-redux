const { app } = require('./server/app');

app.listen(3000, () => {
  console.log('server run on 3000 port');
});
