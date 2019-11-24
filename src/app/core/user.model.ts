export enum UserVmRole {
  Admin = 'Admin',
  User = 'User'
}

export interface IUserVm {
  createdAt?: Date | null;
  updatedAt?: Date | null;
  id?: string | null;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  fullName?: string | null;
  role?: UserVmRole | null;
}

export class UserVm implements IUserVm {
  createdAt?: Date | null;
  updatedAt?: Date | null;
  id?: string | null;
  email!: string;
  firstName?: string | null;
  lastName?: string | null;
  fullName?: string | null;
  role?: UserVmRole | null;

  constructor(data?: IUserVm) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          this[property] = data[property];
        }
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.createdAt = data.createdAt
        ? new Date(data.createdAt.toString())
        : null;
      this.updatedAt = data.updatedAt
        ? new Date(data.updatedAt.toString())
        : null;
      this.id = data.id !== undefined ? data.id : null;
      this.email = data.email !== undefined ? data.email : null;
      this.firstName = data.firstName !== undefined ? data.firstName : null;
      this.lastName = data.lastName !== undefined ? data.lastName : null;
      this.fullName = data.fullName !== undefined ? data.fullName : null;
      this.role = data.role !== undefined ? data.role : null;
    }
  }

  static fromJS(data: any): UserVm {
    data = typeof data === 'object' ? data : {};
    let result = new UserVm();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.createdAt = this.createdAt ? this.createdAt.toISOString() : null;
    data.updatedAt = this.updatedAt ? this.updatedAt.toISOString() : null;
    data.id = this.id !== undefined ? this.id : null;
    data.email = this.email !== undefined ? this.email : null;
    data.firstName = this.firstName !== undefined ? this.firstName : null;
    data.lastName = this.lastName !== undefined ? this.lastName : null;
    data.fullName = this.fullName !== undefined ? this.fullName : null;
    data.role = this.role !== undefined ? this.role : null;
    return data;
  }
}

export class LoginVm implements ILoginVm {
  email!: string;
  password!: string;

  constructor(data?: ILoginVm) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          this[property] = data[property];
        }
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.email = data['email'] !== undefined ? data['email'] : <any>null;
      this.password =
        data['password'] !== undefined ? data['password'] : <any>null;
    }
  }
}

export interface ILoginVm {
  email: string;
  password: string;
}

export class LoginResponseVm implements ILoginResponseVm {
  token!: string;
  user!: UserVm;

  constructor(data?: ILoginResponseVm) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          this[property] = data[property];
        }
      }
    }
    if (!data) {
      this.user = new UserVm();
    }
  }

  init(data?: any) {
    if (data) {
      this.token = data['token'] !== undefined ? data['token'] : null;
      this.user = data['user'] ? UserVm.fromJS(data['user']) : new UserVm();
    }
  }

  fromJS(data: any): LoginResponseVm {
    data = typeof data === 'object' ? data : {};
    let result = new LoginResponseVm();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['token'] = this.token !== undefined ? this.token : <any>null;
    data['user'] = this.user ? this.user.toJSON() : <any>null;
    return data;
  }
}

export interface ILoginResponseVm {
  token: string;
  user: UserVm;
}
