export default{
async fetch(request,env){
  let url=new URL(request.url);
  if(url.path name.startsWith('/")){
    url.hostname='coco1-2703842402.b4a.run'
    let new_request=new Request(url,request);
    return fetch(new_request);
   }
   return env.ASSETS.fetch(request);
 },
};
