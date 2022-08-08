export class Student {
  constructor(
    private _id: number,
    private _name: string,
    private _email: string,
    private _phone: string,
    private _address: string
  ) {}

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get phone(): string {
    return this._phone;
  }
  public set phone(value: string) {
    this._phone = value;
  }

  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }
}
