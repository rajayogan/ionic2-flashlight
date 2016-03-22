import {Page} from 'ionic-angular';
import {Flashlight} from 'ionic-native';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    constructor() {
        this.flashstatus = 'off';
        this.flashvalue = 1;
    }
    
    LightOn() {
        Flashlight.available((isAvailable) => {
            if(isAvailable)
                Flashlight.toggle();
                this.flashvalue += 1;
                if(this.flashvalue % 2 != 0)
                    this.flashstatus = 'on';
                    else
                        this.flashstatus = 'off';
                
        })
    }
    
}
