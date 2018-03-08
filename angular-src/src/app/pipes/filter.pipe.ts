import { Pipe, PipeTransform, Injectable  } from '@angular/core';

@Pipe({
  name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {

  transform(values: any, searchParam: any): any {
    if(searchParam === undefined) return values;
    return values.filter(function(value){
      return value.name.toLowerCase().includes(searchParam.toLowerCase());
    })
    
  }

}
