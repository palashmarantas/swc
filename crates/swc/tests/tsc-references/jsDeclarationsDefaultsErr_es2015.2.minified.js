class Cls {
    constructor(){
        this.x = 12;
    }
}
Cls.y = "ok";
export default Cls;
class C {
}
export { C as default };
const x = 12;
export { x as default }; /**
 * @typedef {string | number} default
 */ 
