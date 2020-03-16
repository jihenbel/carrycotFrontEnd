import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() navSelected = new EventEmitter<string>();
    onSelect(nav) {
        this.navSelected.emit(nav);
    }
    // onCarrycotListing() {
    //     this.navSelected.emit({navSelected: 'carrycotList'});
    // }
    // onAddArticle() {
    //     this.navSelected.emit({navSelected: 'newArticle'});
    // }
    // onSuggestCarrycot() {
    //     this.navSelected.emit({navSelected: 'suggestCarrycot'});
    // }
}
