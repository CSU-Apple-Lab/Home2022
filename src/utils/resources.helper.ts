export type TCdnConfigs = Record<string, string>

/**
 * 
 * @param cdnConfigs 
 * @param path path start without / or ./
 * @returns 
 */
export function getAllSourcePaths(cdnConfigs: TCdnConfigs, path: string): string[] {
    return Object.values(cdnConfigs).map(cdnPath => `${cdnPath}${path}`);
}