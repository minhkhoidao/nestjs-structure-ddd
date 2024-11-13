export class User {
  constructor(
    public readonly id: string,
    public email: string,
    public password: string,
  ) {}

  // Example business logic
  changeEmail(newEmail: string) {
    // Some validation here
    this.email = newEmail;
  }
}
