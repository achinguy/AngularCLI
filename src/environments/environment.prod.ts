// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  idleTimeOut: 20,
  // appVersion: 'LTMS R' + require('../../package.json').version.match(/^[0-9].[0-9]/)[0] + ', Build: ' + require('../../package.json').version,
  authConfig: {
    tenant: 'quintiles.onmicrosoft.com',
    clientId: '1ad953ea-f3e2-42d9-9045-bbbd7af52a19',
    postLogoutRedirectUri: 'http://localhost:3000/logout',
    redirectUri: 'http://localhost:3000/callback',
    navigateToLoginRequestUrl: true,
    extraQueryParameter: 'scope=openid&domain_hint=q2labsolutions.com',
    domainValue: 'QAMR-ACCOUNTS\\\\',
    OcpApimSubscriptionKey: '33fe4c007afc4e20a27eb5e4e3531621',
    // expireOffsetSeconds: 3510
    // expireOffsetSeconds: 3510// 123 changes
    // Time for renewal of token is by default 55 mins from token being generated. To Change the timing
    // the below line should be uncommented and tested. if token has to be renewed in 2 mins, then we need
    // to set the expireoffsetSeconds as 3480 (in seconds).
    // expireOffsetSeconds: 3510
  },
  appInsights: {
    instrumentationKey: 'a1bf8ac8-59c7-4c05-9b2d-32e659146536',
    enableDebug: true,
    disableTelemetry: false
  },
  endPointConfig: {
    // baseURL: 'https://lotfops-dev.ltms.q2labs.net/',
    baseURL: 'http://localhost:8081/api/auth/', // 123 changes
    logAPI: 'Foundation/LotfHelperApi/api/LotfClientLog/logMessage',
    AccessioningShipmentServiceApi: 'Accessioning/ShipmentServiceApi/inboundshipment/shipments/shipmentsbytrackingIdstatus/'
  },
  functionEndPointConfig: {
    lookups: {
      getLookups: 'GetLookups',
      getReceivingLabShipppingLanesQuery: 'GetReceivingLabShipppingLanesQuery'
    },
    
    help: {
      getHelpTextData: 'GetHelpTextData'
    },
    report: {
      getReportDefinition: 'GetReportDefinition'
    },
    audit: {
      getAuditHistory: 'GetAuditHistory',
      getAuditDifferences: 'GetAuditDifferences'
    },
    
    samplePullRequestServiceApi: {
      Save: 'Save',
      Create: 'Create',
      Search: 'Search',
      Hold: 'Hold',
      Samples: 'Samples',
      Submit: 'Submit',
      GetSample: '',
      Cancel: 'Cancel'
    }
  },
  portalConfig: {
    baseURL: 'https://ltms-dev.q2labsolutions.com/',
    pages: {
      ltmsSupportPage: '#/portal/support?domain_hint=quintiles.onmicrosoft.com',
    }
  },
  outSystemConfig: {
    baseURL: 'https://usadc-vslftdw01.quintiles.net/',
    pages: {
      userInfoPage: 'QSquaredTheme_Q2/MyInfo.aspx',
      backOfficePage: 'BO_Common/LandingPage.aspx',
   
    }
  },

  httpConfig: {
    apiTimeOutInMilliSeconds: 900000,
    apiRetryIntervalInMilliSeconds: 30000,
    apiRetryCount: 3
  },
  // TRACE = 0,  DEBUG = 1,  INFO = 2,  LOG = 3,  WARN = 4,  ERROR = 5,  OFF = 6,
  consoleLogLevel: 2,
  serverLogLevel: 3
};