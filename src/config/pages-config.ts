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
            'name': 'details',
            'route': '/Inbox/details',
        },
    },
    'home': {
        'name': 'home',
        'route': '/home',
        'component': 'HomeComponent',
    }
}