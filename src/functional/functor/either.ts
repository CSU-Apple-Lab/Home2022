import type { Either } from "fp-ts/lib/Either";
import { isLeft, isRight } from "fp-ts/lib/Either";
/**
 * @note ensure the return value of fn is Right, otherwise throw an error.
 */
export function ensure<T,U>(fn: ()=>Either<T,U>):()=>U{
    return ()=>{
        const either = fn();
        if( isLeft(either) ){
            if ( either.left instanceof Error ){
                throw new Error(`[ensure](fn:${fn.toString()})=>Expect Right, got Left: ${either.left.message}`);
            }
            throw new Error(`[ensure](fn:${fn.toString()})=>Expect Right, got Left`);
        }
        return either.right;
    }
}
