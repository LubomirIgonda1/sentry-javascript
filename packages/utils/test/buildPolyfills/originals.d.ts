// NOTE: Unlike other types files, this is NOT auto-generated by our build scripts. Since these functions are the
// originals of functions we adapted from Rollup and Sucrase, there's no reason they should ever change, but if they do,
// this file needs to be regenerated, by running
//   `yarn tsc --allowJs --skipLibCheck --declaration --emitDeclarationOnly test/buildPolyfills/originals.js`
// from within the `utils` package. Keep in mind that running that command will clobber this note, so make sure to copy
// it before you regenerate the types, so you can add it back in.)

export function _asyncNullishCoalesce(lhs: any, rhsFn: any): Promise<any>;
export function _asyncOptionalChain(ops: any): Promise<any>;
export function _asyncOptionalChainDelete(ops: any): Promise<any>;
export function _nullishCoalesce(lhs: any, rhsFn: any): any;
export function _optionalChain(ops: any): any;
export function _optionalChainDelete(ops: any): any;