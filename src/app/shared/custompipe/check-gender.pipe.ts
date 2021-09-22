import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkGender'
})
export class CheckGenderPipe implements PipeTransform {

  transform(value: string, gender:string) {
    if(gender.toLocaleLowerCase()=="male"){
      return "Mr. "+value;
    }else {
      return "Miss. "+value;
    }
  }

}
