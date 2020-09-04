
/* 
//storage封装
eg: sessionStorage
key             value
"mall"          {"user",{"username":"Tom","age":30}}
*/
const STORAGE_KEY="mall"

export default{
    //module_name 就相当于是user
    
    //存储值
    setItem(key,value,module_name){
        if(module_name){
            let val=this.getStorage(module_name);
            val[key]=value
            this.setItem(module_name,val)
        }else{
            let val=this.getStorage();
            val[key]=value
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))//存入后重新写入到window.sessionStorage
        }
    },
    getItem(key,module_name){
        //获取值value 传的可能是一个值也肯是一个对象
        //eg:获取某一模快下的属性  --user下的username
        if(module_name){
            let val= this.getItem(module_name)
            if(val){
                return val[key]
            }
        }
       return this.getStorage()[key]

    },
    getStorage(){
        //获取整个数据
     return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')   
    },
    clear(key,module_name){
        //删除key 或某个模块下的属性值
        let val=this.getStorage();
        if(module_name){
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        this.setItem(val);//删除后要记得重新写入
    }
}