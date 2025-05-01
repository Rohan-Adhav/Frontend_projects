app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'history.html'));
});