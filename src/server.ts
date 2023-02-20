
import "reflect-metadata";
import "express-async-errors";
import "./shared/container"
import cors from "cors";
import express from "express";
import { CreateClientControllre } from "./modules/clients/useCases/createClient/createClientController";

const app = express();
app.use(cors())
app.use(express.json());

const createClientController = new CreateClientControllre()
app.post("/clients", createClientController.handle)

app.listen(3333, () => console.log("server is running..."));