var StorageModule;
(function (StorageModule) {
    var privateKey = 'storageKey';

    var LocalStorage = (function () {
        function LocalStorage() {
        }
        LocalStorage.prototype.store = function (content) {
            localStorage.setItem(privateKey, content);
        };
        return LocalStorage;
    })();
    StorageModule.LocalStorage = LocalStorage;

    var DevNullStorage = (function () {
        function DevNullStorage() {
        }
        DevNullStorage.prototype.store = function (content) {
        };
        return DevNullStorage;
    })();
    StorageModule.DevNullStorage = DevNullStorage;
})(StorageModule || (StorageModule = {}));

var storage = new StorageModule.LocalStorage();
storage.store('testing');
