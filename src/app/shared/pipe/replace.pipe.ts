import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace',
})

export class ReplacePipe implements PipeTransform {

    transform(value: string, valueToBeReplaced: string, valueToReplace: string) {
        return value.replace(valueToBeReplaced, valueToReplace);
    }
}