import { Component } from '@angular/core';

import { BasicButtonPage } from '../../../pages/components/button/basic-button/basic-button';
import { BlockButtonPage } from '../../../pages/components/button/block-button/block-button';
import { ClearButtonPage } from '../../../pages/components/button/clear-button/clear-button';
import { OutlineButtonPage } from '../../../pages/components/button/outline-button/outline-button';
import { RoundButtonPage } from '../../../pages/components/button/round-button/round-button';
import { FullButtonPage } from '../../../pages/components/button/full-button/full-button';
import { SizeButtonPage } from '../../../pages/components/button/size-button/size-button';
import { IconButtonPage } from '../../../pages/components/button/icon-button/icon-button';

@Component({
    templateUrl: "list-buttons.html"
})

export class ListButtonsPage {

    basicButton = BasicButtonPage;
    blockButton = BlockButtonPage;
    clearButton = ClearButtonPage;
    outlineButton = OutlineButtonPage;
    roundButton = RoundButtonPage;
    fullButton = FullButtonPage;
    sizeButton = SizeButtonPage;
    iconButton = IconButtonPage;
}