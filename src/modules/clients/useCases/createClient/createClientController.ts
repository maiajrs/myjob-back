import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "./createClientUseCase";

class CreateClientControllre {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, email, telefone, idade, linkedin, anotacoes} = request.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);

    await createClientUseCase.execute({name, email, telefone, idade, linkedin, anotacoes});

    return response.status(201).send();
  }
}

export {CreateClientControllre};