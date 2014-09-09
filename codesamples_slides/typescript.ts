module StorageModule {
	export interface Storage {
		store(content: string): void
	}

	var privateKey = 'storageKey'
	
	export class LocalStorage implements Storage {
		store(content: string): void {
			localStorage.setItem(privateKey, content);
		}
	}

	export class DevNullStorage implements Storage {
		store(content: string): void { }
	}
}

var storage: StorageModule.Storage = new StorageModule.LocalStorage();
storage.store('testing');