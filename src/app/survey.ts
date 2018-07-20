export class Survey {
  constructor(
    public username: string = "",
    public question: string = "",
    public option_1: string = "",
    public option_2: string = "",
    public option_3: string = "",
    public option_4: string = "",
    public created_at: Date = new Date(),
  ){}
}
