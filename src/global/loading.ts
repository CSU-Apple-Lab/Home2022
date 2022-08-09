import { writable } from "svelte/store";

export const showLoading = writable(true);

/**
 * @note range(0.0,1.0)
 */
export const loadingProgress = writable(0);

