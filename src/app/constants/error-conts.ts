export enum responseStatusCode {
    notFound = 404,
    success = 200,
    invalidRequest = 400,
    notAuthenticated = 401,
    internalServerError = 500,
    notImplementedError = 501,
    badGatewayError = 502,
    notAuthorized = 403,
    connectionRefused = 0,
    serviceUnavailable = 503,
    timeExpiry = 504,
    conflict = 409
}

export const messageTitles = Object.freeze({
    AuthenticationError: 'Authentication Error',
    CriticalError: 'Critical Error',
    ServiceUnavailable: 'Service unavailable',
    NotFound: 'Resource Not Found',
    NotAuthenticated: 'Unauthorized',
    NotAuthorized: 'Insufficient Privileges',
    InvalidRequest: 'Bad Request',
    InternalServerError: 'Internal Server Error',
    BadGatewayError: 'Bad Gateway Error',
    NotImplementedServerError: 'Not Implemented Error',
    TimeExpiry: 'Time Out',
    UserMismatch: 'User Mismatch',
    SessionMismatch: 'Session Mismatch',
    UserIdle: 'User Idle',
    Alert: 'Alert',
    Error: 'Error',
    Success: 'Success',
    Locked: 'Locked',
    LockFailed: 'Lock Failed',
    Danger: 'Danger',
    Warning: 'Warning',
    Confirmation: 'Confirmation',
    Yes: 'Yes',
    No: 'No',
    conflict: 'Duplicate Data',	Okay: 'Okay'
});

export const errorMessages = Object.freeze({
    HttpCommonError: 'API Server responded with an internal error and it has been logged. Please contact administrator',
    HttpUnhandledError: 'API Server error is unhandled and it has been logged. Please contact administrator',
    NotAuthenticated: 'User authentication failed. Please contact administrator',
    NotAuthorized: 'The user  does not have sufficient privileges. Please contact administrator to get access',
    NotImplementedServer: 'Operation which you are trying to access is not available',
    BadGateway: 'There is error in communicating to API Server',
    SessionExpired: 'Your session is expired. Please try to reload the application',
    ServiceUnavailable: 'API Server did not respond or is unavailable',
    Conflict: 'Data already exist.',
    InvalidRequest: 'Submitted request is in-correct',
    TimeOut: 'API Server is taking more time to respond. Please try again after sometime',
    NotFound: 'The requested operation/data is not found on the server',
    ExceptionOccur: 'Programming error occurred and it has been logged. Please contact administrator',
    defaultError: 'Given error message is empty. This is programming error',
    PrinterError:  'Labels have not been configured for this facility. Please contact Administrator to have the Stock Labels configured.',
    PrinterDetailMissing:
    'Label Printers have not been configured for this facility. Please contact Administrator to have the printers configured.'
});

export enum oprStatusResponse {
    success = 200,
    ok = 201,
    partial = 202,
    invalidRequest = 400,
    notAuthenticated = 401,
    default = 0,
    badRequest = 300,
    warning = 402
}