export function Pagination(arr:any[],num1: number, num2: number): any[] {
        var cd=arr;var n=num1;var page=num2;
    var v2=n||24;
    var v3=(page?((page-1)*v2):0);
    var r=0;let v5=v2;
    while(r<v3){v5++;r++;}
    
    var v4=Math.min(v5,cd.length);

    var gh=[];var k=0;
    console.log('startIndex:', v3, 'page:', page, 'pageSize:', v2,'v4==',v4);

    for (let i = v3; i <v4; i++) {
     gh[k]=cd[i];
     k++;
    }

      return gh;
  }
 


export function Search(s1:string,arr:any[],num1: number, num2: number):any[] {
    var ab=arr;var name=s1;var n=num1;var page=num2;
    var cd=[];
  for(var a of ab) {
    var tmp=JSON.stringify(a);
    if(tmp.toLowerCase().includes(name.toLowerCase())) {
        cd.push(a);
    }
  }


  if(cd) 
  return Pagination(cd,n,page);
  else return [];

}




export function AdSearch(s1:string,arr:any[],num1: number, num2: number):any[] {
  var ab=arr;var name=s1;var n=num1;var page=num2;
  var cd=[];
for(var a of ab) {
  var tmp=JSON.stringify(a);
  if(tmp.toLowerCase().includes(name.toLowerCase())) {
      cd.push(a);
  }
}


if(cd) 
return Pagination(cd,cd.length,1);
else return [];

}


