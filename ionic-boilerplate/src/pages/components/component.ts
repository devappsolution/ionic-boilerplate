import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ComponentsModel } from '../../models/components.model';

import { ActionSheetPage } from '../../pages/components/action-sheet/action-sheet';
import { AlertPage } from '../../pages/components/alert/alert';
import { BadgePage } from '../../pages/components/badge/badge';
import { ListButtonsPage } from '../../pages/components/button/list-buttons';
import { CheckBoxPage } from '../../pages/components/check-box/check-box';
import { DateTimePage } from '../../pages/components/date-time/date-time';
import { FabsPage } from '../../pages/components/fabs/fabs';

@Component({
    templateUrl: 'component.html'
})
export class ComponentPage {

    listComponents: Array<ComponentsModel>;

    constructor(public navCtrl: NavController) {
        this.listComponents = new Array<ComponentsModel>();
        this.initialieListComponents();
    }

    selectComponent(component: ComponentsModel): void {
        this.navCtrl.parent.parent.push(component.page, { animate: true, direction: "forward" });
    }

    private initialieListComponents(): void {
        this.listComponents.push(new ComponentsModel("Action Sheet", ActionSheetPage));
        this.listComponents.push(new ComponentsModel("Alerts", AlertPage));
        this.listComponents.push(new ComponentsModel("Badges", BadgePage));
        this.listComponents.push(new ComponentsModel("Buttons", ListButtonsPage));
        this.listComponents.push(new ComponentsModel("Checkbox", CheckBoxPage));
        this.listComponents.push(new ComponentsModel("Date Time", DateTimePage));
        this.listComponents.push(new ComponentsModel("Fabs", FabsPage));
    }
}
