interface ICreateClientDTO {
  name: string;
  email: string;
  telefone?: string;
  idade?: string;
  linkedin?: string;
  anotacoes?: string
}

interface IResponseClientDTO {
  id: string;
  name: string;
  email: string;
}

export {ICreateClientDTO, IResponseClientDTO};