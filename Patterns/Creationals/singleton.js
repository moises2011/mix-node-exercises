//Old way
var UserStore = (function(){
    var _data = [];

    function add(item){
        _data.push(item);
    }
    function get(id){
        return _data.find(function(d){
            return d.id === id;
        });
    }

    return {
        add: add,
        get: get
    };
})();
//ES6
class UserStore {
    constructor(){ this._data = []; }
    add(item){ this._data.push(item); } 
    get(id){ this._data.find(d => d.id === id); }
};
const instance = new UserStore();
Object.freeze(instance);
export default instance;