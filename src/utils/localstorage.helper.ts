import { left, right, type Either } from 'fp-ts/lib/Either';

export function store<T extends Object>(obj: T): () => T {
	const json = JSON.stringify(obj);
	localStorage.setItem(json, json);
	return () => JSON.parse(localStorage.getItem(json) as string);
}

export function storeWithKey<T extends Object>(key: string, obj: T) {
	const json = JSON.stringify(obj);
	localStorage.setItem(key, json);
}

export function get<T>(key: string): Either<Error, T> {
	const s = localStorage.getItem(key);
	if (s === null) {
		return left(Error('[localstorage.helper.ts/get] key not found in localStorage.'));
	}
	return right(JSON.parse(s));
}
