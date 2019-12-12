
export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  if (route.fullPath == '/' || route.matched.length == 0) {
    return process.env.NODE_ENV === 'development' ?  redirect('/list/1') : redirect('/test-tgl-content-page-list/list/1');
  }
  if(route.name=='list-page' && !/^\d+$/.test(route.params.page)){
    return process.env.NODE_ENV === 'development' ?  redirect('/list/1') : redirect('/test-tgl-content-page-list/list/1');
  }
}
