import { writable } from "svelte/store";

export const showProgressBar = writable(false);

/**
 * @note range(0.0,1.0)
 */
export const progressBarProgress = writable(0);

export const progressBarClass = writable("bg-blue-600");