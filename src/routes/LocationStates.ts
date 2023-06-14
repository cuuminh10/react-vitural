export interface LocationStates {
  '/'?: undefined;
  '/link'?: undefined;
  '/webview'?: undefined;
  '/webview?path=:path': {
    abc: string;
  };
  '/404'?: undefined;
  '/login'?: undefined;
}
