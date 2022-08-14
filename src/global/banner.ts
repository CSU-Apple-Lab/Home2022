import { writable, type Writable } from "svelte/store";

export const currentEvent:Writable<BannerEvent | null> = writable(null);

export const currentStatus:Writable<BannerStatus | null> = writable(null);

export interface BannerEvent {
    type: 'P' | 'C' ;
    page?: {
        from?:string;
        to?:string;
    }
    control?: {
        displayVideo?:boolean;
        close?:boolean;
        min?:boolean;
        max?:boolean;
    }
}

const MINIMIZED = 1<<1;
const DISPLAYVIDEO = 1<<2;
const DISPLAYSTATIC = 1<<3;

export class BannerStatus {
    flag = 0;
    get minimized():boolean { return (this.flag & MINIMIZED) !== 0 };
    get displayVideo():boolean { return (this.flag & DISPLAYVIDEO) !== 0 };
    get display():boolean { return (this.flag & DISPLAYSTATIC) !== 0 };
    constructor(minimized:boolean,displayVideo:boolean,display:boolean){
        if ( minimized ) {
            this.flag = this.flag | MINIMIZED;
        }
        if ( displayVideo ) {
            this.flag = this.flag | DISPLAYVIDEO;
        }
        if ( display ) {
            this.flag = this.flag | DISPLAYSTATIC;
        }
    }
    /**
     * 
     * @returns the number represent the current status.
     */
    statusMark():number{
       return this.flag; 
    };
}

export function statusChange(status:BannerStatus | null, event:BannerEvent | null | undefined) {
    if ( event === null || event === undefined ) {
        return new BannerStatus(false,false,false);
    }
    if ( status === null) {
        return new BannerStatus(false,false,false);
    }
    switch(status.statusMark()) {
        case 0:
            if ( event.type === 'P' ) {
                if ( event.page?.to === '/' ) {
                    return new BannerStatus(false,false,true);
                }
                return status;
            }
            break;
        case DISPLAYSTATIC:
            if ( event.type === 'P' ) {
                if ( event.page?.to === '/' ) {
                    return status;
                }
                return new BannerStatus(false,false,false);
            }
            if ( event.type === 'C' ) {
                if ( event.control?.displayVideo ) {
                    return new BannerStatus(false,true,true);
                }
            }
            break;
        case DISPLAYSTATIC | MINIMIZED:
            if ( event.type === 'P' ) {
                if ( event.page?.to === '/' ) {
                    return status;
                }
                return new BannerStatus(false,false,false);
            }
            if ( event.type === 'C' ) {
                if ( event.control?.max ) {
                    return new BannerStatus(false,false,true);
                }
                if ( event.control?.min ) {
                    return status;
                }
            }
            break;
        case DISPLAYVIDEO:
            if ( event.type === 'P' ) {
                if ( event?.page?.to === '/' ) {
                    return new BannerStatus(false,true,true);
                }
                return new BannerStatus(true,true,false);
            }
            if ( event.type === 'C' ) {
                if ( event?.control?.max ) {
                    return status;
                }
                if ( event.control?.min ) {
                    return new BannerStatus(true,true,false);
                }
                if ( event.control?.close ) {
                    return new BannerStatus(false,false,false);
                }
                if ( event.control?.displayVideo ) {
                    return status;
                }
            }
            break;
        case DISPLAYVIDEO | MINIMIZED:
            if ( event.type === 'P' ) {
                if ( event.page?.to === '/' ) {
                    return new BannerStatus(false,true,true);
                }
                return new BannerStatus(true,true,false);
            }
            if ( event.control?.close ) {
                return new BannerStatus(false,false,false);
            }
            if ( event.control?.max ) {
                return new BannerStatus(false,true,false);
            }
            return status;
        case DISPLAYSTATIC | DISPLAYVIDEO:
            if ( event.type === 'P' ) {
                if ( event.page?.to === '/' ) {
                    return status;
                }
                return new BannerStatus(true,true,false);
            }
            if ( event.type === 'C' ) {
                if ( event.control?.close ) {
                    return new BannerStatus(false,false,true);
                }
                if ( event.control?.max ) {
                    return status;
                }
                if ( event.control?.min) {
                    return new BannerStatus(true,true,true);
                }               
            }
            break;
        case DISPLAYSTATIC | DISPLAYVIDEO | MINIMIZED:
            if ( event.type === 'P' ) {
                if ( event.page?.to === '/' ) {
                    return status;
                }
                return new BannerStatus(true,true,false);
            }
            if ( event.type === 'C' ) {
                if ( event.control?.close ) {
                    return new BannerStatus(false,false,true);
                }
                if ( event.control?.max ) {
                    return new BannerStatus(false,true,true);
                }
                if ( event.control?.min) {
                    return status;
                }
            }
    }
    return new BannerStatus(false,false,false);
}