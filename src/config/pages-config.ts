export let config = {
    'demo': {
        'name': 'demo',
        'route': '/demo',
        'loadChildren': '../app/demo/demo.module#DemoModule',
        'permissionList': ['Authorized'],
        'InboxListing': {
            'name': 'InboxListing',
            'route': '/Inbox/InboxListing',
            'deeplink': true,
        },
        'details': {
            'path': 'details',
            'route': '/Inbox/details',
        },
    },
    'home': {
        'path': 'home',
        'route': '/home',
    },
    'login': {
        'path': 'login',
        'route': '/login',
    }
}