export class ApiException implements IApiException {
  statusCode?: number | null;
  message?: string | null;
  status?: string | null;
  error?: string | null;
  errors?: any | null;
  timestamp?: string | null;
  path?: string | null;

  constructor(data?: IApiException) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.statusCode =
        data['statusCode'] !== undefined ? data['statusCode'] : <any>null;
      this.message =
        data['message'] !== undefined ? data['message'] : <any>null;
      this.status = data['status'] !== undefined ? data['status'] : <any>null;
      this.error = data['error'] !== undefined ? data['error'] : <any>null;
      this.errors = data['errors'] !== undefined ? data['errors'] : <any>null;
      this.timestamp =
        data['timestamp'] !== undefined ? data['timestamp'] : <any>null;
      this.path = data['path'] !== undefined ? data['path'] : <any>null;
    }
  }

  static fromJS(data: any): ApiException {
    data = typeof data === 'object' ? data : {};
    let result = new ApiException();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['statusCode'] =
      this.statusCode !== undefined ? this.statusCode : <any>null;
    data['message'] = this.message !== undefined ? this.message : <any>null;
    data['status'] = this.status !== undefined ? this.status : <any>null;
    data['error'] = this.error !== undefined ? this.error : <any>null;
    data['errors'] = this.errors !== undefined ? this.errors : <any>null;
    data['timestamp'] =
      this.timestamp !== undefined ? this.timestamp : <any>null;
    data['path'] = this.path !== undefined ? this.path : <any>null;
    return data;
  }
}

export interface IApiException {
  statusCode?: number | null;
  message?: string | null;
  status?: string | null;
  error?: string | null;
  errors?: any | null;
  timestamp?: string | null;
  path?: string | null;
}
