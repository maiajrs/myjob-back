import { PrismaClient} from "@prisma/client";
import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";

class ClientsRepository implements IClientsRepository {
  private prisma = new PrismaClient({
    log: ["query"]
  })
  async create ({ name, email, telefone, idade, linkedin, anotacoes }: ICreateClientDTO): Promise<void> {
    await this.prisma.clients.create({
      data: {
        name, 
        email,
        telefone, 
        idade,
        linkedin,
        anotacoes
      }
    })
  }
}

export {ClientsRepository};