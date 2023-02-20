
import "reflect-metadata";
import "express-async-errors";
import "./shared/container"
import cors from "cors";
import express from "express";
import { CreateClientControllre } from "./modules/clients/useCases/createClient/createClientController";
import { ListClientsController } from "./modules/clients/useCases/listClients/listClientsController";

const app = express();
app.use(cors())
app.use(express.json());

const createClientController = new CreateClientControllre()
app.post("/clients", createClientController.handle)

const listClientsController = new ListClientsController()
app.get("/clients", listClientsController.handle)

app.listen(3333, () => console.log("server is running..."));