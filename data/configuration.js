'use strict';

class Configuration {
    constructor () {
        this._host = '127.0.0.1';
        this._port = 3001;
        this._mooringStates = '(17, 18, 19, 20, 21, 22)';
        this._roadsteadStates = '(16, 19, 25)';
        this._notOperationalStates = '()';
    }
    
    get path () {
        return `http://${this._host}:${this._port}`;
    }
    
    get host () {
        return this._host;
    }

    get port () {
        return this._port;
    }

    get mooringStates () {
        return this._mooringStates;
    }

    get roadsteadStates () {
        return this._roadsteadStates;
    }
    
    getMappedUrl (routerObject) {
        return {
            '/mooredNow': {
                'methodToCall': routerObject.mooredNow,
                'params': [
                    'fk_portinformer', 'fk_ship_current_activity'
                ]
            },
            '/roadsteadNow': {
                'methodToCall': routerObject.roadsteadNow,
                'params': [
                    'fk_portinformer', 'fk_ship_current_activity'
                ],
            },
            '/favicon.ico': {
                'methodToCall': routerObject.favicon
            }
        };
    }
}


module.exports = Configuration;