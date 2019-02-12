export default class PageNavScript extends Laya.Script {
    /** @prop {name:navPageScene, tips:"要跳转的scene", type:String, default:""}*/
    public navPageScene: string = "";
    
    constructor() { super(); }
    
    onEnable(): void {
    }

    onDisable(): void {
    }

    onClick(): void {
        Laya.Scene.open(this.navPageScene);
    }
}