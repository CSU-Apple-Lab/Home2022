import type { Either } from "fp-ts/lib/Either";
import { left, right, map } from "fp-ts/lib/Either";
import { curry, compose, pipe } from "ramda";
import { ensure } from "@/functional/functor/either";

export const useSelectHTMLElementById = <T extends HTMLElement>() => curry((elementId: string): () => Either<Error, T> => {
    return () => {
        const target = <T>document.getElementById(elementId);
        switch (target) {
            case null:
                return left<Error, T>(new Error(`[selectHTMLElementById](id:${elementId})=>Specify element not found`));
            default:
                return right<Error, T>(target);
        }
    };
})();

export const useMapHTMLElement = <T extends HTMLElement, Result>() => curry((mapFn: (el: T) => Result, selectFn: () => Either<Error, T>): () => Result => {
    return ensure(() => map(mapFn)(selectFn()));
})();

export const useAddEventListener = <T extends HTMLElement, K>() => curry((selector: () => Either<Error, T>, k: keyof K, fn: () => void) => { ensure(selector)().addEventListener(<any>k, fn) });
export const useAddMediaEventListener = () => useAddEventListener<HTMLMediaElement, HTMLMediaElementEventMap>();

const playMap = useMapHTMLElement<HTMLMediaElement, Promise<void>>()((el) => el.play());
const pauseMap = useMapHTMLElement<HTMLMediaElement, void>()((el) => el.pause());
const rewindMap = useMapHTMLElement<HTMLMediaElement, void>()((el) => el.fastSeek(0));

export const play = compose(playMap, useSelectHTMLElementById<HTMLMediaElement>());
export const pause = compose(pauseMap, useSelectHTMLElementById<HTMLMediaElement>());
export const rewind = compose(rewindMap, useSelectHTMLElementById<HTMLMediaElement>());

export const addEventListenerById = pipe(useSelectHTMLElementById<HTMLMediaElement>(), useAddMediaEventListener());

export function preloadImg(src: string) {
		return new Promise((r) => {
			let img = new Image();
			img.onload = r;
			img.src = src;
		});
	}