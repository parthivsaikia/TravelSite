import app from "./app";
app.get("/", (_req, res) => {
  res.json("hi");
});

const PORT = process.env.BACKEND_PORT;

app.listen(PORT, () => {
  console.log(`server running on PORT: `, PORT);
});
