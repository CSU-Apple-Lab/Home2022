import type { Either } from "fp-ts/lib/Either";
import { left, right, map } from "fp-ts/lib/Either";
import { curry, compose, pipe } from "ramda";
import { ensure } from "@/functional/functor/either";
export namespace helper {

    export const selectHTMLElementById = <T extends HTMLElement>()=>curry((elementId:string):()=>Either<Error,T> => {
        return ()=>{
            const target = <T> document.getElementById(elementId);
            switch (target){
                case null:
                    return left<Error,T>(new Error(`[selectHTMLElementById](id:${elementId})=>Specify element not found`));
                default:
                    return right<Error,T>(target);
            }
        };
    })();

    export const mapHTMLElement = <T extends HTMLElement,Result>()=>curry((mapFn:(el:T)=>Result, selectFn:()=>Either<Error,T>):()=>Result => {
        return ensure(()=>map(mapFn)(selectFn()));
    })();

    export const addEventListener = <T extends HTMLElement, K>()=>curry(( selector: ()=>Either<Error,T>, k: keyof K, fn:()=>void ) => { ensure(selector)().addEventListener(<any>k,fn) });
    export const addMediaEventListener = ()=>addEventListener<HTMLMediaElement,HTMLMediaElementEventMap>();

    const playMap = mapHTMLElement<HTMLMediaElement,Promise<void>>()((el)=>el.play());
    const pauseMap = mapHTMLElement<HTMLMediaElement,void>()((el)=>el.pause());
    const rewindMap = mapHTMLElement<HTMLMediaElement,void>()((el)=>el.fastSeek(0));

    export const play = compose(playMap,selectHTMLElementById<HTMLMediaElement>());
    export const pause = compose(pauseMap,selectHTMLElementById<HTMLMediaElement>());
    export const rewind = compose(rewindMap,selectHTMLElementById<HTMLMediaElement>());

    export const addEventListenerById = pipe(selectHTMLElementById<HTMLMediaElement>(),addMediaEventListener()); 
}