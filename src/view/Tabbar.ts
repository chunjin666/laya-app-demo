import { ui } from "../ui/layaMaxUI";

export class Tabbar extends ui.TabbarUI {
    
    static _tabbar: Tabbar;

    static readonly SCENES: string[] = ["Page1.scene", "Page2.scene", "Page3.scene"];

    static getInstance(): Tabbar {
        if (!this._tabbar) {
            this._tabbar = new Tabbar();
        }
        return this._tabbar;
    }

    static show() {
        let tabIns: Tabbar = this.getInstance();
        Laya.stage.addChild(tabIns);
    }

    static hide() {
        if (this._tabbar) {
            this._tabbar.removeSelf();
        }
    }

    createView(view: any) {
        super.createView(view);
        this.tab.on(Laya.Event.CHANGE, this, this.onClickTab);
    }

    onClickTab() {
        let scene: string = Tabbar.SCENES[this.tab.selectedIndex];
        Laya.Scene.open(scene);
    }
}