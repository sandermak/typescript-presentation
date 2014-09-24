// The following path mappings are use in the TypeScript code by ///<amd-dependency> directives
require.config({
    paths: {
        'angular': 'lib/angular/angular',
        'angular-ui-router': 'lib/angular-ui-router/release/angular-ui-router'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        }
    }
});

require(['concerts']);