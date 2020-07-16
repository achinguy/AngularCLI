export const routes = [
    {
        path: '',
        text: 'Home',
        icon: 'home',
        bgColor: ''
    },
    {
        path: 'contact-location',
        text: 'Contact & Locations',
        icon: 'address-book-o',
        bgColor: 'bg-color-cyan'
    },
    /*{
      path: 'calendar',
      text: 'Calendar',
      icon: 'calendar',
      bgColor: 'bg-color-teal'
    },*/
    {
        path: 'back-office',
        text: 'Back Office',
        icon: 'building',
        bgColor: 'bg-color-orange'
    },
    {
        path: 'operations',
        text: 'Operations',
        icon: 'gears',
        bgColor: 'bg-color-red'
    },
    {
        path: 'kit',
        text: 'Kit Production',
        icon: 'medkit',
        bgColor: 'bg-color-purple',
        subRoutes: [
            {
                path: 'ctm-facility-setup',
                text: 'CTM Facility Setup',
                icon: 'home',
                bgColor: ''
            },
            {
                path: 'ctm-orders',
                text: 'CTM Orders',
                icon: 'home',
                bgColor: ''
            },
            {
                path: 'ctm-orders-management',
                text: 'CTM Order Management',
                icon: 'home',
                bgColor: ''
            },
        ]
    },
    {
        path: 'study-management',
        text: 'Study Management',
        icon: 'book',
        bgColor: 'bg-color-blue'
    },
    {
        path: 'logistics',
        text: 'Logistics',
        icon: 'truck',
        bgColor: 'bg-color-green'
    },
    {
        path: 'test-dir',
        text: 'Test Directory',
        icon: 'folder-open-o',
        bgColor: 'bg-color-brown'
    },

];

export const sessionStorageNames = Object.freeze({
    myPrinterList: 'myPrintersList',
    allPrintersList: 'allPrintersList',
    idleTimeOut: 'isIdleTimeOut'
});

export const messages = Object.freeze({
    idleTimeLogOutMessage: 'Successfully logged out due to idle time.',
    logOutMessage: ' Successfully logged out!!!'
});

export const skipInterceptor = Object.freeze({
    skipApiErrorInterceptor: 'skip-api-error-Interceptor'
});