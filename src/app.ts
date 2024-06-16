import express, {Application, Request, Response} from "express";  // Corrected import

const app = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});  // Added missing parenthesis

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});  // Added missing parenthesis