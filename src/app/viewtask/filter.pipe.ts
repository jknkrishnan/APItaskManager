import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/task';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
    transform(tasks : Task[], searchText: string, searchParent: string, searchPriority: string, 
        searchStartDate: string, searchEndDate : string): Task[] 
    {           
        if (tasks && tasks.length){
            return tasks.filter(myfilter =>{
                if (searchText && myfilter.TaskDesc.toLowerCase().indexOf(searchText.toLowerCase()) === -1)
                {
                    return false;
                }               

                if (searchParent && myfilter.parent_name.toLowerCase().indexOf(searchParent.toLowerCase()) === -1)
                {
                    return false;
                }

                if (searchPriority && myfilter.priority.toString().toLowerCase().indexOf(searchPriority.toLowerCase()) === -1)
                {
                    return false;
                }

                if (searchStartDate && myfilter.newstrDate.toString().toLowerCase().indexOf(searchStartDate.toLowerCase()) === -1)
                {
                    return false;
                }

                if (searchEndDate && myfilter.newendDate.toString().toLowerCase().indexOf(searchEndDate.toLowerCase()) === -1)
                {
                    return false;
                }
                return true;                
           })
        }
        else{
            return tasks;
        }
    }   
}