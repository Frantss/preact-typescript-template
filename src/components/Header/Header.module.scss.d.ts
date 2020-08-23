declare namespace HeaderModuleScssNamespace {
  export interface IHeaderModuleScss {
    active: string;
    header: string;
  }
}

declare const HeaderModuleScssModule: HeaderModuleScssNamespace.IHeaderModuleScss;

export = HeaderModuleScssModule;
