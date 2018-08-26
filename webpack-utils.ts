import * as _ from 'lodash';
import webpack, { Entry, EntryFunc, ExternalsElement } from 'webpack';
import SplitChunksOptions = webpack.Options.SplitChunksOptions;

export interface FaviconSetting {
    logo:string
}

export type AssetsType = 'js'|'style'|'font'|'image'|'favicon';

export interface IBaseConfigOptions {
    readonly shouldClean?: boolean;
    readonly enableCacheBusting?:boolean;
    readonly htmlPlugin?:boolean;
    readonly shouldGenerateSourceMaps?: boolean;
    readonly favicon?: FaviconSetting;
    readonly hmrNeeded?: boolean;
    readonly minimizeCss?: boolean;
    buildOutputName?(type:AssetsType): string;
}

export function constructConfigOptions(options:IBaseConfigOptions = {},defaults:IBaseConfigOptions){
    return _.defaults(options,defaults);
}

export interface ICopySetting {
    to:string,
    from:string
}

export interface IProjectSettings {
    root:string,
    entry: string | string[] | Entry | EntryFunc,
    externals?:ExternalsElement | ExternalsElement[]
    toClean:string[],
    toCopy:ICopySetting[],
    src:string,
    contentOutput:string,
    splitChunks:SplitChunksOptions
}