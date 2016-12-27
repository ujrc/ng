import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureUnit'
})
export class TemperatureUnitPipe implements PipeTransform {

  transform(temp: number,unitType, args?: any): any {
    if(unitType=='celsius')
    {
        const celsius=(temp-32)*5/9;
        return celsius;
    }else{

    return temp;
    }
  }

}
