import Express, { Request, Response } from "express";

const app = Express();
app.listen(3000, () => {
    console.log("3000. port dinleniyor");
});
app.get('/', (req: Request, res: Response) => {
    res.send('<div><h1>Merhaba ben selman</h1></div>');
})